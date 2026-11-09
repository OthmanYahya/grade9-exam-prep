import { describe, it, expect } from 'vitest'
import {
  QUESTIONS,
  CHAPTER1_QUESTIONS,
  CHAPTER3_QUESTIONS,
  CHAPTER4_QUESTIONS
} from '../data/questions'
import {
  STUDY_SECTIONS,
  CHAPTER1_STUDY_SECTIONS,
  CHAPTER3_STUDY_SECTIONS,
  CHAPTER4_STUDY_SECTIONS,
  CHECKLIST_ITEMS,
  CHAPTER1_CHECKLIST,
  CHAPTER3_CHECKLIST,
  CHAPTER4_CHECKLIST
} from '../data/studySections'
import { gradeQuestion, normalizeOutput } from '../utils/grading'
import { DEFAULT_PROGRESS } from '../utils/storage'

describe('Question Bank Data Integrity', () => {
  it('contains 148 total questions across all three chapters', () => {
    expect(QUESTIONS.length).toBe(148)
    expect(CHAPTER3_QUESTIONS.length).toBe(48)
    expect(CHAPTER1_QUESTIONS.length).toBe(50)
    expect(CHAPTER4_QUESTIONS.length).toBe(50)
  })

  it('preserves Chapter 3 sequential IDs (1-48) without gaps or duplicates', () => {
    const ids = CHAPTER3_QUESTIONS.map((q) => q.id)
    expect(ids).toEqual(Array.from({ length: 48 }, (_, i) => i + 1))
  })

  it('preserves Chapter 1 sequential IDs (101-150) without gaps or duplicates', () => {
    const ids = CHAPTER1_QUESTIONS.map((q) => q.id)
    expect(ids).toEqual(Array.from({ length: 50 }, (_, i) => i + 101))
    const qNums = CHAPTER1_QUESTIONS.map((q) => q.questionNumber)
    expect(qNums).toEqual(Array.from({ length: 50 }, (_, i) => i + 1))
  })

  it('preserves Chapter 4 sequential IDs (201-250) without gaps or duplicates', () => {
    const ids = CHAPTER4_QUESTIONS.map((q) => q.id)
    expect(ids).toEqual(Array.from({ length: 50 }, (_, i) => i + 201))
    const qNums = CHAPTER4_QUESTIONS.map((q) => q.questionNumber)
    expect(qNums).toEqual(Array.from({ length: 50 }, (_, i) => i + 1))
  })

  it('has the correct count per difficulty level for Chapter 4 Conditional Statements', () => {
    const l1 = CHAPTER4_QUESTIONS.filter((q) => q.level === 1)
    const l2 = CHAPTER4_QUESTIONS.filter((q) => q.level === 2)
    const l3 = CHAPTER4_QUESTIONS.filter((q) => q.level === 3)

    expect(l1.length).toBe(12) // Foundation (Q1-6, 19-20, 28, 44-45, 50)
    expect(l2.length).toBe(27) // Core
    expect(l3.length).toBe(11) // Challenge
  })

  it('has the correct count per difficulty level for Chapter 3 Python', () => {
    const l1 = CHAPTER3_QUESTIONS.filter((q) => q.level === 1)
    const l2 = CHAPTER3_QUESTIONS.filter((q) => q.level === 2)
    const l3 = CHAPTER3_QUESTIONS.filter((q) => q.level === 3)
    const l4 = CHAPTER3_QUESTIONS.filter((q) => q.level === 4)

    expect(l1.length).toBe(12) // Q1 - Q12
    expect(l2.length).toBe(14) // Q13 - Q26
    expect(l3.length).toBe(12) // Q27 - Q38
    expect(l4.length).toBe(10) // Q39 - Q48
  })

  it('has Part A (38 MCQs) and Part B (12 True/False) for Chapter 1 AI in Action', () => {
    const partA = CHAPTER1_QUESTIONS.filter((q) => q.questionNumber <= 38)
    const partB = CHAPTER1_QUESTIONS.filter((q) => q.questionNumber > 38)

    expect(partA.length).toBe(38)
    expect(partB.length).toBe(12)

    // Verify all Part B questions have True/False options
    partB.forEach((q) => {
      expect(q.options?.map((o) => o.id)).toEqual(['True', 'False'])
      expect(['True', 'False']).toContain(q.correctAnswer)
    })
  })

  it('all questions across all three chapters have prompts, hints, and worked explanations', () => {
    QUESTIONS.forEach((q) => {
      expect(q.prompt.length).toBeGreaterThan(5)
      expect(q.explanation.length).toBeGreaterThan(10)
      expect(q.hint.length).toBeGreaterThan(10)
      expect(q.topics.length).toBeGreaterThan(0)
    })
  })

  it('verifies specific multi-select questions from the specification', () => {
    const q5 = CHAPTER3_QUESTIONS.find((q) => q.id === 5)!
    expect(q5.type).toBe('multiple-choice')
    expect(q5.correctAnswer).toEqual(['B', 'D'])
    expect(q5.selectCount).toBe(2)

    const q11 = CHAPTER3_QUESTIONS.find((q) => q.id === 11)!
    expect(q11.type).toBe('multiple-choice')
    expect(q11.correctAnswer).toEqual(['A', 'C', 'D'])
    expect(q11.selectCount).toBe(3)

    const q46 = CHAPTER3_QUESTIONS.find((q) => q.id === 46)!
    expect(q46.type).toBe('multiple-choice')
    expect(q46.correctAnswer).toEqual(['B', 'D'])
    expect(q46.selectCount).toBe(2)

    // Chapter 4 multi-select questions
    const ch4q1 = CHAPTER4_QUESTIONS.find((q) => q.id === 201)!
    expect(ch4q1.type).toBe('multiple-choice')
    expect(ch4q1.correctAnswer).toEqual(['A', 'C', 'E'])
    expect(ch4q1.selectCount).toBe(3)

    const ch4q12 = CHAPTER4_QUESTIONS.find((q) => q.id === 212)!
    expect(ch4q12.type).toBe('multiple-choice')
    expect(ch4q12.correctAnswer).toEqual(['B', 'D'])
    expect(ch4q12.selectCount).toBe(2)

    const ch4q13 = CHAPTER4_QUESTIONS.find((q) => q.id === 213)!
    expect(ch4q13.type).toBe('multiple-choice')
    expect(ch4q13.correctAnswer).toEqual(['C', 'E'])
    expect(ch4q13.selectCount).toBe(2)

    const ch4q14 = CHAPTER4_QUESTIONS.find((q) => q.id === 214)!
    expect(ch4q14.type).toBe('multiple-choice')
    expect(ch4q14.correctAnswer).toEqual(['C', 'D'])
    expect(ch4q14.selectCount).toBe(2)

    const ch4q25 = CHAPTER4_QUESTIONS.find((q) => q.id === 225)!
    expect(ch4q25.type).toBe('multiple-choice')
    expect(ch4q25.correctAnswer).toEqual(['A', 'C'])
    expect(ch4q25.selectCount).toBe(2)
  })

  it('deeply validates all 50 Chapter 4 questions for formatting, answers, and metadata', () => {
    expect(CHAPTER4_QUESTIONS.length).toBe(50)
    CHAPTER4_QUESTIONS.forEach((q) => {
      // Valid sectionId
      expect(['4.1', '4.2', '4.3', '4.4', '4.5']).toContain(q.sectionId)
      // Valid options
      expect(q.options).toBeDefined()
      expect(q.options!.length).toBeGreaterThanOrEqual(4)
      const optionIds = q.options!.map((o) => o.id)

      // Check answer validity
      if (q.type === 'single-choice') {
        expect(typeof q.correctAnswer).toBe('string')
        expect(optionIds).toContain(q.correctAnswer)
      } else if (q.type === 'multiple-choice') {
        expect(Array.isArray(q.correctAnswer)).toBe(true)
        expect((q.correctAnswer as string[]).length).toBe(q.selectCount)
        ;(q.correctAnswer as string[]).forEach((ans) => {
          expect(optionIds).toContain(ans)
        })
      }

      // Hints and explanations
      expect(q.hint.length).toBeGreaterThan(15)
      expect(q.explanation.length).toBeGreaterThan(20)
      expect(q.level).toBeGreaterThanOrEqual(1)
      expect(q.level).toBeLessThanOrEqual(3)
    })
  })

  it('verifies exact output questions Q32 and Q33', () => {
    const q32 = CHAPTER3_QUESTIONS.find((q) => q.id === 32)!
    expect(q32.type).toBe('exact-output')
    expect(q32.correctAnswer).toBe('Good-Luck')

    const q33 = CHAPTER3_QUESTIONS.find((q) => q.id === 33)!
    expect(q33.type).toBe('exact-output')
    expect(q33.correctAnswer).toBe('A*B!C-D')
  })

  it('verifies Level 4 repair and writing questions Q39-Q45', () => {
    const q39 = CHAPTER3_QUESTIONS.find((q) => q.id === 39)!
    expect(q39.type).toBe('code-repair')
    expect(q39.modelSolution).toBe('print(Total)')

    const q40 = CHAPTER3_QUESTIONS.find((q) => q.id === 40)!
    expect(q40.type).toBe('code-repair')
    expect(q40.modelSolution).toBe('print("Welcome")')

    const q41 = CHAPTER3_QUESTIONS.find((q) => q.id === 41)!
    expect(q41.type).toBe('code-repair')
    expect(q41.modelSolution).toBe('number = int(input("Number: "))')

    const q43 = CHAPTER3_QUESTIONS.find((q) => q.id === 43)!
    expect(q43.type).toBe('code-writing')

    const q44 = CHAPTER3_QUESTIONS.find((q) => q.id === 44)!
    expect(q44.type).toBe('code-writing')

    const q45 = CHAPTER3_QUESTIONS.find((q) => q.id === 45)!
    expect(q45.type).toBe('code-writing')
  })
})

