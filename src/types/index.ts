export type QuestionType =
  | 'single-choice'
  | 'multiple-choice'
  | 'exact-output'
  | 'code-repair'
  | 'code-writing'

export type DifficultyLevel = 1 | 2 | 3 | 4

export type ChapterId = 'ch1' | 'ch3'

export interface QuestionOption {
  id: string
  text: string
}

export interface VariableTraceStep {
  step: string
  state: string
}

export interface Question {
  id: number
  chapterId: ChapterId
  questionNumber: number
  level: DifficultyLevel
  levelTitle: string
  type: QuestionType
  prompt: string
  codeSnippet?: string
  inputContext?: string
  options?: QuestionOption[]
  correctAnswer: string | string[]
  acceptableOutputs?: string[]
  starterCode?: string
  modelSolution?: string
  explanation: string
  hint: string
  traceSteps?: VariableTraceStep[]
  topics: string[]
  selectCount?: number
  sectionId?: string
}

export interface StudyTableRow {
  cells: string[]
}

export interface StudyTable {
  headers: string[]
  rows: string[][]
}

export type StudyBlockType =
  | 'paragraph'
  | 'callout'
  | 'table'
  | 'code'
  | 'list'
  | 'trace-table'
  | 'chips'

export interface StudyBlock {
  type: StudyBlockType
  title?: string
  text?: string
  code?: string
  language?: string
  output?: string
  note?: string
  items?: string[]
  table?: StudyTable
  calloutType?: 'note' | 'tip' | 'warning' | 'remember'
}

export interface StudySection {
  id: number
  chapterId: ChapterId
  title: string
  shortTitle: string
  subtitle: string
  blocks: StudyBlock[]
  relatedQuestionIds: number[]
}

export interface ChecklistItem {
  id: string
  text: string
}

export interface QuestionRecord {
  attempts: number
  correctCount: number
  lastResult: 'correct' | 'incorrect' | 'self-correct' | 'self-practice'
  lastAnswer?: any
  lastAttemptedAt: string
}

export interface SessionHistoryItem {
  id: string
  date: string
  mode: 'quick' | 'level' | 'exam' | 'mistakes'
  level?: DifficultyLevel
  totalQuestions: number
  correctCount: number
  selfAssessedCount: number
  durationSeconds: number
}

export interface UserProgress {
  questions: Record<number, QuestionRecord>
  reviewedSections: number[]
  completedChecklist: string[]
  scratchpadNotes: string
  sessionHistory: SessionHistoryItem[]
}

export type AppTab = 'study' | 'practice' | 'results' | 'progress'

export type PracticeMode = 'quick' | 'level' | 'exam' | 'mistakes'

export interface ActiveSession {
  mode: PracticeMode
  level?: DifficultyLevel
  questionIds: number[]
  currentIndex: number
  userAnswers: Record<number, any>
  submittedQuestionIds: number[]
  selfAssessments: Record<number, 'correct' | 'needs-practice'>
  bookmarkedQuestionIds: number[]
  isExamMode: boolean
  isCompleted: boolean
  startedAt: number
}
