import React, { useState, useEffect } from 'react'
import {
  CHAPTER1_STUDY_SECTIONS,
  CHAPTER3_STUDY_SECTIONS,
  CHAPTER1_CHECKLIST,
  CHAPTER3_CHECKLIST,
  MASTERY_TARGETS
} from '../data/studySections'
import { ChapterId } from '../types'
import { CodeBlock } from './CodeBlock'
import {
  CheckCircle2,
  Circle,
  ArrowRight,
  AlertTriangle,
  Lightbulb,
  CheckSquare,
  Square,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Menu
} from 'lucide-react'

interface StudyViewProps {
  selectedChapter: ChapterId
  reviewedSections: number[]
  onToggleReviewed: (sectionId: number) => void
  completedChecklist: string[]
  onToggleChecklist: (id: string) => void
  onStartTopicPractice: (questionIds: number[], topicTitle: string) => void
}

export const StudyView: React.FC<StudyViewProps> = ({
  selectedChapter,
  reviewedSections,
  onToggleReviewed,
  completedChecklist,
  onToggleChecklist,
  onStartTopicPractice
}) => {
  const chapterSections =
    selectedChapter === 'ch1' ? CHAPTER1_STUDY_SECTIONS : CHAPTER3_STUDY_SECTIONS
  const chapterChecklist =
    selectedChapter === 'ch1' ? CHAPTER1_CHECKLIST : CHAPTER3_CHECKLIST

  const [activeSectionId, setActiveSectionId] = useState<number>(chapterSections[0].id)
  const [showChecklist, setShowChecklist] = useState<boolean>(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)

  // Reset active section when chapter switches
  useEffect(() => {
    setActiveSectionId(chapterSections[0].id)
    setShowChecklist(false)
    setIsMobileMenuOpen(false)
  }, [selectedChapter])

  const activeSection =
    chapterSections.find((s) => s.id === activeSectionId) || chapterSections[0]
  const isReviewed = reviewedSections.includes(activeSection.id)
  const currentIdx = chapterSections.findIndex((s) => s.id === activeSection.id)
  const prevSec = currentIdx > 0 ? chapterSections[currentIdx - 1] : null
  const nextSec = currentIdx < chapterSections.length - 1 ? chapterSections[currentIdx + 1] : null

  return (
    <div className="responsive-container">
      {/* Intro Banner */}
      <div
        style={{
          borderBottom: '1px solid var(--border-hairline)',
          paddingBottom: '20px',
          marginBottom: '24px'
        }}
      >
        <div
          style={{
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            color: 'var(--text-muted)',
            fontWeight: 600,
            marginBottom: '6px'
          }}
        >
          {selectedChapter === 'ch1'
            ? 'Tech Explorers: AI in Action · 4 Core Modules'
            : 'Revision Workbook · 8 Core Topics'}
        </div>
        <h1
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: '28px',
            fontWeight: 600,
            color: 'var(--text-primary)',
            letterSpacing: '-0.01em',
            marginBottom: '8px'
          }}
        >
          {selectedChapter === 'ch1'
            ? 'Chapter 1: Exploring Artificial Intelligence'
            : 'Chapter 3: Introduction to Python'}
        </h1>
        <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', maxWidth: '780px' }}>
          {selectedChapter === 'ch1'
            ? 'Study foundational AI concepts, branches, transformer architectures, diffusion, and ethical guidelines.'
            : 'Study one section at a time, review the worked examples, and mark off sections as you master them.'}
        </p>
      </div>

      {/* MOBILE TOPIC SELECTOR BAR (<= 768px) */}
      <div className="mobile-only" style={{ flexDirection: 'column', gap: '8px', marginBottom: '20px' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            borderRadius: '6px',
            padding: '10px 12px',
            boxShadow: 'var(--shadow-subtle)',
            width: '100%'
          }}
        >
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '13px',
              color: 'var(--text-primary)',
              textAlign: 'left',
              minWidth: 0,
              flex: 1
            }}
          >
            <Menu size={16} color="var(--accent)" style={{ flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
              {showChecklist ? 'Exam Checklist' : `0${currentIdx + 1} · ${activeSection.shortTitle}`}
            </span>
            <ChevronDown size={14} style={{ flexShrink: 0, transform: isMobileMenuOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s ease' }} />
          </button>

          <div style={{ display: 'flex', gap: '4px', flexShrink: 0 }}>
            {prevSec && (
              <button
                onClick={() => {
                  setActiveSectionId(prevSec.id)
                  setShowChecklist(false)
                  setIsMobileMenuOpen(false)
                }}
                style={{
                  padding: '6px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-hairline)',
                  background: '#FAF8F4',
                  cursor: 'pointer'
                }}
                aria-label="Previous topic"
              >
                <ChevronLeft size={14} />
              </button>
            )}
            {nextSec && (
              <button
                onClick={() => {
                  setActiveSectionId(nextSec.id)
                  setShowChecklist(false)
                  setIsMobileMenuOpen(false)
                }}
                style={{
                  padding: '6px',
                  borderRadius: '4px',
                  border: '1px solid var(--border-hairline)',
                  background: '#FAF8F4',
                  cursor: 'pointer'
                }}
                aria-label="Next topic"
              >
                <ChevronRight size={14} />
              </button>
            )}
          </div>
        </div>

        {/* Collapsible Mobile Topics Menu */}
        {isMobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#FFFFFF',
              border: '1px solid var(--border-hairline)',
              borderRadius: '6px',
              padding: '8px',
              boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2px'
            }}
          >
            <div
              style={{
                fontSize: '11px',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-muted)',
                padding: '4px 8px 8px',
                borderBottom: '1px solid var(--border-hairline)'
              }}
            >
              Select Topic to Study
            </div>
            {chapterSections.map((sec, idx) => {
              const checked = reviewedSections.includes(sec.id)
              const isSelected = !showChecklist && activeSectionId === sec.id

              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setShowChecklist(false)
                    setActiveSectionId(sec.id)
                    setIsMobileMenuOpen(false)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : 'transparent',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 600 : 400,
                    fontSize: '13px',
                    cursor: 'pointer'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      0{idx + 1}
                    </span>
                    <span>{sec.shortTitle}</span>
                  </span>
                  {checked && <CheckCircle2 size={14} color="var(--success)" />}
                </button>
              )
            })}
            <div style={{ height: '1px', backgroundColor: 'var(--border-hairline)', margin: '4px 0' }} />
            <button
              onClick={() => {
                setShowChecklist(true)
                setIsMobileMenuOpen(false)
              }}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                padding: '8px 10px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: showChecklist ? 'var(--bg-subtle)' : 'transparent',
                color: showChecklist ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: showChecklist ? 600 : 400,
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckSquare size={13} color="var(--accent)" />
                <span>Last-Minute Checklist</span>
              </span>
              <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                {completedChecklist.filter((id) => chapterChecklist.some((c) => c.id === id)).length}/{chapterChecklist.length}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Main Grid: Sidebar Navigator + Lesson Content */}
      <div className="study-layout-grid">
        {/* Left Navigation: Topics index (Desktop only) */}
        <aside
          className="desktop-only"
          style={{
            flexDirection: 'column',
            position: 'sticky',
            top: '80px',
            backgroundColor: '#FFFFFF',
            border: '1px solid var(--border-hairline)',
            borderRadius: '6px',
            padding: '12px',
            boxShadow: 'var(--shadow-subtle)'
          }}
        >
          <div
            style={{
              fontSize: '11.5px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--text-muted)',
              padding: '6px 8px 10px',
              borderBottom: '1px solid var(--border-hairline)'
            }}
          >
            Table of Contents
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginTop: '8px' }}>
            {chapterSections.map((sec, idx) => {
              const checked = reviewedSections.includes(sec.id)
              const isSelected = !showChecklist && activeSectionId === sec.id

              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setShowChecklist(false)
                    setActiveSectionId(sec.id)
                  }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    textAlign: 'left',
                    padding: '8px 10px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: isSelected ? 'var(--bg-subtle)' : 'transparent',
                    color: isSelected ? 'var(--text-primary)' : 'var(--text-secondary)',
                    fontWeight: isSelected ? 600 : 400,
                    fontSize: '13px',
                    cursor: 'pointer',
                    transition: 'all 0.1s ease'
                  }}
                >
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--text-muted)' }}>
                      0{idx + 1}
                    </span>
                    <span>{sec.shortTitle}</span>
                  </span>
                  {checked && <CheckCircle2 size={14} color="var(--success)" />}
                </button>
              )
            })}

            <div style={{ height: '1px', backgroundColor: 'var(--border-hairline)', margin: '8px 0' }} />

            {/* Checklist button */}
            <button
              onClick={() => setShowChecklist(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                textAlign: 'left',
                padding: '8px 10px',
                borderRadius: '4px',
                border: 'none',
                backgroundColor: showChecklist ? 'var(--bg-subtle)' : 'transparent',
                color: showChecklist ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: showChecklist ? 600 : 400,
                fontSize: '13px',
                cursor: 'pointer'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckSquare size={13} color="var(--accent)" />
                <span>Last-Minute Checklist</span>
              </span>
              <span
                style={{
                  fontSize: '11px',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--text-muted)'
                }}
              >
                {completedChecklist.filter((id) => chapterChecklist.some((c) => c.id === id)).length}/{chapterChecklist.length}
              </span>
            </button>
          </div>

          {/* Overall reviewed count badge */}
          <div
            style={{
              marginTop: '16px',
              padding: '10px',
              backgroundColor: '#FAF8F4',
              borderRadius: '4px',
              fontSize: '12px',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-hairline)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
              <span>Reviewed topics</span>
              <strong style={{ color: 'var(--text-primary)' }}>
                {reviewedSections.filter((id) => chapterSections.some((s) => s.id === id)).length} of {chapterSections.length}
              </strong>
            </div>
            <div
              style={{
                height: '4px',
                backgroundColor: '#E5DFD3',
                borderRadius: '2px',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  height: '100%',
                  width: `${(reviewedSections.filter((id) => chapterSections.some((s) => s.id === id)).length / chapterSections.length) * 100}%`,
                  backgroundColor: 'var(--accent)',
                  transition: 'width 0.2s ease'
                }}
              />
            </div>
          </div>
        </aside>

        {/* Right Content Area: Either Active Lesson or Checklist */}
        <main
          className="responsive-card"
          style={{
            minHeight: '600px'
          }}
        >
          {showChecklist ? (
            /* Last-minute Checklist View */
            <div>
              <div style={{ borderBottom: '1px solid var(--border-hairline)', paddingBottom: '16px', marginBottom: '24px' }}>
                <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--accent)', fontWeight: 600, marginBottom: '4px' }}>
                  Exam Preparation
                </div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '24px', fontWeight: 600, color: 'var(--text-primary)' }}>
                  Last-Minute Exam Checklist
                </h2>
                <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginTop: '6px' }}>
                  Put a check next to each skill you can do <em>without looking</em>. For every skill you miss, return to that section before the exam.
                </p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {chapterChecklist.map((item) => {
                  const done = completedChecklist.includes(item.id)
                  return (
                    <div
                      key={item.id}
                      onClick={() => onToggleChecklist(item.id)}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '12px',
                        padding: '12px 14px',
                        borderRadius: '6px',
                        backgroundColor: done ? 'var(--success-bg)' : '#FAF8F4',
                        border: `1px solid ${done ? 'var(--success-border)' : 'var(--border-hairline)'}`,
                        cursor: 'pointer',
                        transition: 'all 0.15s ease'
                      }}
                    >
                      <button
                        style={{
                          background: 'none',
                          border: 'none',
                          cursor: 'pointer',
                          padding: '2px',
                          color: done ? 'var(--success)' : 'var(--text-muted)'
                        }}
                        aria-label="Toggle item"
                      >
                        {done ? <CheckSquare size={18} /> : <Square size={18} />}
                      </button>
                      <span
                        style={{
                          fontSize: '14.5px',
                          color: done ? 'var(--success)' : 'var(--text-primary)',
                          lineHeight: '1.45'
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  )
                })}
              </div>

              {/* Mastery Targets Section */}
              <div style={{ marginTop: '36px', borderTop: '1px solid var(--border-hairline)', paddingTop: '24px' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '20px', fontWeight: 600, marginBottom: '12px' }}>
                  Mastery Goals & Study Targets
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
                  {MASTERY_TARGETS.map((t) => (
                    <div
                      key={t.level}
                      style={{
                        padding: '14px',
                        borderRadius: '6px',
                        border: '1px solid var(--border-hairline)',
                        backgroundColor: '#FCFAF5'
                      }}
                    >
                      <div style={{ fontSize: '12px', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                        {t.title}
                      </div>
                      <div style={{ fontSize: '20px', fontFamily: 'var(--font-serif)', fontWeight: 700, color: 'var(--accent)', margin: '4px 0' }}>
                        Target: {t.target}
                      </div>
                      <div style={{ fontSize: '12.5px', color: 'var(--text-secondary)' }}>{t.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            /* Single Section Reading View */
            <div>
              {/* Header with status & practice button */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  borderBottom: '1px solid var(--border-hairline)',
                  paddingBottom: '20px',
                  marginBottom: '28px',
                  flexWrap: 'wrap',
                  gap: '12px'
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '12px',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                      color: 'var(--accent)',
                      fontWeight: 600,
                      marginBottom: '4px'
                    }}
                  >
                    Section 0{activeSection.id} of 08
                  </div>
                  <h2
                    style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '26px',
                      fontWeight: 600,
                      color: 'var(--text-primary)',
                      lineHeight: '1.25'
                    }}
                  >
                    {activeSection.title}
                  </h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '14.5px', marginTop: '4px' }}>
                    {activeSection.subtitle}
                  </p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => onToggleReviewed(activeSection.id)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 12px',
                      borderRadius: '5px',
                      border: `1px solid ${isReviewed ? 'var(--success-border)' : 'var(--border-strong)'}`,
                      backgroundColor: isReviewed ? 'var(--success-bg)' : '#FFFFFF',
                      color: isReviewed ? 'var(--success)' : 'var(--text-secondary)',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    {isReviewed ? <CheckCircle2 size={15} /> : <Circle size={15} />}
                    <span>{isReviewed ? 'Reviewed' : 'Mark as Reviewed'}</span>
                  </button>

                  <button
                    onClick={() => onStartTopicPractice(activeSection.relatedQuestionIds, activeSection.shortTitle)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      padding: '7px 14px',
                      borderRadius: '5px',
                      border: 'none',
                      backgroundColor: 'var(--accent)',
                      color: '#FFFFFF',
                      fontSize: '12.5px',
                      fontWeight: 500,
                      cursor: 'pointer'
                    }}
                  >
                    <span>Practice Topic</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>

              {/* Lesson Body Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '22px' }}>
                {activeSection.blocks.map((block, idx) => {
                  if (block.type === 'paragraph') {
                    return (
                      <div key={idx}>
                        {block.title && (
                          <h3
                            style={{
                              fontFamily: 'var(--font-serif)',
                              fontSize: '18px',
                              fontWeight: 600,
                              color: 'var(--text-primary)',
                              marginBottom: '8px'
                            }}
                          >
                            {block.title}
                          </h3>
                        )}
                        <p style={{ color: 'var(--text-primary)', fontSize: '15px', lineHeight: '1.65' }}>
                          {block.text}
                        </p>
                      </div>
                    )
                  }

                  if (block.type === 'callout') {
                    const isWarn = block.calloutType === 'warning'
                    const isTip = block.calloutType === 'tip'
                    const isRemember = block.calloutType === 'remember'

                    let bg = '#FAF4E8'
                    let border = 'var(--warn-border)'
                    let icon = <AlertTriangle size={18} color="var(--warn)" />

                    if (isWarn) {
                      bg = 'var(--danger-bg)'
                      border = 'var(--danger-border)'
                      icon = <AlertTriangle size={18} color="var(--danger)" />
                    } else if (isTip || isRemember) {
                      bg = 'var(--accent-subtle)'
                      border = '#C8DDD0'
                      icon = <Lightbulb size={18} color="var(--accent)" />
                    }

                    return (
                      <div
                        key={idx}
                        style={{
                          backgroundColor: bg,
                          border: `1px solid ${border}`,
                          borderRadius: '6px',
                          padding: '14px 18px',
                          display: 'flex',
                          gap: '14px',
                          alignItems: 'flex-start'
                        }}
                      >
                        <div style={{ paddingTop: '2px' }}>{icon}</div>
                        <div>
                          {block.title && (
                            <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '4px', color: 'var(--text-primary)' }}>
                              {block.title}
                            </div>
                          )}
                          <div style={{ fontSize: '14px', color: 'var(--text-primary)', lineHeight: '1.5', whiteSpace: 'pre-line' }}>
                            {block.text}
                          </div>
                        </div>
                      </div>
                    )
                  }

                  if (block.type === 'table' && block.table) {
                    return (
                      <div
                        key={idx}
                        style={{
                          overflowX: 'auto',
                          borderRadius: '6px',
                          border: '1px solid var(--border-hairline)',
                          margin: '8px 0'
                        }}
                      >
                        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '13.5px' }}>
                          <thead>
                            <tr style={{ backgroundColor: '#F4EFE6', borderBottom: '1px solid var(--border-hairline)' }}>
                              {block.table.headers.map((h, hIdx) => (
                                <th
                                  key={hIdx}
                                  style={{
                                    padding: '10px 14px',
                                    fontWeight: 600,
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-sans)',
                                    fontSize: '12.5px'
                                  }}
                                >
                                  {h}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {block.table.rows.map((r, rIdx) => (
                              <tr
                                key={rIdx}
                                style={{
                                  borderBottom: rIdx < block.table!.rows.length - 1 ? '1px solid var(--border-hairline)' : 'none',
                                  backgroundColor: rIdx % 2 === 0 ? '#FFFFFF' : '#FAF8F4'
                                }}
                              >
                                {r.map((c, cIdx) => (
                                  <td
                                    key={cIdx}
                                    style={{
                                      padding: '10px 14px',
                                      color: cIdx === 0 ? 'var(--text-primary)' : 'var(--text-secondary)',
                                      fontWeight: cIdx === 0 ? 500 : 400
                                    }}
                                  >
                                    {c}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )
                  }

                  if (block.type === 'code' && block.code) {
                    return (
                      <CodeBlock
                        key={idx}
                        code={block.code}
                        language={block.language || 'python'}
                        output={block.output}
                        note={block.note}
                        title={block.title}
                      />
                    )
                  }

                  if (block.type === 'list' && block.items) {
                    return (
                      <div key={idx} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        {block.items.map((it, iIdx) => (
                          <div key={iIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                            <span style={{ color: 'var(--accent)', fontWeight: 700, lineHeight: '1.4' }}>•</span>
                            <span style={{ color: 'var(--text-primary)', fontSize: '14.5px', lineHeight: '1.5' }}>{it}</span>
                          </div>
                        ))}
                      </div>
                    )
                  }

                  return null
                })}
              </div>

              {/* Bottom Navigation: Previous Section, Next Section */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginTop: '40px',
                  paddingTop: '20px',
                  borderTop: '1px solid var(--border-hairline)'
                }}
              >
                {(() => {
                  const currentIndex = chapterSections.findIndex((s) => s.id === activeSection.id)
                  const prevSec = currentIndex > 0 ? chapterSections[currentIndex - 1] : null
                  const nextSec = currentIndex < chapterSections.length - 1 ? chapterSections[currentIndex + 1] : null

                  return (
                    <>
                      {prevSec ? (
                        <button
                          onClick={() => setActiveSectionId(prevSec.id)}
                          style={{
                            background: 'none',
                            border: '1px solid var(--border-hairline)',
                            borderRadius: '5px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            color: 'var(--text-secondary)'
                          }}
                        >
                          ← Previous: {prevSec.shortTitle}
                        </button>
                      ) : <div />}

                      {nextSec ? (
                        <button
                          onClick={() => setActiveSectionId(nextSec.id)}
                          style={{
                            backgroundColor: 'var(--bg-subtle)',
                            border: '1px solid var(--border-strong)',
                            borderRadius: '5px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: 500,
                            color: 'var(--text-primary)'
                          }}
                        >
                          Next: {nextSec.shortTitle} →
                        </button>
                      ) : (
                        <button
                          onClick={() => setShowChecklist(true)}
                          style={{
                            backgroundColor: 'var(--accent)',
                            color: '#FFFFFF',
                            border: 'none',
                            borderRadius: '5px',
                            padding: '8px 16px',
                            cursor: 'pointer',
                            fontSize: '13px',
                            fontWeight: 500
                          }}
                        >
                          Open Exam Checklist →
                        </button>
                      )}
                    </>
                  )
                })()}
              </div>
            </div>
          )}
        </main>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .study-layout-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
