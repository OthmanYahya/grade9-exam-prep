import React, { useState, useEffect } from 'react'
import { ActiveSession } from '../types'
import { QUESTIONS } from '../data/questions'
import { CodeBlock } from './CodeBlock'
import { gradeQuestion, GradeResult } from '../utils/grading'
import {
  Lightbulb,
  Edit3,
  Bookmark,
  Check,
  X,
  ArrowRight,
  ArrowLeft,
  Eye,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

interface QuizViewProps {
  session: ActiveSession
  onUpdateAnswer: (questionId: number, answer: any) => void
  onSubmitQuestion: (questionId: number) => void
  onSelfAssess: (questionId: number, assessment: 'correct' | 'needs-practice') => void
  onToggleBookmark: (questionId: number) => void
  onNavigateQuestion: (index: number) => void
  onFinishSession: () => void
  onToggleScratchpad: () => void
}

export const QuizView: React.FC<QuizViewProps> = ({
  session,
  onUpdateAnswer,
  onSubmitQuestion,
  onSelfAssess,
  onToggleBookmark,
  onNavigateQuestion,
  onFinishSession,
  onToggleScratchpad
}) => {
  const currentQId = session.questionIds[session.currentIndex]
  const currentQuestion = QUESTIONS.find((q) => q.id === currentQId) || QUESTIONS[0]

  const currentAnswer = session.userAnswers[currentQId]
  const isSubmitted = session.submittedQuestionIds.includes(currentQId)
  const isBookmarked = session.bookmarkedQuestionIds.includes(currentQId)
  const selfAssessment = session.selfAssessments[currentQId]

  const [showHint, setShowHint] = useState<boolean>(false)
  const [showModelSolution, setShowModelSolution] = useState<boolean>(false)

  // Reset hint & model solution view on question change
  useEffect(() => {
    setShowHint(false)
    setShowModelSolution(false)
  }, [currentQId])

  // Grade result for current question
  const gradeResult: GradeResult | null = isSubmitted
    ? gradeQuestion(currentQuestion, currentAnswer, selfAssessment)
    : null

  // Keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't intercept if user is typing in an input or textarea
      const target = e.target as HTMLElement
      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        if (e.key === 'Enter' && !e.shiftKey && currentQuestion.type === 'exact-output') {
          e.preventDefault()
          handlePrimaryAction()
        }
        return
      }

      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault()
        setShowHint((prev) => !prev)
      } else if (e.key === 's' || e.key === 'S') {
        e.preventDefault()
        onToggleScratchpad()
      } else if (e.key === 'Enter') {
        e.preventDefault()
        handlePrimaryAction()
      } else if (e.key === 'ArrowRight' && session.currentIndex < session.questionIds.length - 1) {
        e.preventDefault()
        onNavigateQuestion(session.currentIndex + 1)
      } else if (e.key === 'ArrowLeft' && session.currentIndex > 0) {
        e.preventDefault()
        onNavigateQuestion(session.currentIndex - 1)
      } else if (
        (currentQuestion.type === 'single-choice' || currentQuestion.type === 'multiple-choice') &&
        !isSubmitted
      ) {
        const optionKeys = ['A', 'B', 'C', 'D', 'E']
        const numKeys = ['1', '2', '3', '4', '5']

        let selectedId = ''
        const upper = e.key.toUpperCase()

        if (currentQuestion.options?.some((o) => o.id === 'True' || o.id === 'False')) {
          if (upper === 'T' || e.key === '1') selectedId = 'True'
          else if (upper === 'F' || e.key === '2') selectedId = 'False'
        } else if (optionKeys.includes(upper)) {
          selectedId = upper
        } else if (numKeys.includes(e.key)) {
          selectedId = optionKeys[parseInt(e.key, 10) - 1]
        }

        if (selectedId && currentQuestion.options?.some((o) => o.id === selectedId)) {
          if (currentQuestion.type === 'single-choice') {
            onUpdateAnswer(currentQId, selectedId)
          } else {
            // multi select
            const currentArr = Array.isArray(currentAnswer) ? [...currentAnswer] : []
            const nextArr = currentArr.includes(selectedId)
              ? currentArr.filter((id) => id !== selectedId)
              : [...currentArr, selectedId]
            onUpdateAnswer(currentQId, nextArr)
          }
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [
    currentQId,
    currentQuestion,
    currentAnswer,
    isSubmitted,
    session.currentIndex,
    session.questionIds.length,
    selfAssessment
  ])

  const handlePrimaryAction = () => {
    if (!session.isExamMode) {
      if (!isSubmitted) {
        // Can submit if answer provided or if self-assessed question
        if (
          currentAnswer !== undefined ||
          currentQuestion.type === 'code-writing' ||
          currentQuestion.type === 'code-repair'
        ) {
          onSubmitQuestion(currentQId)
        }
      } else {
        // Go to next question or finish
        if (session.currentIndex < session.questionIds.length - 1) {
          onNavigateQuestion(session.currentIndex + 1)
        } else {
          onFinishSession()
        }
      }
    } else {
      // In Exam mode: mark submitted and move forward
      onSubmitQuestion(currentQId)
      if (session.currentIndex < session.questionIds.length - 1) {
        onNavigateQuestion(session.currentIndex + 1)
      } else {
        onFinishSession()
      }
    }
  }

  const totalQuestions = session.questionIds.length
  const progressPercent = ((session.currentIndex + 1) / totalQuestions) * 100

  return (
    <div style={{ maxWidth: '820px', margin: '0 auto', padding: '24px 20px 80px' }}>
      {/* Top Question Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
          paddingBottom: '12px',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span
            style={{
              fontSize: '12px',
              fontFamily: 'var(--font-mono)',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '4px',
              backgroundColor: 'var(--bg-subtle)',
              color: 'var(--text-secondary)'
            }}
          >
            {currentQuestion.chapterId === 'ch1'
              ? `AI · Q${currentQuestion.questionNumber}`
              : `Level ${currentQuestion.level}`}
          </span>
          <span style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            Question {session.currentIndex + 1} of {totalQuestions}
          </span>
          {session.isExamMode && (
            <span
              style={{
                fontSize: '11px',
                padding: '2px 6px',
                borderRadius: '3px',
                backgroundColor: 'var(--warn-bg)',
                color: 'var(--warn)',
                fontWeight: 600,
                letterSpacing: '0.04em',
                textTransform: 'uppercase'
              }}
            >
              Exam Mode
            </span>
          )}
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={() => onToggleBookmark(currentQId)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 8px',
              borderRadius: '4px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: isBookmarked ? 'var(--warn-bg)' : '#FFFFFF',
              color: isBookmarked ? 'var(--warn)' : 'var(--text-muted)',
              fontSize: '12px',
              cursor: 'pointer'
            }}
            title="Bookmark for review"
          >
            <Bookmark size={13} />
            <span>{isBookmarked ? 'Bookmarked' : 'Bookmark'}</span>
          </button>
        </div>
      </div>

      {/* Understated Progress Bar */}
      <div
        style={{
          height: '3px',
          backgroundColor: 'var(--border-hairline)',
          borderRadius: '2px',
          overflow: 'hidden',
          marginBottom: '28px'
        }}
      >
        <div
          style={{
            height: '100%',
            width: `${progressPercent}%`,
            backgroundColor: 'var(--accent)',
            transition: 'width 0.2s ease'
          }}
        />
      </div>

      {/* Main Question Card */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-hairline)',
          borderRadius: '6px',
          padding: '28px 32px',
          boxShadow: 'var(--shadow-subtle)',
          marginBottom: '20px'
        }}
      >
        {/* Multi-select guidance banner if applicable */}
        {currentQuestion.type === 'multiple-choice' && (
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '4px',
              backgroundColor: 'var(--warn-bg)',
              color: 'var(--warn)',
              fontSize: '12px',
              fontWeight: 600,
              marginBottom: '16px'
            }}
          >
            <span>Select {currentQuestion.selectCount === 3 ? 'THREE' : 'TWO'} answers</span>
          </div>
        )}

        {/* Input Context callout if provided (e.g. user enters 5) */}
        {currentQuestion.inputContext && (
          <div
            style={{
              backgroundColor: '#F8F6F0',
              borderLeft: '3px solid var(--accent)',
              padding: '8px 12px',
              fontSize: '13px',
              color: 'var(--text-secondary)',
              marginBottom: '16px'
            }}
          >
            <strong>Given input:</strong> {currentQuestion.inputContext}
          </div>
        )}

        {/* Prompt */}
        <h2
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '20px',
            fontWeight: 600,
            lineHeight: '1.4',
            color: 'var(--text-primary)',
            marginBottom: '18px'
          }}
        >
          {currentQuestion.prompt}
        </h2>

        {/* Code Snippet if applicable */}
        {currentQuestion.codeSnippet && (
          <div style={{ marginBottom: '22px' }}>
            <CodeBlock code={currentQuestion.codeSnippet} language="python" />
          </div>
        )}

        {/* ============================================================== */}
        {/* ANSWER CONTROLS ACCORDING TO QUESTION TYPE                    */}
        {/* ============================================================== */}

        {/* 1. Single Choice Options */}
        {currentQuestion.type === 'single-choice' && currentQuestion.options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {currentQuestion.options.map((opt) => {
              const isSelected = currentAnswer === opt.id
              const showCorrectness = !session.isExamMode && isSubmitted
              const isCorrectOpt = opt.id === currentQuestion.correctAnswer
              const isSelectedWrong = isSelected && !isCorrectOpt

              let bg = isSelected ? 'var(--bg-subtle)' : '#FAF8F4'
              let border = isSelected ? 'var(--accent)' : 'var(--border-hairline)'

              if (showCorrectness) {
                if (isCorrectOpt) {
                  bg = 'var(--success-bg)'
                  border = 'var(--success-border)'
                } else if (isSelectedWrong) {
                  bg = 'var(--danger-bg)'
                  border = 'var(--danger-border)'
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    if (!isSubmitted) onUpdateAnswer(currentQId, opt.id)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '5px',
                    border: `1px solid ${border}`,
                    backgroundColor: bg,
                    cursor: isSubmitted ? 'default' : 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--border-strong)'}`,
                      backgroundColor: isSelected ? 'var(--accent)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {opt.id}
                  </span>
                  <span
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--text-primary)',
                      fontFamily: opt.text.includes('`') || /^\d+(\.\d+)?$|^(True|False|Error)$/.test(opt.text) ? 'var(--font-mono)' : 'inherit'
                    }}
                  >
                    {opt.text}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* 2. Multiple Choice Options */}
        {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
            {currentQuestion.options.map((opt) => {
              const currentArr: string[] = Array.isArray(currentAnswer) ? currentAnswer : []
              const isSelected = currentArr.includes(opt.id)

              const showCorrectness = !session.isExamMode && isSubmitted
              const isCorrectOpt = Array.isArray(currentQuestion.correctAnswer)
                ? currentQuestion.correctAnswer.includes(opt.id)
                : currentQuestion.correctAnswer === opt.id
              const isSelectedWrong = isSelected && !isCorrectOpt

              let bg = isSelected ? 'var(--bg-subtle)' : '#FAF8F4'
              let border = isSelected ? 'var(--accent)' : 'var(--border-hairline)'

              if (showCorrectness) {
                if (isCorrectOpt) {
                  bg = 'var(--success-bg)'
                  border = 'var(--success-border)'
                } else if (isSelectedWrong) {
                  bg = 'var(--danger-bg)'
                  border = 'var(--danger-border)'
                }
              }

              return (
                <div
                  key={opt.id}
                  onClick={() => {
                    if (!isSubmitted) {
                      const next = isSelected
                        ? currentArr.filter((id) => id !== opt.id)
                        : [...currentArr, opt.id]
                      onUpdateAnswer(currentQId, next)
                    }
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '12px 14px',
                    borderRadius: '5px',
                    border: `1px solid ${border}`,
                    backgroundColor: bg,
                    cursor: isSubmitted ? 'default' : 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <span
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '4px',
                      border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--border-strong)'}`,
                      backgroundColor: isSelected ? 'var(--accent)' : '#FFFFFF',
                      color: isSelected ? '#FFFFFF' : 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '12px',
                      fontWeight: 600,
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    {isSelected ? <Check size={14} /> : opt.id}
                  </span>
                  <span
                    style={{
                      fontSize: '14.5px',
                      color: 'var(--text-primary)',
                      fontFamily: opt.text.startsWith('`') ? 'var(--font-mono)' : 'inherit'
                    }}
                  >
                    {opt.text}
                  </span>
                </div>
              )
            })}
          </div>
        )}

        {/* 3. Exact Output input field */}
        {currentQuestion.type === 'exact-output' && (
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12.5px',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '6px'
              }}
            >
              Type the exact output (spaces, hyphens, and line breaks matter):
            </label>
            <input
              type="text"
              value={currentAnswer || ''}
              onChange={(e) => onUpdateAnswer(currentQId, e.target.value)}
              disabled={isSubmitted && !session.isExamMode}
              placeholder="e.g. Good-Luck"
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '15px',
                fontFamily: 'var(--font-mono)',
                borderRadius: '5px',
                border: '1px solid var(--border-strong)',
                backgroundColor: isSubmitted && !session.isExamMode ? '#FAF8F4' : '#FFFFFF',
                outline: 'none'
              }}
              autoFocus
            />
          </div>
        )}

        {/* 4. Code Repair and Code Writing */}
        {(currentQuestion.type === 'code-repair' || currentQuestion.type === 'code-writing') && (
          <div style={{ marginBottom: '20px' }}>
            <label
              style={{
                display: 'block',
                fontSize: '12.5px',
                fontWeight: 600,
                color: 'var(--text-secondary)',
                marginBottom: '6px'
              }}
            >
              {currentQuestion.type === 'code-repair'
                ? 'Write your corrected line of code:'
                : 'Write your Python program solution below:'}
            </label>
            <textarea
              value={currentAnswer !== undefined ? currentAnswer : currentQuestion.starterCode || ''}
              onChange={(e) => onUpdateAnswer(currentQId, e.target.value)}
              disabled={isSubmitted && !session.isExamMode}
              rows={currentQuestion.type === 'code-writing' ? 6 : 3}
              style={{
                width: '100%',
                padding: '10px 14px',
                fontSize: '13.5px',
                fontFamily: 'var(--font-mono)',
                lineHeight: '1.5',
                borderRadius: '5px',
                border: '1px solid var(--border-strong)',
                backgroundColor: isSubmitted && !session.isExamMode ? '#FAF8F4' : '#FFFFFF',
                outline: 'none',
                resize: 'vertical'
              }}
            />

            {/* Model Solution Reveal Toggle */}
            <div style={{ marginTop: '12px' }}>
              <button
                type="button"
                onClick={() => setShowModelSolution(!showModelSolution)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  background: 'none',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: '4px',
                  padding: '5px 10px',
                  fontSize: '12px',
                  color: 'var(--accent)',
                  fontWeight: 500,
                  cursor: 'pointer'
                }}
              >
                <Eye size={13} />
                <span>{showModelSolution ? 'Hide Model Solution' : 'Reveal Model Solution'}</span>
              </button>
            </div>

            {/* Model Solution & Self Assessment */}
            {showModelSolution && currentQuestion.modelSolution && (
              <div
                style={{
                  marginTop: '12px',
                  padding: '14px',
                  backgroundColor: '#FAF8F3',
                  border: '1px solid var(--border-hairline)',
                  borderRadius: '6px'
                }}
              >
                <div style={{ fontSize: '11.5px', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '4px' }}>
                  Model Solution:
                </div>
                <CodeBlock code={currentQuestion.modelSolution} language="python" showLineNumbers={false} />

                <div style={{ marginTop: '14px', borderTop: '1px solid var(--border-hairline)', paddingTop: '10px' }}>
                  <div style={{ fontSize: '12.5px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    Honest Self-Assessment:
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => onSelfAssess(currentQId, 'correct')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: `1px solid ${selfAssessment === 'correct' ? 'var(--success)' : 'var(--border-strong)'}`,
                        backgroundColor: selfAssessment === 'correct' ? 'var(--success-bg)' : '#FFFFFF',
                        color: selfAssessment === 'correct' ? 'var(--success)' : 'var(--text-secondary)',
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        fontWeight: 500
                      }}
                    >
                      <CheckCircle2 size={14} />
                      <span>I got it right</span>
                    </button>
                    <button
                      onClick={() => onSelfAssess(currentQId, 'needs-practice')}
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '6px 12px',
                        borderRadius: '4px',
                        border: `1px solid ${selfAssessment === 'needs-practice' ? 'var(--warn)' : 'var(--border-strong)'}`,
                        backgroundColor: selfAssessment === 'needs-practice' ? 'var(--warn-bg)' : '#FFFFFF',
                        color: selfAssessment === 'needs-practice' ? 'var(--warn)' : 'var(--text-secondary)',
                        fontSize: '12.5px',
                        cursor: 'pointer',
                        fontWeight: 500
                      }}
                    >
                      <AlertCircle size={14} />
                      <span>Need more practice</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Hint Box (Optional, derived from lesson) */}
        {showHint && (
          <div
            style={{
              marginTop: '16px',
              padding: '12px 14px',
              backgroundColor: '#FAF4E8',
              border: '1px solid var(--warn-border)',
              borderRadius: '5px',
              fontSize: '13px',
              color: 'var(--warn)',
              display: 'flex',
              gap: '10px',
              alignItems: 'flex-start'
            }}
          >
            <Lightbulb size={16} style={{ flexShrink: 0, marginTop: '2px' }} />
            <div>
              <strong>Guided Hint: </strong>
              {currentQuestion.hint}
            </div>
          </div>
        )}

        {/* Action Controls Bar */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: '24px',
            paddingTop: '16px',
            borderTop: '1px solid var(--border-hairline)',
            flexWrap: 'wrap',
            gap: '10px'
          }}
        >
          <div style={{ display: 'flex', gap: '8px' }}>
            <button
              type="button"
              onClick={() => setShowHint(!showHint)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '4px',
                border: '1px solid var(--border-hairline)',
                backgroundColor: showHint ? '#FAF4E8' : '#FFFFFF',
                color: showHint ? 'var(--warn)' : 'var(--text-secondary)',
                fontSize: '12.5px',
                cursor: 'pointer'
              }}
              title="Shortcut: H"
            >
              <Lightbulb size={13} />
              <span>{showHint ? 'Hide Hint' : 'Hint'}</span>
            </button>

            <button
              type="button"
              onClick={onToggleScratchpad}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '6px 10px',
                borderRadius: '4px',
                border: '1px solid var(--border-hairline)',
                backgroundColor: '#FFFFFF',
                color: 'var(--text-secondary)',
                fontSize: '12.5px',
                cursor: 'pointer'
              }}
              title="Shortcut: S"
            >
              <Edit3 size={13} />
              <span>Trace Pad</span>
            </button>
          </div>

          <div style={{ display: 'flex', gap: '8px' }}>
            {session.currentIndex > 0 && (
              <button
                type="button"
                onClick={() => onNavigateQuestion(session.currentIndex - 1)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '7px 12px',
                  borderRadius: '5px',
                  border: '1px solid var(--border-hairline)',
                  backgroundColor: '#FFFFFF',
                  color: 'var(--text-secondary)',
                  fontSize: '13px',
                  cursor: 'pointer'
                }}
              >
                <ArrowLeft size={14} />
                <span>Previous</span>
              </button>
            )}

            <button
              type="button"
              onClick={handlePrimaryAction}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 18px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'var(--accent)',
                color: '#FFFFFF',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              {!session.isExamMode ? (
                !isSubmitted ? (
                  <span>Check Answer</span>
                ) : session.currentIndex < totalQuestions - 1 ? (
                  <>
                    <span>Next Question</span>
                    <ArrowRight size={14} />
                  </>
                ) : (
                  <span>View Final Results</span>
                )
              ) : session.currentIndex < totalQuestions - 1 ? (
                <>
                  <span>Save & Next</span>
                  <ArrowRight size={14} />
                </>
              ) : (
                <span>Finish & Grade Exam</span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* PRACTICE MODE FEEDBACK CARD (REVEALED ON SUBMISSION)           */}
      {/* ============================================================== */}
      {!session.isExamMode && isSubmitted && gradeResult && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: '6px',
            border: `1px solid ${gradeResult.isCorrect ? 'var(--success-border)' : 'var(--danger-border)'}`,
            padding: '24px 28px',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '28px'
          }}
        >
          {/* Header Banner */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '14px'
            }}
          >
            {gradeResult.isCorrect ? (
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--success)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Check size={15} />
              </div>
            ) : (
              <div
                style={{
                  width: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--danger)',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <X size={15} />
              </div>
            )}
            <div>
              <span
                style={{
                  fontWeight: 600,
                  fontSize: '15px',
                  color: gradeResult.isCorrect ? 'var(--success)' : 'var(--danger)'
                }}
              >
                {gradeResult.isCorrect ? 'Correct!' : 'Incorrect'}
              </span>
              <span style={{ fontSize: '13px', color: 'var(--text-secondary)', marginLeft: '8px' }}>
                {gradeResult.feedbackText}
              </span>
            </div>
          </div>

          {/* Step-by-Step Variable Trace if provided */}
          {currentQuestion.traceSteps && (
            <div
              style={{
                margin: '14px 0',
                padding: '12px 14px',
                backgroundColor: '#FAF8F4',
                borderRadius: '5px',
                border: '1px solid var(--border-hairline)'
              }}
            >
              <div
                style={{
                  fontSize: '11px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  color: 'var(--text-muted)',
                  marginBottom: '8px'
                }}
              >
                Step-by-Step Variable Trace:
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {currentQuestion.traceSteps.map((step, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--accent)', fontWeight: 600 }}>
                      {step.step}
                    </span>
                    <span style={{ color: 'var(--text-muted)' }}>→</span>
                    <span style={{ color: 'var(--text-primary)' }}>{step.state}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Worked Explanation */}
          <div style={{ marginTop: '12px' }}>
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                color: 'var(--text-muted)',
                marginBottom: '4px'
              }}
            >
              Worked Explanation:
            </div>
            <p style={{ color: 'var(--text-primary)', fontSize: '14.5px', lineHeight: '1.6' }}>
              {currentQuestion.explanation}
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
