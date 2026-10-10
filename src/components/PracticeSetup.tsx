import React, { useState } from 'react'
import { PracticeMode, DifficultyLevel, ChapterId } from '../types'
import { QUESTIONS } from '../data/questions'
import { Zap, Layers, Award, RotateCcw } from 'lucide-react'

interface PracticeSetupProps {
  selectedChapter: ChapterId
  onStartSession: (
    mode: PracticeMode,
    questionIds: number[],
    isExamMode: boolean,
    level?: DifficultyLevel
  ) => void
  mistakeQuestionIds: number[]
}

export const PracticeSetup: React.FC<PracticeSetupProps> = ({
  selectedChapter,
  onStartSession,
  mistakeQuestionIds
}) => {
  const [selectedMode, setSelectedMode] = useState<PracticeMode>('level')
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel>(1)
  const [selectedAISection, setSelectedAISection] = useState<string>('1.1')
  const [isExamMode, setIsExamMode] = useState<boolean>(false)

  const chapterQuestions = QUESTIONS.filter((q) => q.chapterId === selectedChapter)
  const chapterMistakes = mistakeQuestionIds.filter((id) =>
    chapterQuestions.some((q) => q.id === id)
  )

  const handleLaunch = () => {
    let ids: number[] = []

    if (selectedMode === 'quick') {
      const shuffle = (arr: number[]) => [...arr].sort(() => Math.random() - 0.5)
      ids = shuffle(chapterQuestions.map((q) => q.id)).slice(0, 10)
    } else if (selectedMode === 'level') {
      if (selectedChapter === 'ch3') {
        ids = chapterQuestions.filter((q) => q.level === selectedLevel).map((q) => q.id)
      } else {
        // For Chapter 1: filter by selected section or part
        if (selectedAISection === 'part-a') {
          ids = chapterQuestions.filter((q) => q.questionNumber <= 38).map((q) => q.id)
        } else if (selectedAISection === 'part-b') {
          ids = chapterQuestions.filter((q) => q.questionNumber >= 39).map((q) => q.id)
        } else {
          ids = chapterQuestions.filter((q) => q.sectionId === selectedAISection).map((q) => q.id)
        }
      }
    } else if (selectedMode === 'exam') {
      ids = chapterQuestions.map((q) => q.id)
    } else if (selectedMode === 'mistakes') {
      ids = chapterMistakes
    }

    onStartSession(
      selectedMode,
      ids,
      isExamMode,
      selectedChapter === 'ch3' && selectedMode === 'level' ? selectedLevel : undefined
    )
  }

  const pythonLevelDetails = [
    {
      level: 1 as DifficultyLevel,
      title: 'Level 1: Build Confidence',
      range: 'Q1 – Q12 (12 questions)',
      desc: 'Terminology, IDLE shell vs editor, valid variable names, strings, and fundamental operators.'
    },
    {
      level: 2 as DifficultyLevel,
      title: 'Level 2: Regular Exam Practice',
      range: 'Q13 – Q26 (14 questions)',
      desc: 'Standard traces, assignment updates, case sensitivity, print separators, remainder (%), and input().'
    },
    {
      level: 3 as DifficultyLevel,
      title: 'Level 3: Predicted Harder Questions',
      range: 'Q27 – Q38 (12 questions)',
      desc: 'Multi-step variable updates, exact output formatting (sep/end), negative numbers, and logic combinations.',
      badge: 'Predicted exam twists'
    },
    {
      level: 4 as DifficultyLevel,
      title: 'Level 4: Surprises, Debugging & Writing',
      range: 'Q39 – Q48 (10 questions)',
      desc: 'Code correction, spotting NameError/TypeError, formula calculation, and short Python programs.'
    }
  ]

  const aiModuleDetails = [
    {
      id: '1.1',
      title: 'Section 1.1: Introduction to AI',
      range: '11 Questions (Q1–8, Q39–41)',
      desc: 'AI vs Autonomous AI, Supervised / Unsupervised learning, RLHF human feedback, and AI Engineer responsibilities.'
    },
    {
      id: '1.2',
      title: 'Section 1.2: Core Branches of AI',
      range: '9 Questions (Q9–15, Q42–43)',
      desc: 'Computer Vision, NLP, Speech Recognition, Expert Systems with if-then rules, and Robotics.'
    },
    {
      id: '1.3',
      title: 'Section 1.3: Generative AI',
      range: '22 Questions (Q16–32, Q44–48)',
      desc: 'Pretraining vs fine-tuning, Transformers, self-attention, GPT, GANs, Diffusion models, and prompt types.'
    },
    {
      id: '1.4',
      title: 'Section 1.4: AI and Ethics',
      range: '8 Questions (Q33–38, Q49–50)',
      desc: 'Deepfakes, academic plagiarism, algorithmic bias, mass surveillance privacy trade-offs, and hallucinations.'
    },
    {
      id: 'part-a',
      title: 'Part A: Multiple Choice Exam',
      range: '38 Questions (Q1–Q38)',
      desc: 'All 38 multiple choice questions from Chapter 1 with 4 answer choices.'
    },
    {
      id: 'part-b',
      title: 'Part B: True or False Exam',
      range: '12 Questions (Q39–Q50)',
      desc: 'All 12 true/false assessment statements testing deep conceptual accuracy.'
    }
  ]

  return (
    <div className="responsive-container" style={{ maxWidth: '820px' }}>
      {/* Header */}
      <div style={{ borderBottom: '1px solid var(--border-hairline)', paddingBottom: '20px', marginBottom: '24px' }}>
        <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '6px' }}>
          {selectedChapter === 'ch1'
            ? 'Tech Explorers: AI in Action · Practice Engine'
            : 'Interactive Practice Engine · Level K'}
        </div>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 600, color: 'var(--text-primary)' }}>
          {selectedChapter === 'ch1'
            ? 'Practice Chapter 1: AI in Action'
            : 'Practice Chapter 3: Python Revision'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginTop: '6px' }}>
          Select a quick warm-up session, drill by module or level, attempt the full{' '}
          {chapterQuestions.length}-question exam, or reattempt missed questions.
        </p>
      </div>

      {/* Mode Selection Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 130px), 1fr))', gap: '10px', marginBottom: '24px' }}>
        {/* Quick Practice */}
        <div
          onClick={() => setSelectedMode('quick')}
          style={{
            padding: '14px 12px',
            borderRadius: '6px',
            border: `1px solid ${selectedMode === 'quick' ? 'var(--accent)' : 'var(--border-hairline)'}`,
            backgroundColor: selectedMode === 'quick' ? 'var(--accent-subtle)' : '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Zap size={16} color={selectedMode === 'quick' ? 'var(--accent)' : 'var(--text-secondary)'} />
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Quick Drill</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            10 randomized questions from Chapter {selectedChapter === 'ch1' ? '1' : '3'}. Perfect for a quick review.
          </div>
        </div>

        {/* Practice by Level / Module */}
        <div
          onClick={() => setSelectedMode('level')}
          style={{
            padding: '14px 12px',
            borderRadius: '6px',
            border: `1px solid ${selectedMode === 'level' ? 'var(--accent)' : 'var(--border-hairline)'}`,
            backgroundColor: selectedMode === 'level' ? 'var(--accent-subtle)' : '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Layers size={16} color={selectedMode === 'level' ? 'var(--accent)' : 'var(--text-secondary)'} />
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
              {selectedChapter === 'ch1' ? 'By Module' : 'By Difficulty'}
            </span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {selectedChapter === 'ch1'
              ? 'Drill Section 1.1, 1.2, 1.3, 1.4, Part A (MCQ), or Part B (True/False).'
              : 'Focus on a specific tier (Level 1, 2, 3, or 4) to systematically build mastery.'}
          </div>
        </div>

        {/* Full Exam */}
        <div
          onClick={() => setSelectedMode('exam')}
          style={{
            padding: '14px 12px',
            borderRadius: '6px',
            border: `1px solid ${selectedMode === 'exam' ? 'var(--accent)' : 'var(--border-hairline)'}`,
            backgroundColor: selectedMode === 'exam' ? 'var(--accent-subtle)' : '#FFFFFF',
            cursor: 'pointer',
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <Award size={16} color={selectedMode === 'exam' ? 'var(--accent)' : 'var(--text-secondary)'} />
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Full Exam</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            All {chapterQuestions.length} questions covering the entire chapter in exam order.
          </div>
        </div>

        {/* Review Mistakes */}
        <div
          onClick={() => {
            if (chapterMistakes.length > 0) {
              setSelectedMode('mistakes')
            }
          }}
          style={{
            padding: '14px 12px',
            borderRadius: '6px',
            border: `1px solid ${selectedMode === 'mistakes' ? 'var(--accent)' : 'var(--border-hairline)'}`,
            backgroundColor: selectedMode === 'mistakes' ? 'var(--accent-subtle)' : '#FFFFFF',
            cursor: chapterMistakes.length > 0 ? 'pointer' : 'not-allowed',
            opacity: chapterMistakes.length > 0 ? 1 : 0.6,
            transition: 'all 0.15s ease'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <RotateCcw size={16} color={selectedMode === 'mistakes' ? 'var(--accent)' : 'var(--text-secondary)'} />
            <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>Review Missed</span>
          </div>
          <div style={{ fontSize: '12px', color: 'var(--text-secondary)', lineHeight: '1.4' }}>
            {chapterMistakes.length > 0
              ? `${chapterMistakes.length} question${chapterMistakes.length > 1 ? 's' : ''} logged in Chapter ${selectedChapter === 'ch1' ? '1' : '3'}.`
              : 'No missed questions yet. Complete a session first.'}
          </div>
        </div>
      </div>

      {/* Sub-configuration for Level selection (Chapter 3) */}
      {selectedMode === 'level' && selectedChapter === 'ch3' && (
        <div
          className="responsive-card"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            borderRadius: '6px',
            marginBottom: '28px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            Select Difficulty Level:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '10px' }}>
            {pythonLevelDetails.map((lvl) => {
              const isSelected = selectedLevel === lvl.level
              return (
                <div
                  key={lvl.level}
                  onClick={() => setSelectedLevel(lvl.level)}
                  style={{
                    padding: '14px',
                    borderRadius: '6px',
                    border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--border-hairline)'}`,
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : '#FAF8F4',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
                      {lvl.title}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      {lvl.range}
                    </span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                    {lvl.desc}
                  </div>
                  {lvl.badge && (
                    <div style={{ marginTop: '6px' }}>
                      <span
                        style={{
                          fontSize: '10.5px',
                          padding: '1px 6px',
                          borderRadius: '3px',
                          backgroundColor: 'var(--warn-bg)',
                          color: 'var(--warn)',
                          border: '1px solid var(--warn-border)',
                          fontWeight: 500
                        }}
                      >
                        {lvl.badge}
                      </span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Sub-configuration for AI Module/Part selection (Chapter 1) */}
      {selectedMode === 'level' && selectedChapter === 'ch1' && (
        <div
          className="responsive-card"
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            borderRadius: '6px',
            marginBottom: '28px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '12px' }}>
            Select Topic Module or Exam Part:
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: '10px' }}>
            {aiModuleDetails.map((mod) => {
              const isSelected = selectedAISection === mod.id
              return (
                <div
                  key={mod.id}
                  onClick={() => setSelectedAISection(mod.id)}
                  style={{
                    padding: '14px',
                    borderRadius: '6px',
                    border: `1px solid ${isSelected ? 'var(--accent)' : 'var(--border-hairline)'}`,
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : '#FAF8F4',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px', flexWrap: 'wrap', gap: '4px' }}>
                    <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
                      {mod.title}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      {mod.range}
                    </span>
                  </div>
                  <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', lineHeight: '1.45' }}>
                    {mod.desc}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}

      {/* Mode settings: Practice vs Exam feedback */}
      <div
        className="responsive-card"
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-hairline)',
          borderRadius: '6px',
          marginBottom: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '14px',
          boxShadow: 'var(--shadow-subtle)'
        }}
      >
        <div>
          <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)', marginBottom: '2px' }}>
            Session Feedback Style
          </div>
          <div style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
            {isExamMode
              ? 'Exam Simulation: Work through without immediate answers. Full analysis revealed at the end.'
              : 'Learning Practice: Check each answer immediately with worked explanations and guided hints.'}
          </div>
        </div>

        <div style={{ display: 'flex', gap: '6px', backgroundColor: 'var(--bg-subtle)', padding: '3px', borderRadius: '5px' }}>
          <button
            onClick={() => setIsExamMode(false)}
            style={{
              padding: '6px 12px',
              fontSize: '12.5px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: !isExamMode ? '#FFFFFF' : 'transparent',
              color: !isExamMode ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: !isExamMode ? 600 : 400,
              cursor: 'pointer',
              boxShadow: !isExamMode ? 'var(--shadow-subtle)' : 'none'
            }}
          >
            Practice (Immediate)
          </button>
          <button
            onClick={() => setIsExamMode(true)}
            style={{
              padding: '6px 12px',
              fontSize: '12.5px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: isExamMode ? '#FFFFFF' : 'transparent',
              color: isExamMode ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: isExamMode ? 600 : 400,
              cursor: 'pointer',
              boxShadow: isExamMode ? 'var(--shadow-subtle)' : 'none'
            }}
          >
            Exam (At the end)
          </button>
        </div>
      </div>

      {/* Launch CTA */}
      <div style={{ display: 'flex', width: '100%' }}>
        <button
          onClick={handleLaunch}
          style={{
            width: '100%',
            backgroundColor: 'var(--accent)',
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '6px',
            padding: '14px 28px',
            fontSize: '15px',
            fontWeight: 600,
            cursor: 'pointer',
            boxShadow: 'var(--shadow-subtle)',
            transition: 'background 0.15s ease',
            minHeight: '48px',
            textAlign: 'center'
          }}
        >
          {selectedMode === 'quick' && 'Start 10-Question Drill'}
          {selectedMode === 'level' &&
            (selectedChapter === 'ch3'
              ? `Start Level ${selectedLevel} Practice`
              : `Start Module ${selectedAISection.toUpperCase()} Practice`)}
          {selectedMode === 'exam' && `Begin Full ${chapterQuestions.length}-Question Exam`}
          {selectedMode === 'mistakes' && `Reattempt ${chapterMistakes.length} Missed Questions`}
        </button>
      </div>
    </div>
  )
}
