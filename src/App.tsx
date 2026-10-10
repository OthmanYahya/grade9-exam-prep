import React, { useState, useEffect } from 'react'
import {
  AppTab,
  ActiveSession,
  PracticeMode,
  DifficultyLevel,
  UserProgress,
  SessionHistoryItem,
  ChapterId
} from './types'
import { QUESTIONS } from './data/questions'
import { loadUserProgress, saveUserProgress, clearUserProgress } from './utils/storage'
import { gradeQuestion } from './utils/grading'
import { Header } from './components/Header'
import { StudyView } from './components/StudyView'
import { PracticeSetup } from './components/PracticeSetup'
import { QuizView } from './components/QuizView'
import { ResultsView } from './components/ResultsView'
import { ProgressView } from './components/ProgressView'
import { Scratchpad } from './components/Scratchpad'
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal'

export const App: React.FC = () => {
  const [selectedChapter, setSelectedChapter] = useState<ChapterId>('ch1')
  const [userProgress, setUserProgress] = useState<UserProgress>(loadUserProgress)
  const [currentTab, setCurrentTab] = useState<AppTab>('study')
  const [activeSession, setActiveSession] = useState<ActiveSession | null>(null)
  const [isScratchpadOpen, setIsScratchpadOpen] = useState<boolean>(false)
  const [isShortcutsOpen, setIsShortcutsOpen] = useState<boolean>(false)

  // Save progress whenever it updates
  useEffect(() => {
    saveUserProgress(userProgress)
  }, [userProgress])

  // Get question IDs that were either answered incorrectly or marked needs-practice
  const mistakeQuestionIds = QUESTIONS.filter((q) => {
    const rec = userProgress.questions[q.id]
    return rec && (rec.lastResult === 'incorrect' || rec.lastResult === 'self-practice')
  }).map((q) => q.id)

  // Toggle study section reviewed
  const handleToggleReviewed = (sectionId: number) => {
    setUserProgress((prev) => {
      const exists = prev.reviewedSections.includes(sectionId)
      const nextReviewed = exists
        ? prev.reviewedSections.filter((id) => id !== sectionId)
        : [...prev.reviewedSections, sectionId]
      return { ...prev, reviewedSections: nextReviewed }
    })
  }

  // Toggle checklist item
  const handleToggleChecklist = (id: string) => {
    setUserProgress((prev) => {
      const exists = prev.completedChecklist.includes(id)
      const nextList = exists
        ? prev.completedChecklist.filter((item) => item !== id)
        : [...prev.completedChecklist, id]
      return { ...prev, completedChecklist: nextList }
    })
  }

  // Launch practice session
  const handleStartSession = (
    mode: PracticeMode,
    questionIds: number[],
    isExamMode: boolean,
    level?: DifficultyLevel
  ) => {
    if (questionIds.length === 0) return

    const newSession: ActiveSession = {
      mode,
      level,
      questionIds,
      currentIndex: 0,
      userAnswers: {},
      submittedQuestionIds: [],
      selfAssessments: {},
      bookmarkedQuestionIds: [],
      isExamMode,
      isCompleted: false,
      startedAt: Date.now()
    }

    setActiveSession(newSession)
    setCurrentTab('practice')
  }

  // Launch topic practice from a study lesson
  const handleStartTopicPractice = (questionIds: number[], _topicTitle: string) => {
    handleStartSession('level', questionIds, false)
  }

  // Update answer for current question
  const handleUpdateAnswer = (questionId: number, answer: any) => {
    if (!activeSession) return
    setActiveSession((prev) => {
      if (!prev) return null
      return {
        ...prev,
        userAnswers: {
          ...prev.userAnswers,
          [questionId]: answer
        }
      }
    })
  }

  // Submit current question
  const handleSubmitQuestion = (questionId: number) => {
    if (!activeSession) return

    const question = QUESTIONS.find((q) => q.id === questionId)
    if (!question) return

    const userAnswer = activeSession.userAnswers[questionId]
    const selfAssessment = activeSession.selfAssessments[questionId]

    // In practice mode, update local progress immediately on submission
    if (!activeSession.isExamMode) {
      const grade = gradeQuestion(question, userAnswer, selfAssessment)
      let resultType: 'correct' | 'incorrect' | 'self-correct' | 'self-practice' = 'incorrect'

      if (grade.isSelfAssessed) {
        resultType = grade.isCorrect ? 'self-correct' : 'self-practice'
      } else {
        resultType = grade.isCorrect ? 'correct' : 'incorrect'
      }

      setUserProgress((prev) => {
        const existing = prev.questions[questionId] || { attempts: 0, correctCount: 0 }
        return {
          ...prev,
          questions: {
            ...prev.questions,
            [questionId]: {
              attempts: existing.attempts + 1,
              correctCount: existing.correctCount + (grade.isCorrect ? 1 : 0),
              lastResult: resultType,
              lastAnswer: userAnswer,
              lastAttemptedAt: new Date().toISOString()
            }
          }
        }
      })
    }

    setActiveSession((prev) => {
      if (!prev) return null
      const submitted = prev.submittedQuestionIds.includes(questionId)
        ? prev.submittedQuestionIds
        : [...prev.submittedQuestionIds, questionId]
      return {
        ...prev,
        submittedQuestionIds: submitted
      }
    })
  }

  // Self assessment for code repair/writing
  const handleSelfAssess = (questionId: number, assessment: 'correct' | 'needs-practice') => {
    if (!activeSession) return

    setActiveSession((prev) => {
      if (!prev) return null
      return {
        ...prev,
        selfAssessments: {
          ...prev.selfAssessments,
          [questionId]: assessment
        }
      }
    })

    // Also update progress
    setUserProgress((prev) => {
      const existing = prev.questions[questionId] || { attempts: 0, correctCount: 0 }
      const isCorrect = assessment === 'correct'
      return {
        ...prev,
        questions: {
          ...prev.questions,
          [questionId]: {
            attempts: existing.attempts + 1,
            correctCount: existing.correctCount + (isCorrect ? 1 : 0),
            lastResult: isCorrect ? 'self-correct' : 'self-practice',
            lastAttemptedAt: new Date().toISOString()
          }
        }
      }
    })
  }

  // Toggle question bookmark
  const handleToggleBookmark = (questionId: number) => {
    if (!activeSession) return
    setActiveSession((prev) => {
      if (!prev) return null
      const exists = prev.bookmarkedQuestionIds.includes(questionId)
      const nextBookmarks = exists
        ? prev.bookmarkedQuestionIds.filter((id) => id !== questionId)
        : [...prev.bookmarkedQuestionIds, questionId]
      return {
        ...prev,
        bookmarkedQuestionIds: nextBookmarks
      }
    })
  }

  // Navigate between questions
  const handleNavigateQuestion = (index: number) => {
    if (!activeSession) return
    setActiveSession((prev) => {
      if (!prev) return null
      return {
        ...prev,
        currentIndex: index
      }
    })
  }

  // Finish practice session
  const handleFinishSession = () => {
    if (!activeSession) return

    // Grade all questions and record progress
    let correctCount = 0
    let selfAssessedCount = 0

    const updatedQuestions = { ...userProgress.questions }

    activeSession.questionIds.forEach((qId) => {
      const question = QUESTIONS.find((q) => q.id === qId)
      if (!question) return

      const userAnswer = activeSession.userAnswers[qId]
      const selfAssessment = activeSession.selfAssessments[qId]
      const grade = gradeQuestion(question, userAnswer, selfAssessment)

      if (grade.isCorrect) correctCount++
      if (grade.isSelfAssessed) selfAssessedCount++

      let resultType: 'correct' | 'incorrect' | 'self-correct' | 'self-practice' = 'incorrect'
      if (grade.isSelfAssessed) {
        resultType = grade.isCorrect ? 'self-correct' : 'self-practice'
      } else {
        resultType = grade.isCorrect ? 'correct' : 'incorrect'
      }

      const existing = updatedQuestions[qId] || { attempts: 0, correctCount: 0 }
      updatedQuestions[qId] = {
        attempts: existing.attempts + 1,
        correctCount: existing.correctCount + (grade.isCorrect ? 1 : 0),
        lastResult: resultType,
        lastAnswer: userAnswer,
        lastAttemptedAt: new Date().toISOString()
      }
    })

    const durationSeconds = Math.round((Date.now() - activeSession.startedAt) / 1000)

    const historyItem: SessionHistoryItem = {
      id: String(Date.now()),
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      mode: activeSession.mode,
      level: activeSession.level,
      totalQuestions: activeSession.questionIds.length,
      correctCount,
      selfAssessedCount,
      durationSeconds
    }

    setUserProgress((prev) => ({
      ...prev,
      questions: updatedQuestions,
      sessionHistory: [...prev.sessionHistory, historyItem]
    }))

    setActiveSession((prev) => {
      if (!prev) return null
      return {
        ...prev,
        isCompleted: true
      }
    })

    setCurrentTab('results')
  }

  // Retry missed questions
  const handleRetryMistakes = (mistakeIds: number[]) => {
    handleStartSession('mistakes', mistakeIds, false)
  }

  // Reset all progress
  const handleResetProgress = () => {
    const cleared = clearUserProgress()
    setUserProgress(cleared)
    setActiveSession(null)
    setCurrentTab('study')
  }

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={setCurrentTab}
        selectedChapter={selectedChapter}
        onSelectChapter={setSelectedChapter}
        hasActiveResults={Boolean(activeSession && activeSession.isCompleted)}
        onToggleScratchpad={() => setIsScratchpadOpen(!isScratchpadOpen)}
        isScratchpadOpen={isScratchpadOpen}
        onOpenShortcuts={() => setIsShortcutsOpen(true)}
      />

      {/* Main View Router */}
      <main style={{ flex: 1 }}>
        {currentTab === 'study' && (
          <StudyView
            selectedChapter={selectedChapter}
            reviewedSections={userProgress.reviewedSections}
            onToggleReviewed={handleToggleReviewed}
            completedChecklist={userProgress.completedChecklist}
            onToggleChecklist={handleToggleChecklist}
            onStartTopicPractice={handleStartTopicPractice}
          />
        )}

        {currentTab === 'practice' && (
          activeSession && !activeSession.isCompleted ? (
            <QuizView
              session={activeSession}
              onUpdateAnswer={handleUpdateAnswer}
              onSubmitQuestion={handleSubmitQuestion}
              onSelfAssess={handleSelfAssess}
              onToggleBookmark={handleToggleBookmark}
              onNavigateQuestion={handleNavigateQuestion}
              onFinishSession={handleFinishSession}
              onToggleScratchpad={() => setIsScratchpadOpen(!isScratchpadOpen)}
            />
          ) : (
            <PracticeSetup
              selectedChapter={selectedChapter}
              onStartSession={handleStartSession}
              mistakeQuestionIds={mistakeQuestionIds}
            />
          )
        )}

        {currentTab === 'results' && activeSession && (
          <ResultsView
            session={activeSession}
            onRetryMistakes={handleRetryMistakes}
            onNewSession={() => {
              setActiveSession(null)
              setCurrentTab('practice')
            }}
            onGoToStudy={() => setCurrentTab('study')}
          />
        )}

        {currentTab === 'progress' && (
          <ProgressView
            selectedChapter={selectedChapter}
            progress={userProgress}
            onResetProgress={handleResetProgress}
            onPracticeMistakes={(ids) => handleStartSession('mistakes', ids, false)}
            onGoToStudy={() => setCurrentTab('study')}
          />
        )}
      </main>

      {/* Variable Tracing Scratchpad */}
      <Scratchpad
        isOpen={isScratchpadOpen}
        onClose={() => setIsScratchpadOpen(false)}
        notes={userProgress.scratchpadNotes}
        onChange={(val) =>
          setUserProgress((prev) => ({ ...prev, scratchpadNotes: val }))
        }
      />

      {/* Keyboard Shortcuts Modal */}
      <KeyboardShortcutsModal
        isOpen={isShortcutsOpen}
        onClose={() => setIsShortcutsOpen(false)}
      />
    </div>
  )
}
