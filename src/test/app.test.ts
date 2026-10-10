import { describe, it, expect } from 'vitest'
import { QUESTIONS, CHAPTER1_QUESTIONS, CHAPTER3_QUESTIONS } from '../data/questions'
import {
  STUDY_SECTIONS,
  CHAPTER1_STUDY_SECTIONS,
  CHAPTER3_STUDY_SECTIONS,
  CHECKLIST_ITEMS,
  CHAPTER1_CHECKLIST,
  CHAPTER3_CHECKLIST
} from '../data/studySections'
import { gradeQuestion, normalizeOutput } from '../utils/grading'
import { DEFAULT_PROGRESS } from '../utils/storage'

describe('Question Bank Data Integrity', () => {
  it('contains 98 total questions across both chapters', () => {
    expect(QUESTIONS.length).toBe(98)
    expect(CHAPTER3_QUESTIONS.length).toBe(48)
    expect(CHAPTER1_QUESTIONS.length).toBe(50)
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

  it('all questions across both chapters have prompts, hints, and worked explanations', () => {
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
  it('correctly grades single choice questions for both chapters', () => {
    const q1 = CHAPTER3_QUESTIONS.find((q) => q.id === 1)!
    expect(gradeQuestion(q1, 'B').isCorrect).toBe(true)
    expect(gradeQuestion(q1, 'b').isCorrect).toBe(true)
    expect(gradeQuestion(q1, 'A').isCorrect).toBe(false)

    // Chapter 1 Q1 (ID 101)
    const ch1Q1 = CHAPTER1_QUESTIONS.find((q) => q.id === 101)!
    expect(gradeQuestion(ch1Q1, 'B').isCorrect).toBe(true)
    expect(gradeQuestion(ch1Q1, 'A').isCorrect).toBe(false)
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
  it('has all 12 teaching sections across both chapters', () => {
    expect(STUDY_SECTIONS.length).toBe(12)
    expect(CHAPTER1_STUDY_SECTIONS.length).toBe(4)
    expect(CHAPTER3_STUDY_SECTIONS.length).toBe(8)

    STUDY_SECTIONS.forEach((sec) => {
      expect(sec.title.length).toBeGreaterThan(5)
      expect(sec.blocks.length).toBeGreaterThan(0)
    })
  })

  it('has both chapter checklists', () => {
    expect(CHAPTER1_CHECKLIST.length).toBe(9)
    expect(CHAPTER3_CHECKLIST.length).toBe(9)
    expect(CHECKLIST_ITEMS.length).toBe(18)
  })

  it('has valid default progress structure', () => {
    expect(DEFAULT_PROGRESS.reviewedSections).toEqual([])
    expect(DEFAULT_PROGRESS.completedChecklist).toEqual([])
    expect(DEFAULT_PROGRESS.questions).toEqual({})
    expect(DEFAULT_PROGRESS.scratchpadNotes.length).toBeGreaterThan(10)
  })
})
