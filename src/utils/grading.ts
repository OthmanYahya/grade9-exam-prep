import { Question } from '../types'

/**
 * Normalizes string for exact output checking:
 * Trims outer newlines/whitespace but preserves internal spaces, capitalization, and punctuation.
 */
export function normalizeOutput(input: string): string {
  if (!input) return ''
  return input
    .replace(/\r\n/g, '\n')
    .trim()
}

/**
 * Normalizes code snippet for basic comparison:
 * Handles single vs double quotes, spaces around =, etc.
 */
export function normalizePythonCode(code: string): string {
  if (!code) return ''
  return code
    .replace(/\r\n/g, '\n')
    .trim()
    .replace(/'/g, '"') // normalize quotes
    .replace(/\s*=\s*/g, ' = ') // normalize equals spacing
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/,\s*/g, ', ')
}

export interface GradeResult {
  isCorrect: boolean
  isSelfAssessed: boolean
  feedbackText: string
  userDisplay: string
  correctDisplay: string
}

export function gradeQuestion(
  question: Question,
  userAnswer: any,
  selfAssessment?: 'correct' | 'needs-practice'
): GradeResult {
  // If user provided self assessment for code writing/repair
  if (question.type === 'code-writing' || question.type === 'code-repair') {
    if (selfAssessment) {
      const isCorrect = selfAssessment === 'correct'
      return {
        isCorrect,
        isSelfAssessed: true,
        feedbackText: isCorrect
          ? 'Marked as understood in self-assessment.'
          : 'Marked for more practice in self-assessment.',
        userDisplay: typeof userAnswer === 'string' ? userAnswer : '',
        correctDisplay: question.modelSolution || String(question.correctAnswer)
      }
    }
  }

  // Exact output grading
  if (question.type === 'exact-output') {
    const userStr = typeof userAnswer === 'string' ? normalizeOutput(userAnswer) : ''
    const correctTarget = normalizeOutput(String(question.correctAnswer))
    const acceptable = (question.acceptableOutputs || []).map(normalizeOutput)
    
    const isCorrect = userStr === correctTarget || acceptable.includes(userStr)
    return {
      isCorrect,
      isSelfAssessed: false,
      feedbackText: isCorrect
        ? 'Exact match on formatting, spacing, and output.'
        : `Check line breaks and spacing carefully. Expected: "${correctTarget}".`,
      userDisplay: userStr,
      correctDisplay: correctTarget
    }
  }

  // Multiple-choice grading
  if (question.type === 'multiple-choice') {
    const userArr: string[] = Array.isArray(userAnswer) ? [...userAnswer].sort() : []
    const correctArr: string[] = Array.isArray(question.correctAnswer)
      ? [...question.correctAnswer].sort()
      : [String(question.correctAnswer)]

    const isCorrect =
      userArr.length === correctArr.length &&
      userArr.every((val, index) => val === correctArr[index])

    return {
      isCorrect,
      isSelfAssessed: false,
      feedbackText: isCorrect
        ? 'All correct options selected!'
        : `Expected options: ${correctArr.join(', ')}.`,
      userDisplay: userArr.join(', '),
      correctDisplay: correctArr.join(', ')
    }
  }

  // Single-choice grading
  const userStr = typeof userAnswer === 'string' ? userAnswer.trim().toUpperCase() : ''
  const correctStr = String(question.correctAnswer).trim().toUpperCase()
  const isCorrect = userStr === correctStr

  return {
    isCorrect,
    isSelfAssessed: false,
    feedbackText: isCorrect
      ? 'Correct answer!'
      : `Correct option was ${correctStr}.`,
    userDisplay: userStr,
    correctDisplay: correctStr
  }
}
