import { UserProgress } from '../types'

const STORAGE_KEY = 'pylevel_k_revision_progress_v1'

export const DEFAULT_PROGRESS: UserProgress = {
  questions: {},
  reviewedSections: [],
  completedChecklist: [],
  scratchpadNotes: `# Variable Tracing Scratchpad\n# Use this space during practice to trace variables line by line:\n\n# Example:\n# a = 5\n# b = 7\n# a += b -> a = 12\n`,
  sessionHistory: []
}

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return DEFAULT_PROGRESS
    const parsed = JSON.parse(raw)
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      questions: parsed.questions || {},
      reviewedSections: parsed.reviewedSections || [],
      completedChecklist: parsed.completedChecklist || [],
      sessionHistory: parsed.sessionHistory || []
    }
  } catch (err) {
    console.error('Failed to load user progress from localStorage:', err)
    return DEFAULT_PROGRESS
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch (err) {
    console.error('Failed to save user progress to localStorage:', err)
  }
}

export function clearUserProgress(): UserProgress {
  try {
    localStorage.removeItem(STORAGE_KEY)
  } catch (err) {
    console.error('Failed to clear user progress:', err)
  }
  return DEFAULT_PROGRESS
}
