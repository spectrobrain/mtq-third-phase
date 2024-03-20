export type ChatInformationType = {
  _id: string
  userId: string
  sharedWith: any[]
  name: string
  description: string
  context: MessageType[]
  createdAt: string
  image?: string
  __v: number
}

export type PossibleMessageType = 'TEXT' | 'VOICE' | 'LOADING'

export type MessageType = {
  _id: string
  transcription: string
  type?: PossibleMessageType
  createdAt: Date
  role: string
}

export type ChatDataType = {
  _id: string
  userId: string
  sharedWith: []
  name: string
  description: string
  context: MessageType[]
  createdAt: string
  __v: number
}

export type ChatbotAnswerType = {
  type: string
  userMessage: string
  gptResponse: string
  input_created_at: string
  output_created_at: string
}