describe('Grading Logic', () => {
  it('correctly grades single choice questions for all chapters', () => {
    const q1 = CHAPTER3_QUESTIONS.find((q) => q.id === 1)!
    expect(gradeQuestion(q1, 'B').isCorrect).toBe(true)
    expect(gradeQuestion(q1, 'b').isCorrect).toBe(true)
    expect(gradeQuestion(q1, 'A').isCorrect).toBe(false)

    // Chapter 1 Q1 (ID 101)
    const ch1Q1 = CHAPTER1_QUESTIONS.find((q) => q.id === 101)!
    expect(gradeQuestion(ch1Q1, 'B').isCorrect).toBe(true)
    expect(gradeQuestion(ch1Q1, 'A').isCorrect).toBe(false)

    // Chapter 4 Q2 (ID 202)
    const ch4Q2 = CHAPTER4_QUESTIONS.find((q) => q.id === 202)!
    expect(gradeQuestion(ch4Q2, 'A').isCorrect).toBe(true)
    expect(gradeQuestion(ch4Q2, 'B').isCorrect).toBe(false)
  })

  it('correctly grades Chapter 1 True/False questions', () => {
    // Q39 (ID 139): False
    const q39 = CHAPTER1_QUESTIONS.find((q) => q.id === 139)!
    expect(gradeQuestion(q39, 'False').isCorrect).toBe(true)
    expect(gradeQuestion(q39, 'True').isCorrect).toBe(false)

    // Q40 (ID 140): True
    const q40 = CHAPTER1_QUESTIONS.find((q) => q.id === 140)!
    expect(gradeQuestion(q40, 'True').isCorrect).toBe(true)
    expect(gradeQuestion(q40, 'False').isCorrect).toBe(false)
  })

  it('correctly grades multiple choice questions', () => {
    const q5 = CHAPTER3_QUESTIONS.find((q) => q.id === 5)!
    expect(gradeQuestion(q5, ['B', 'D']).isCorrect).toBe(true)
    expect(gradeQuestion(q5, ['D', 'B']).isCorrect).toBe(true) // order independent
    expect(gradeQuestion(q5, ['B']).isCorrect).toBe(false)
    expect(gradeQuestion(q5, ['A', 'B', 'D']).isCorrect).toBe(false)

    // Chapter 4 Q1 (ID 201: A, C, E)
    const ch4Q1 = CHAPTER4_QUESTIONS.find((q) => q.id === 201)!
    expect(gradeQuestion(ch4Q1, ['A', 'C', 'E']).isCorrect).toBe(true)
    expect(gradeQuestion(ch4Q1, ['E', 'A', 'C']).isCorrect).toBe(true) // order independent
    expect(gradeQuestion(ch4Q1, ['A', 'C']).isCorrect).toBe(false) // missing one
    expect(gradeQuestion(ch4Q1, ['A', 'B', 'C', 'E']).isCorrect).toBe(false) // extra option
  })

  it('correctly grades exact output questions with normalization', () => {
    expect(normalizeOutput('  hello world \r\n')).toBe('hello world')
    const q32 = CHAPTER3_QUESTIONS.find((q) => q.id === 32)!
    expect(gradeQuestion(q32, 'Good-Luck').isCorrect).toBe(true)
    expect(gradeQuestion(q32, ' Good-Luck \n').isCorrect).toBe(true)
    expect(gradeQuestion(q32, 'Good- Luck').isCorrect).toBe(false) // internal space matters

    const q33 = CHAPTER3_QUESTIONS.find((q) => q.id === 33)!
    expect(gradeQuestion(q33, 'A*B!C-D').isCorrect).toBe(true)
    expect(gradeQuestion(q33, 'A*B!C-D\n').isCorrect).toBe(true)
    expect(gradeQuestion(q33, 'A * B ! C - D').isCorrect).toBe(false)
  })

  it('correctly handles self-assessment for code exercises', () => {
    const q39 = CHAPTER3_QUESTIONS.find((q) => q.id === 39)!
    const correctRes = gradeQuestion(q39, 'print(Total)', 'correct')
    expect(correctRes.isCorrect).toBe(true)
    expect(correctRes.isSelfAssessed).toBe(true)

    const needsPracticeRes = gradeQuestion(q39, 'print(total)', 'needs-practice')
    expect(needsPracticeRes.isCorrect).toBe(false)
    expect(needsPracticeRes.isSelfAssessed).toBe(true)
  })
})

