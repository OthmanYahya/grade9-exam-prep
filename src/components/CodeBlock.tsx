import React, { useState } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
  showLineNumbers?: boolean
  output?: string
  note?: string
  title?: string
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  showLineNumbers = true,
  output,
  note,
  title
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split('\n')

  // Simple token formatting for Python
  const formatPythonLine = (line: string): React.ReactNode => {
    // If it's a comment
    const commentIndex = line.indexOf('#')
    if (commentIndex !== -1) {
      const codePart = line.slice(0, commentIndex)
      const commentPart = line.slice(commentIndex)
      return (
        <>
          {formatTokens(codePart)}
          <span style={{ color: '#8A928D', fontStyle: 'italic' }}>{commentPart}</span>
        </>
      )
    }
    return formatTokens(line)
  }

  const formatTokens = (text: string): React.ReactNode => {
    // Basic regex-based token coloring for clean editorial readability
    const parts: React.ReactNode[] = []
    // Match strings ("..." or '...'), keywords, numbers, built-in functions
    const regex = /(".*?"|'.*?'|\b(?:and|or|not|True|False|if|else|elif|for|while|def|return|in|is)\b|\b(?:print|input|int|float|str|len)\b|\b\d+(?:\.\d+)?\b|[+\-*/%]=?|\*\*=?|==|!=|<=|>=|[<>=])/g

    let lastIndex = 0
    let match: RegExpExecArray | null

    while ((match = regex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.slice(lastIndex, match.index))
      }
      const token = match[0]
      if (token.startsWith('"') || token.startsWith("'")) {
        parts.push(<span key={match.index} style={{ color: '#A06828' }}>{token}</span>) // warm amber for strings
      } else if (['and', 'or', 'not', 'True', 'False', 'if', 'else', 'for', 'while', 'def'].includes(token)) {
        parts.push(<span key={match.index} style={{ color: '#9B382C', fontWeight: 600 }}>{token}</span>) // muted rust for keywords
      } else if (['print', 'input', 'int', 'float', 'str'].includes(token)) {
        parts.push(<span key={match.index} style={{ color: '#2B5E48', fontWeight: 600 }}>{token}</span>) // forest green for functions
      } else if (!isNaN(Number(token))) {
        parts.push(<span key={match.index} style={{ color: '#2E5B82' }}>{token}</span>) // subdued slate for numbers
      } else {
        parts.push(<span key={match.index} style={{ color: '#6A5230' }}>{token}</span>) // operator
      }
      lastIndex = regex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.slice(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <div
      style={{
        margin: '12px 0',
        borderRadius: '6px',
        border: '1px solid var(--border-hairline)',
        backgroundColor: '#F8F6F0',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-subtle)'
      }}
    >
      {/* Code Header if title or copy is present */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '6px 12px',
          backgroundColor: '#F0ECE1',
          borderBottom: '1px solid var(--border-hairline)',
          fontSize: '11.5px',
          fontFamily: 'var(--font-sans)',
          color: 'var(--text-secondary)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span style={{ fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
            {language}
          </span>
          {title && <span style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{title}</span>}
        </div>
        <button
          onClick={handleCopy}
          aria-label="Copy code to clipboard"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '4px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '2px 6px',
            borderRadius: '4px',
            color: 'var(--text-secondary)',
            fontSize: '11px'
          }}
          title="Copy code"
        >
          {copied ? <Check size={12} color="var(--success)" /> : <Copy size={12} />}
          <span>{copied ? 'Copied' : 'Copy'}</span>
        </button>
      </div>

      {/* Code Area */}
      <div
        style={{
          padding: '12px 14px',
          overflowX: 'auto',
          WebkitOverflowScrolling: 'touch',
          fontSize: '13.5px',
          lineHeight: '1.55',
          fontFamily: 'var(--font-mono)'
        }}
      >
        <pre style={{ margin: 0, whiteSpace: 'pre' }}>
          {lines.map((line, idx) => (
            <div key={idx} style={{ display: 'flex', minHeight: '21px' }}>
              {showLineNumbers && (
                <span
                  style={{
                    width: '28px',
                    marginRight: '12px',
                    color: '#A2ABA5',
                    textAlign: 'right',
                    userSelect: 'none',
                    fontSize: '12px'
                  }}
                >
                  {idx + 1}
                </span>
              )}
              <span style={{ color: 'var(--text-primary)', flex: 1 }}>
                {formatPythonLine(line)}
              </span>
            </div>
          ))}
        </pre>
      </div>

      {/* Output Panel if provided */}
      {output && (
        <div
          style={{
            borderTop: '1px solid var(--border-hairline)',
            backgroundColor: '#FAF8F3',
            padding: '8px 14px',
            fontSize: '12.5px',
            fontFamily: 'var(--font-mono)'
          }}
        >
          <div
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-sans)',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: 'var(--text-muted)',
              marginBottom: '4px'
            }}
          >
            Output:
          </div>
          <div style={{ color: '#1B4734', whiteSpace: 'pre-wrap' }}>{output}</div>
        </div>
      )}

      {/* Note if provided */}
      {note && (
        <div
          style={{
            borderTop: '1px solid var(--border-hairline)',
            backgroundColor: '#FCFAF5',
            padding: '8px 14px',
            fontSize: '12.5px',
            color: 'var(--text-secondary)'
          }}
        >
          {note}
        </div>
      )}
    </div>
  )
}
