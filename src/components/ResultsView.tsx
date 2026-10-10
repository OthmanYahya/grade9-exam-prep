import React, { useState } from 'react'
import { ActiveSession } from '../types'
import { QUESTIONS } from '../data/questions'
import { gradeQuestion, GradeResult } from '../utils/grading'
import { CodeBlock } from './CodeBlock'
import {
  RotateCcw,
  CheckCircle2,
  XCircle,
  ChevronDown,
  ChevronUp,
  BookOpen
} from 'lucide-react'

interface ResultsViewProps {
  session: ActiveSession
  onRetryMistakes: (mistakeIds: number[]) => void
  onNewSession: () => void
  onGoToStudy: () => void
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  session,
  onRetryMistakes,
  onNewSession,
  onGoToStudy
}) => {
  const [filter, setFilter] = useState<'all' | 'mistakes' | 'correct'>('all')
  const [expandedQId, setExpandedQId] = useState<number | null>(null)

  // Grade all questions in session
  const gradedQuestions = session.questionIds.map((qId) => {
    const question = QUESTIONS.find((q) => q.id === qId) || QUESTIONS[0]
    const userAnswer = session.userAnswers[qId]
    const selfAssessment = session.selfAssessments[qId]
    const grade: GradeResult = gradeQuestion(question, userAnswer, selfAssessment)
    const isUnanswered = userAnswer === undefined && !selfAssessment

    return {
      question,
      userAnswer,
      selfAssessment,
      grade,
      isUnanswered
    }
  })

  // Separate auto-graded from self-assessed
  const autoGraded = gradedQuestions.filter((g) => !g.grade.isSelfAssessed)
  const selfAssessed = gradedQuestions.filter((g) => g.grade.isSelfAssessed)

  const autoCorrect = autoGraded.filter((g) => g.grade.isCorrect).length
  const selfCorrect = selfAssessed.filter((g) => g.grade.isCorrect).length

  const totalQuestions = gradedQuestions.length
  const totalCorrect = autoCorrect + selfCorrect
  const accuracyPercent = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0

  // Calculate level-by-level stats
  const levels = [1, 2, 3, 4] as const
  const levelStats = levels.map((lvl) => {
    const list = gradedQuestions.filter((g) => g.question.level === lvl)
    const correct = list.filter((g) => g.grade.isCorrect).length
    return {
      level: lvl,
      total: list.length,
      correct,
      percent: list.length > 0 ? Math.round((correct / list.length) * 100) : 0
    }
  }).filter((s) => s.total > 0)

  // Questions needing review (incorrect or self-assessed needs practice or unanswered)
  const missedIds = gradedQuestions
    .filter((g) => !g.grade.isCorrect || g.isUnanswered)
    .map((g) => g.question.id)

  const filteredItems = gradedQuestions.filter((g) => {
    if (filter === 'mistakes') return !g.grade.isCorrect || g.isUnanswered
    if (filter === 'correct') return g.grade.isCorrect && !g.isUnanswered
    return true
  })

  return (
    <div className="responsive-container" style={{ maxWidth: '840px' }}>
      {/* Overview Banner */}
      <div
        className="responsive-card"
        style={{
          marginBottom: '24px'
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <div
              style={{
                fontSize: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--text-muted)',
                fontWeight: 600,
                marginBottom: '4px'
              }}
            >
              Session Complete · {session.isExamMode ? 'Exam Simulation' : 'Practice Drill'}
            </div>
            <h1
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '32px',
                fontWeight: 600,
                color: 'var(--text-primary)',
                lineHeight: '1.2'
              }}
            >
              Your Performance Summary
            </h1>
            <p style={{ color: 'var(--text-secondary)', fontSize: '15px', marginTop: '6px' }}>
              Detailed review of your answers, worked solutions, and topics to revise.
            </p>
          </div>

          {/* Score Box */}
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
              {accuracyPercent}%
            </div>
            <div style={{ fontSize: '13px', color: 'var(--text-secondary)', marginTop: '4px' }}>
              {totalCorrect} of {totalQuestions} Correct
            </div>
          </div>
        </div>

        {/* Breakdown counters */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
            gap: '12px',
            marginTop: '24px',
            paddingTop: '20px',
            borderTop: '1px solid var(--border-hairline)'
          }}
        >
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Auto-Graded</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
              {autoCorrect} / {autoGraded.length}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>Self-Assessed (Code)</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--text-primary)' }}>
              {selfCorrect} / {selfAssessed.length}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '12px', color: 'var(--text-muted)' }}>To Review</div>
            <div style={{ fontSize: '16px', fontWeight: 600, color: missedIds.length > 0 ? 'var(--warn)' : 'var(--success)' }}>
              {missedIds.length} question{missedIds.length === 1 ? '' : 's'}
            </div>
          </div>
        </div>
      </div>

      {/* Level-by-Level Breakdown */}
      {levelStats.length > 1 && (
        <div
          className="responsive-card"
          style={{
            marginBottom: '24px'
          }}
        >
          <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '14px' }}>
            Performance by Difficulty Level
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '10px' }}>
            {levelStats.map((st) => (
              <div
                key={st.level}
                style={{
                  padding: '12px',
                  backgroundColor: '#FAF8F4',
                  borderRadius: '5px',
                  border: '1px solid var(--border-hairline)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 600, color: 'var(--text-primary)' }}>Level {st.level}</span>
                  <span style={{ fontFamily: 'var(--font-mono)', color: 'var(--text-secondary)' }}>
                    {st.correct} / {st.total} ({st.percent}%)
                  </span>
                </div>
                <div style={{ height: '4px', backgroundColor: '#E5DFD3', borderRadius: '2px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${st.percent}%`,
                      backgroundColor: st.percent >= 70 ? 'var(--success)' : 'var(--warn)'
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Action Buttons Row */}
      <div
        style={{
          display: 'flex',
          gap: '10px',
          marginBottom: '24px',
          flexWrap: 'wrap'
        }}
      >
        {missedIds.length > 0 && (
          <button
            onClick={() => onRetryMistakes(missedIds)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '12px 18px',
              borderRadius: '5px',
              border: 'none',
              backgroundColor: 'var(--accent)',
              color: '#FFFFFF',
              fontSize: '14px',
              fontWeight: 600,
              cursor: 'pointer',
              flex: '1 1 200px',
              minHeight: '44px'
            }}
          >
            <RotateCcw size={15} />
            <span>Retry Missed Questions ({missedIds.length})</span>
          </button>
        )}

        <button
          onClick={onNewSession}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '12px 18px',
            borderRadius: '5px',
            border: '1px solid var(--border-strong)',
            backgroundColor: '#FFFFFF',
            color: 'var(--text-primary)',
            fontSize: '14px',
            fontWeight: 500,
            cursor: 'pointer',
            flex: '1 1 160px',
            minHeight: '44px'
          }}
        >
          <span>Start New Session</span>
        </button>

        <button
          onClick={onGoToStudy}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            padding: '12px 18px',
            borderRadius: '5px',
            border: '1px solid var(--border-hairline)',
            backgroundColor: 'transparent',
            color: 'var(--text-secondary)',
            fontSize: '14px',
            cursor: 'pointer',
            flex: '1 1 180px',
            minHeight: '44px'
          }}
        >
          <BookOpen size={15} />
          <span>Review Teaching Lessons</span>
        </button>
      </div>

      {/* Filter Tabs */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          marginBottom: '16px',
          borderBottom: '1px solid var(--border-hairline)',
          paddingBottom: '8px'
        }}
      >
        <button
          onClick={() => setFilter('all')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 10px',
            fontSize: '13px',
            fontWeight: filter === 'all' ? 600 : 400,
            color: filter === 'all' ? 'var(--accent)' : 'var(--text-secondary)'
          }}
        >
          All Questions ({gradedQuestions.length})
        </button>
        <button
          onClick={() => setFilter('mistakes')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 10px',
            fontSize: '13px',
            fontWeight: filter === 'mistakes' ? 600 : 400,
            color: filter === 'mistakes' ? 'var(--danger)' : 'var(--text-secondary)'
          }}
        >
          Mistakes & Unanswered ({missedIds.length})
        </button>
        <button
          onClick={() => setFilter('correct')}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px 10px',
            fontSize: '13px',
            fontWeight: filter === 'correct' ? 600 : 400,
            color: filter === 'correct' ? 'var(--success)' : 'var(--text-secondary)'
          }}
        >
          Correct ({totalCorrect})
        </button>
      </div>

      {/* Detailed Question Review List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {filteredItems.map(({ question, userAnswer, grade, isUnanswered }) => {
          const isExpanded = expandedQId === question.id
          const isCorrect = grade.isCorrect && !isUnanswered

          return (
            <div
              key={question.id}
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: '6px',
                border: `1px solid ${isCorrect ? 'var(--border-hairline)' : 'var(--danger-border)'}`,
                overflow: 'hidden',
                boxShadow: 'var(--shadow-subtle)'
              }}
            >
              {/* Question summary row */}
              <div
                onClick={() => setExpandedQId(isExpanded ? null : question.id)}
                style={{
                  padding: '14px 18px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  backgroundColor: isExpanded ? '#FAF8F4' : '#FFFFFF'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  {isCorrect ? (
                    <CheckCircle2 size={18} color="var(--success)" />
                  ) : (
                    <XCircle size={18} color="var(--danger)" />
                  )}
                  <div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--text-muted)', marginRight: '8px' }}>
                      Q{question.id} · L{question.level}
                    </span>
                    <span style={{ fontSize: '14.5px', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {question.prompt}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span
                    style={{
                      fontSize: '12px',
                      color: isCorrect ? 'var(--success)' : 'var(--danger)',
                      fontWeight: 600
                    }}
                  >
                    {isCorrect ? 'Correct' : isUnanswered ? 'Unanswered' : 'Needs Practice'}
                  </span>
                  {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </div>
              </div>

              {/* Expanded details */}
              {isExpanded && (
                <div style={{ padding: '18px', borderTop: '1px solid var(--border-hairline)', backgroundColor: '#FAF8F3' }}>
                  {question.codeSnippet && (
                    <div style={{ marginBottom: '14px' }}>
                      <CodeBlock code={question.codeSnippet} language="python" />
                    </div>
                  )}

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px', marginBottom: '14px' }}>
                    <div style={{ padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                        Your Answer
                      </div>
                      <div style={{ fontSize: '13.5px', fontFamily: 'var(--font-mono)', color: isCorrect ? 'var(--success)' : 'var(--danger)', marginTop: '2px' }}>
                        {isUnanswered ? '(No answer recorded)' : String(grade.userDisplay || userAnswer || 'None')}
                      </div>
                    </div>

                    <div style={{ padding: '10px', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                      <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase' }}>
                        Correct Solution
                      </div>
                      <div style={{ fontSize: '13.5px', fontFamily: 'var(--font-mono)', color: 'var(--accent)', marginTop: '2px' }}>
                        {question.modelSolution || String(question.correctAnswer)}
                      </div>
                    </div>
                  </div>

                  {/* Worked Explanation */}
                  <div style={{ padding: '12px', backgroundColor: '#FFFFFF', borderRadius: '4px', border: '1px solid var(--border-hairline)' }}>
                    <div style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', marginBottom: '4px' }}>
                      Worked Explanation
                    </div>
                    <p style={{ fontSize: '13.5px', color: 'var(--text-primary)', lineHeight: '1.55' }}>
                      {question.explanation}
                    </p>
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}