describe('Study Lessons & Checklist', () => {
  it('has all 20 teaching sections across all three chapters', () => {
    expect(STUDY_SECTIONS.length).toBe(20)
    expect(CHAPTER1_STUDY_SECTIONS.length).toBe(4)
    expect(CHAPTER3_STUDY_SECTIONS.length).toBe(8)
    expect(CHAPTER4_STUDY_SECTIONS.length).toBe(8)

    STUDY_SECTIONS.forEach((sec) => {
      expect(sec.title.length).toBeGreaterThan(5)
      expect(sec.blocks.length).toBeGreaterThan(0)
    })
  })

  it('has chapter checklists for all chapters', () => {
    expect(CHAPTER1_CHECKLIST.length).toBe(9)
    expect(CHAPTER3_CHECKLIST.length).toBe(9)
    expect(CHAPTER4_CHECKLIST.length).toBe(10)
    expect(CHECKLIST_ITEMS.length).toBe(28)
  })

  it('links study sections to valid practice questions for Chapter 4', () => {
    const ch4QuestionIds = new Set(CHAPTER4_QUESTIONS.map((q) => q.id))
    CHAPTER4_STUDY_SECTIONS.forEach((sec) => {
      expect(sec.relatedQuestionIds.length).toBeGreaterThan(0)
      sec.relatedQuestionIds.forEach((qId) => {
        expect(ch4QuestionIds.has(qId)).toBe(true)
      })
    })
  })

  it('has valid default progress structure', () => {
    expect(DEFAULT_PROGRESS.reviewedSections).toEqual([])
    expect(DEFAULT_PROGRESS.completedChecklist).toEqual([])
    expect(DEFAULT_PROGRESS.questions).toEqual({})
    expect(DEFAULT_PROGRESS.scratchpadNotes.length).toBeGreaterThan(10)
  })
})
