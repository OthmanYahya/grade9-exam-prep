import React, { useState } from 'react'
import { UserProgress, ChapterId } from '../types'
import { QUESTIONS } from '../data/questions'
import { RotateCcw, BookOpen, Trash2 } from 'lucide-react'

interface ProgressViewProps {
  selectedChapter: ChapterId
  progress: UserProgress
  onResetProgress: () => void
  onPracticeMistakes: (mistakeIds: number[]) => void
  onGoToStudy: () => void
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  selectedChapter,
  progress,
  onResetProgress,
  onPracticeMistakes,
  onGoToStudy
}) => {
  const [showConfirmReset, setShowConfirmReset] = useState(false)

  // Filter questions for the active chapter
  const questionRecords = progress.questions
  const chapterQuestions = QUESTIONS.filter((q) => q.chapterId === selectedChapter)
  const totalQuestions = chapterQuestions.length

  const attemptedCount = chapterQuestions.filter((q) => questionRecords[q.id]).length

  // Questions marked correct in this chapter
  const correctCount = chapterQuestions.filter((q) => {
    const rec = questionRecords[q.id]
    return rec && (rec.lastResult === 'correct' || rec.lastResult === 'self-correct')
  }).length

  // Questions needing practice in this chapter
  const needsPracticeIds = chapterQuestions
    .filter((q) => {
      const rec = questionRecords[q.id]
      return rec && (rec.lastResult === 'incorrect' || rec.lastResult === 'self-practice')
    })
    .map((q) => q.id)

  const overallMasteryPercent = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0

  // Category breakdowns: By Level (Ch 3) or By Module (Ch 1)
  const categoryStats =
    selectedChapter === 'ch3'
      ? ([1, 2, 3, 4] as const).map((lvl) => {
          const list = chapterQuestions.filter((q) => q.level === lvl)
          const correct = list.filter((q) => {
            const rec = questionRecords[q.id]
            return rec && (rec.lastResult === 'correct' || rec.lastResult === 'self-correct')
          }).length
          return {
            title: `Level ${lvl}`,
            total: list.length,
            correct,
            percent: list.length > 0 ? Math.round((correct / list.length) * 100) : 0
          }
        })
      : [
          { id: '1.1', title: '1.1 Intro to AI' },
          { id: '1.2', title: '1.2 Branches of AI' },
          { id: '1.3', title: '1.3 Generative AI' },
          { id: '1.4', title: '1.4 AI and Ethics' }
        ].map((mod) => {
          const list = chapterQuestions.filter((q) => q.sectionId === mod.id)
          const correct = list.filter((q) => {
            const rec = questionRecords[q.id]
            return rec && (rec.lastResult === 'correct' || rec.lastResult === 'self-correct')
          }).length
          return {
            title: mod.title,
            total: list.length,
            correct,
            percent: list.length > 0 ? Math.round((correct / list.length) * 100) : 0
          }
        })

  const reviewedCount = progress.reviewedSections.filter((id) =>
    selectedChapter === 'ch1' ? id >= 11 && id <= 14 : id >= 1 && id <= 8
  ).length
  const totalSections = selectedChapter === 'ch1' ? 4 : 8

  return (
    <div className="responsive-container" style={{ maxWidth: '840px' }}>
      {/* Overview Card */}
      <div
        className="responsive-card"
        style={{
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px' }}>
              Local Study Ledger · {selectedChapter === 'ch1' ? 'Chapter 1: AI in Action' : 'Chapter 3: Python Revision'}
            </div>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '28px', fontWeight: 600, color: 'var(--text-primary)' }}>
              Revision Progress & Mastery
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginTop: '6px' }}>
              Your progress is saved locally on this browser. Track your mastery across all{' '}
              {selectedChapter === 'ch1' ? 'AI curriculum sections' : 'Python exam tiers'}.
            </p>
          </div>

          <div
            style={{
              padding: '16px 24px',
              backgroundColor: '#FAF8F4',
              borderRadius: '6px',
              border: '1px solid var(--border-hairline)',
              textAlign: 'center'
            }}
          >
            <div style={{ fontSize: '36px', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent)', lineHeight: '1' }}>
              {overallMasteryPercent}%
            </div>
            <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {correctCount} of {totalQuestions} Mastered
            </div>
          </div>
        </div>

        {/* Metric tiles */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '12px',
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-hairline)'
          }}
        >
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Attempted</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--text-primary)' }}>
              {attemptedCount} / {totalQuestions}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Mastered</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--success)' }}>
              {correctCount}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Needs Practice</div>
            <div style={{ fontSize: '18px', fontWeight: 600, color: needsPracticeIds.length > 0 ? 'var(--warn)' : 'var(--text-muted)' }}>
              {needsPracticeIds.length}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Reviewed Topics</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ fontSize: '18px', fontWeight: 600, color: 'var(--accent)' }}>
                {reviewedCount} / {totalSections}
              </div>
              <button
                onClick={onGoToStudy}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--accent)',
                  fontSize: '11.5px',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '3px',
                  padding: 0
                }}
              >
                <BookOpen size={12} />
                <span>Study</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Progress by Exam Tier / Module */}
      <div
        style={{
          backgroundColor: '#FFFFFF',
          border: '1px solid var(--border-hairline)',
          borderRadius: '6px',
          padding: '24px',
          boxShadow: 'var(--shadow-subtle)',
          marginBottom: '28px'
        }}
      >
        <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px' }}>
          Mastery by {selectedChapter === 'ch1' ? 'Topic Module' : 'Difficulty Tier'}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
          {categoryStats.map((st, idx) => (
            <div
              key={idx}
              style={{
                padding: '14px',
                backgroundColor: '#FAF8F4',
                borderRadius: '5px',
                border: '1px solid var(--border-hairline)'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>{st.title}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-secondary)' }}>
                  {st.correct} / {st.total}
                </span>
              </div>
              <div style={{ height: '5px', backgroundColor: '#E5DFD3', borderRadius: '3px', overflow: 'hidden' }}>
                <div
                  style={{
                    height: '100%',
                    width: `${st.percent}%`,
                    backgroundColor: 'var(--accent)',
                    transition: 'width 0.2s ease'
                  }}
                />
              </div>
              <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '6px', textAlign: 'right' }}>
                {st.percent}% completed
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Needs Practice List if any */}
      {needsPracticeIds.length > 0 && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--warn-border)',
            borderRadius: '6px',
            padding: '24px',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '28px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
            <div>
              <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--warn)' }}>
                Questions Requiring Practice ({needsPracticeIds.length})
              </div>
              <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>
                Target these specific questions in Chapter {selectedChapter === 'ch1' ? '1' : '3'} to convert mistakes into confidence.
              </div>
            </div>
            <button
              onClick={() => onPracticeMistakes(needsPracticeIds)}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '8px 16px',
                borderRadius: '5px',
                border: 'none',
                backgroundColor: 'var(--warn)',
                color: '#FFFFFF',
                fontSize: '13px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              <RotateCcw size={14} />
              <span>Drill Missed Questions</span>
            </button>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {needsPracticeIds.map((id) => {
              const q = QUESTIONS.find((item) => item.id === id)
              return (
                <span
                  key={id}
                  style={{
                    padding: '4px 10px',
                    borderRadius: '4px',
                    backgroundColor: 'var(--warn-bg)',
                    border: '1px solid var(--warn-border)',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--warn)'
                  }}
                >
                  Q{q?.questionNumber || id} {q?.sectionId ? `(${q.sectionId})` : `(L${q?.level})`}
                </span>
              )
            })}
          </div>
        </div>
      )}

      {/* Session History List */}
      {progress.sessionHistory.length > 0 && (
        <div
          style={{
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            borderRadius: '6px',
            padding: '24px',
            boxShadow: 'var(--shadow-subtle)',
            marginBottom: '28px'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px' }}>
            Recently Attempted Sessions
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {progress.sessionHistory.slice(-5).reverse().map((sess) => (
              <div
                key={sess.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '10px 14px',
                  backgroundColor: '#FAF8F4',
                  borderRadius: '4px',
                  border: '1px solid var(--border-hairline)',
                  fontSize: '13px'
                }}
              >
                <div>
                  <span style={{ fontWeight: 600, textTransform: 'capitalize', marginRight: '8px' }}>
                    {sess.mode} Session {sess.level ? `(Level ${sess.level})` : ''}
                  </span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '12px' }}>
                    {sess.date}
                  </span>
                </div>
                <div style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, color: 'var(--accent)' }}>
                  {sess.correctCount} / {sess.totalQuestions} (
                  {Math.round((sess.correctCount / sess.totalQuestions) * 100)}%)
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Reset Progress Section */}
      <div
        style={{
          borderTop: '1px solid var(--border-hairline)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px'
        }}
      >
        <div style={{ fontSize: '13px', color: 'var(--text-muted)' }}>
          To start completely fresh before your exam:
        </div>

        {showConfirmReset ? (
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '12.5px', color: 'var(--danger)', fontWeight: 600 }}>
              Are you sure? This erases all progress.
            </span>
            <button
              onClick={() => {
                onResetProgress()
                setShowConfirmReset(false)
              }}
              style={{
                backgroundColor: 'var(--danger)',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '12.5px',
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Yes, Reset
            </button>
            <button
              onClick={() => setShowConfirmReset(false)}
              style={{
                backgroundColor: 'transparent',
                border: '1px solid var(--border-hairline)',
                borderRadius: '4px',
                padding: '6px 12px',
                fontSize: '12.5px',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          </div>
        ) : (
          <button
            onClick={() => setShowConfirmReset(true)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: '1px solid var(--border-hairline)',
              borderRadius: '4px',
              padding: '6px 14px',
              fontSize: '12.5px',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <Trash2 size={13} />
            <span>Reset Local Progress</span>
          </button>
        )}
      </div>
    </div>
  )
}
