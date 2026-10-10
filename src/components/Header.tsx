import React from 'react'
import { AppTab, ChapterId } from '../types'
import { HelpCircle, Edit3 } from 'lucide-react'

interface HeaderProps {
  currentTab: AppTab
  onSelectTab: (tab: AppTab) => void
  selectedChapter: ChapterId
  onSelectChapter: (chapter: ChapterId) => void
  hasActiveResults: boolean
  onToggleScratchpad: () => void
  isScratchpadOpen: boolean
  onOpenShortcuts: () => void
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onSelectTab,
  selectedChapter,
  onSelectChapter,
  hasActiveResults,
  onToggleScratchpad,
  isScratchpadOpen,
  onOpenShortcuts
}) => {
  return (
    <header
      style={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid var(--border-hairline)',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}
    >
      {/* DESKTOP HEADER (> 768px) */}
      <div
        className="desktop-only"
        style={{
          maxWidth: '1080px',
          margin: '0 auto',
          padding: '0 20px',
          height: '60px',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        {/* Brand */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '6px',
              backgroundColor: 'var(--accent)',
              color: '#FFFFFF',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700,
              fontSize: '15px',
              fontFamily: 'var(--font-mono)'
            }}
          >
            K
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span
                style={{
                  fontWeight: 700,
                  fontSize: '16px',
                  letterSpacing: '-0.02em',
                  color: 'var(--text-primary)'
                }}
              >
                PyLevel K
              </span>
              <span
                style={{
                  fontSize: '11px',
                  padding: '1px 6px',
                  borderRadius: '3px',
                  backgroundColor: 'var(--bg-subtle)',
                  color: 'var(--text-secondary)',
                  fontWeight: 500
                }}
              >
                Grade 9
              </span>
            </div>
            <div
              style={{
                fontSize: '11.5px',
                color: 'var(--text-muted)'
              }}
            >
              {selectedChapter === 'ch1'
                ? 'Chapter 1: Exploring Artificial Intelligence'
                : 'Chapter 3: Introduction to Python'}
            </div>
          </div>
        </div>

        {/* Chapter Switcher */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '3px',
            backgroundColor: '#FAF8F4',
            padding: '2px 3px',
            borderRadius: '6px',
            border: '1px solid var(--border-hairline)'
          }}
          aria-label="Chapter Selector"
        >
          <button
            onClick={() => onSelectChapter('ch1')}
            style={{
              padding: '4px 10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: selectedChapter === 'ch1' ? 'var(--accent)' : 'transparent',
              color: selectedChapter === 'ch1' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: selectedChapter === 'ch1' ? 600 : 500,
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.1s ease'
            }}
          >
            Ch 1 · AI in Action (50 Qs)
          </button>
          <button
            onClick={() => onSelectChapter('ch3')}
            style={{
              padding: '4px 10px',
              borderRadius: '4px',
              border: 'none',
              backgroundColor: selectedChapter === 'ch3' ? 'var(--accent)' : 'transparent',
              color: selectedChapter === 'ch3' ? '#FFFFFF' : 'var(--text-secondary)',
              fontWeight: selectedChapter === 'ch3' ? 600 : 500,
              fontSize: '12px',
              cursor: 'pointer',
              transition: 'all 0.1s ease'
            }}
          >
            Ch 3 · Python (48 Qs)
          </button>
        </div>

        {/* Navigation Tabs */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            backgroundColor: 'var(--bg-subtle)',
            padding: '3px',
            borderRadius: '6px',
            border: '1px solid var(--border-hairline)'
          }}
          aria-label="Main Navigation"
        >
          <button
            onClick={() => onSelectTab('study')}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'study' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'study' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'study' ? 600 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              boxShadow: currentTab === 'study' ? 'var(--shadow-subtle)' : 'none',
              transition: 'background 0.15s ease'
            }}
          >
            Study
          </button>
          <button
            onClick={() => onSelectTab('practice')}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'practice' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'practice' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'practice' ? 600 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              boxShadow: currentTab === 'practice' ? 'var(--shadow-subtle)' : 'none',
              transition: 'background 0.15s ease'
            }}
          >
            Practice
          </button>
          {hasActiveResults && (
            <button
              onClick={() => onSelectTab('results')}
              style={{
                padding: '6px 14px',
                borderRadius: '4px',
                border: 'none',
                background: currentTab === 'results' ? '#FFFFFF' : 'transparent',
                color: currentTab === 'results' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: currentTab === 'results' ? 600 : 500,
                fontSize: '13px',
                cursor: 'pointer',
                boxShadow: currentTab === 'results' ? 'var(--shadow-subtle)' : 'none',
                transition: 'background 0.15s ease'
              }}
            >
              Results
            </button>
          )}
          <button
            onClick={() => onSelectTab('progress')}
            style={{
              padding: '6px 14px',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'progress' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'progress' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'progress' ? 600 : 500,
              fontSize: '13px',
              cursor: 'pointer',
              boxShadow: currentTab === 'progress' ? 'var(--shadow-subtle)' : 'none',
              transition: 'background 0.15s ease'
            }}
          >
            Progress
          </button>
        </nav>

        {/* Utility buttons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={onToggleScratchpad}
            title="Toggle Variable Trace Scratchpad (Shortcut: S)"
            aria-label="Toggle scratchpad"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 10px',
              fontSize: '12.5px',
              fontWeight: 500,
              borderRadius: '5px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: isScratchpadOpen ? 'var(--bg-subtle)' : '#FFFFFF',
              color: isScratchpadOpen ? 'var(--accent)' : 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <Edit3 size={13} />
            <span>Scratchpad</span>
          </button>
          <button
            onClick={onOpenShortcuts}
            title="Keyboard Shortcuts"
            aria-label="View keyboard shortcuts"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              padding: '6px',
              borderRadius: '5px',
              border: '1px solid var(--border-hairline)',
              backgroundColor: '#FFFFFF',
              color: 'var(--text-secondary)',
              cursor: 'pointer'
            }}
          >
            <HelpCircle size={15} />
          </button>
        </div>
      </div>

      {/* MOBILE HEADER (<= 768px) */}
      <div
        className="mobile-only"
        style={{
          flexDirection: 'column',
          width: '100%'
        }}
      >
        {/* Row 1: Brand + Chapter Pills + Utilities */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px 12px',
            borderBottom: '1px solid var(--border-hairline)'
          }}
        >
          {/* Compact Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div
              style={{
                width: '26px',
                height: '26px',
                borderRadius: '5px',
                backgroundColor: 'var(--accent)',
                color: '#FFFFFF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 700,
                fontSize: '13px',
                fontFamily: 'var(--font-mono)'
              }}
            >
              K
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)'
              }}
            >
              PyLevel K
            </span>
          </div>

          {/* Compact Chapter Selector */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              backgroundColor: '#FAF8F4',
              padding: '2px',
              borderRadius: '5px',
              border: '1px solid var(--border-hairline)'
            }}
          >
            <button
              onClick={() => onSelectChapter('ch1')}
              style={{
                padding: '4px 8px',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: selectedChapter === 'ch1' ? 'var(--accent)' : 'transparent',
                color: selectedChapter === 'ch1' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: selectedChapter === 'ch1' ? 600 : 500,
                fontSize: '11.5px',
                cursor: 'pointer'
              }}
            >
              Ch 1 · AI
            </button>
            <button
              onClick={() => onSelectChapter('ch3')}
              style={{
                padding: '4px 8px',
                borderRadius: '3px',
                border: 'none',
                backgroundColor: selectedChapter === 'ch3' ? 'var(--accent)' : 'transparent',
                color: selectedChapter === 'ch3' ? '#FFFFFF' : 'var(--text-secondary)',
                fontWeight: selectedChapter === 'ch3' ? 600 : 500,
                fontSize: '11.5px',
                cursor: 'pointer'
              }}
            >
              Ch 3 · Python
            </button>
          </div>

          {/* Quick Icons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <button
              onClick={onToggleScratchpad}
              aria-label="Toggle scratchpad"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '5px',
                border: '1px solid var(--border-hairline)',
                backgroundColor: isScratchpadOpen ? 'var(--bg-subtle)' : '#FFFFFF',
                color: isScratchpadOpen ? 'var(--accent)' : 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <Edit3 size={14} />
            </button>
            <button
              onClick={onOpenShortcuts}
              aria-label="View help & shortcuts"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '5px',
                border: '1px solid var(--border-hairline)',
                backgroundColor: '#FFFFFF',
                color: 'var(--text-secondary)',
                cursor: 'pointer'
              }}
            >
              <HelpCircle size={15} />
            </button>
          </div>
        </div>

        {/* Row 2: Touch Tabs Navigation */}
        <nav
          style={{
            display: 'flex',
            alignItems: 'center',
            backgroundColor: '#FAF8F4',
            padding: '3px 6px',
            gap: '3px'
          }}
          aria-label="Mobile Navigation"
        >
          <button
            onClick={() => onSelectTab('study')}
            style={{
              flex: 1,
              padding: '7px 0',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'study' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'study' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'study' ? 600 : 500,
              fontSize: '12.5px',
              textAlign: 'center',
              boxShadow: currentTab === 'study' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              cursor: 'pointer'
            }}
          >
            Study
          </button>
          <button
            onClick={() => onSelectTab('practice')}
            style={{
              flex: 1,
              padding: '7px 0',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'practice' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'practice' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'practice' ? 600 : 500,
              fontSize: '12.5px',
              textAlign: 'center',
              boxShadow: currentTab === 'practice' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              cursor: 'pointer'
            }}
          >
            Practice
          </button>
          {hasActiveResults && (
            <button
              onClick={() => onSelectTab('results')}
              style={{
                flex: 1,
                padding: '7px 0',
                borderRadius: '4px',
                border: 'none',
                background: currentTab === 'results' ? '#FFFFFF' : 'transparent',
                color: currentTab === 'results' ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontWeight: currentTab === 'results' ? 600 : 500,
                fontSize: '12.5px',
                textAlign: 'center',
                boxShadow: currentTab === 'results' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
                cursor: 'pointer'
              }}
            >
              Results
            </button>
          )}
          <button
            onClick={() => onSelectTab('progress')}
            style={{
              flex: 1,
              padding: '7px 0',
              borderRadius: '4px',
              border: 'none',
              background: currentTab === 'progress' ? '#FFFFFF' : 'transparent',
              color: currentTab === 'progress' ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontWeight: currentTab === 'progress' ? 600 : 500,
              fontSize: '12.5px',
              textAlign: 'center',
              boxShadow: currentTab === 'progress' ? '0 1px 2px rgba(0,0,0,0.06)' : 'none',
              cursor: 'pointer'
            }}
          >
            Progress
          </button>
        </nav>
      </div>
    </header>
  )
}
