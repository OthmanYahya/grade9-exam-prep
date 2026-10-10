import React from 'react'
import { X } from 'lucide-react'

interface KeyboardShortcutsModalProps {
  isOpen: boolean
  onClose: () => void
}

export const KeyboardShortcutsModal: React.FC<KeyboardShortcutsModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null

  const shortcuts = [
    { key: 'A – E or 1 – 5', description: 'Select corresponding answer choice' },
    { key: 'Enter', description: 'Check answer / Proceed to next question' },
    { key: 'H', description: 'Toggle hint (helps you think without spoiling)' },
    { key: 'S', description: 'Toggle variable-tracing scratchpad' },
    { key: '← / →', description: 'Navigate between questions' },
    { key: 'Esc', description: 'Close modal or scratchpad' }
  ]

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(26, 31, 29, 0.4)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '16px'
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: '420px',
          maxWidth: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: '8px',
          border: '1px solid var(--border-strong)',
          boxShadow: 'var(--shadow-card)',
          overflow: 'hidden'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '12px 16px',
            backgroundColor: '#F7F4EE',
            borderBottom: '1px solid var(--border-hairline)'
          }}
        >
          <span style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text-primary)' }}>
            Keyboard Shortcuts
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-secondary)'
            }}
          >
            <X size={16} />
          </button>
        </div>

        <div style={{ padding: '16px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {shortcuts.map((sc, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  fontSize: '13px'
                }}
              >
                <span style={{ color: 'var(--text-secondary)' }}>{sc.description}</span>
                <kbd
                  style={{
                    backgroundColor: '#F0ECE1',
                    border: '1px solid var(--border-strong)',
                    borderRadius: '4px',
                    padding: '2px 8px',
                    fontSize: '12px',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-primary)'
                  }}
                >
                  {sc.key}
                </kbd>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            padding: '10px 16px',
            backgroundColor: '#FAF8F4',
            borderTop: '1px solid var(--border-hairline)',
            fontSize: '12px',
            color: 'var(--text-muted)',
            textAlign: 'right'
          }}
        >
          Designed for fast, distraction-free study.
        </div>
      </div>
    </div>
  )
}
