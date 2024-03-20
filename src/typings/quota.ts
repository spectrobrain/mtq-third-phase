import { IQuota } from './types'

export type QuotaStateType<DataType = IQuota> = {
  data: DataType | null
  loading: boolean
  error: boolean
  update: () => void
}

export type AskQuestionResponse = {
  gptResponse: string
  userMessage: string
}
