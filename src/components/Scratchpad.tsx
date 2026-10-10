import React from 'react'
import { X, RotateCcw } from 'lucide-react'

interface ScratchpadProps {
  isOpen: boolean
  onClose: () => void
  notes: string
  onChange: (val: string) => void
}

const TEMPLATE = `# Variable Tracing Scratchpad
# Trace values line by line:
#
# Line 1: x = 2
# Line 2: y = 7
# Line 3: x = 14
`

export const Scratchpad: React.FC<ScratchpadProps> = ({
  isOpen,
  onClose,
  notes,
  onChange
}) => {
  if (!isOpen) return null

  const handleReset = () => {
    if (window.confirm('Reset scratchpad to default template?')) {
      onChange(TEMPLATE)
    }
  }

  return (
    <>
      {/* Mobile backdrop */}
      <div
        className="mobile-only"
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(20, 24, 22, 0.4)',
          zIndex: 999
        }}
      />
      <div className="scratchpad-container">
      {/* Header */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 14px',
          backgroundColor: '#F5F1E9',
          borderBottom: '1px solid var(--border-hairline)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              fontSize: '13px',
              color: 'var(--text-primary)'
            }}
          >
            Variable Scratchpad
          </span>
          <span
            style={{
              fontSize: '11px',
              color: 'var(--text-muted)',
              fontFamily: 'var(--font-mono)'
            }}
          >
            [autosaved]
          </span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <button
            onClick={handleReset}
            title="Reset to trace template"
            aria-label="Reset scratchpad"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-muted)',
              padding: '4px',
              borderRadius: '4px'
            }}
          >
            <RotateCcw size={14} />
          </button>
          <button
            onClick={onClose}
            title="Close scratchpad (Esc)"
            aria-label="Close scratchpad"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              padding: '4px',
              borderRadius: '4px'
            }}
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Textarea */}
      <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column' }}>
        <textarea
          value={notes}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Trace variable values here (e.g. x = 3, y = 5)..."
          style={{
            flex: 1,
            width: '100%',
            height: '100%',
            resize: 'none',
            border: 'none',
            outline: 'none',
            fontFamily: 'var(--font-mono)',
            fontSize: '13px',
            lineHeight: '1.5',
            color: 'var(--text-primary)',
            backgroundColor: 'transparent'
          }}
          autoFocus
        />
      </div>

      {/* Footer tips */}
      <div
        style={{
          padding: '6px 12px',
          borderTop: '1px solid var(--border-hairline)',
          backgroundColor: '#FAF8F4',
          fontSize: '11.5px',
          color: 'var(--text-muted)',
          display: 'flex',
          justifyContent: 'space-between'
        }}
      >
        <span>Tip: Trace one assignment per line.</span>
        <span>Press Esc to close</span>
      </div>
    </div>
  </>
)
}
