export type SearchType = {
  id: string
  question: string
  answer: string
  createdAt: Date
}

export type PossibleTab = 'new' | 'saved'

export type PossibleSearchingState = 'loading' | 'updated' | 'empty' | 'error'
