import type {
  ChatDataType,
  ChatInformationType,
  ChatbotAnswerType,
  MessageType,
  ResolveType,
} from '../typings'
import { endpoint } from './endpoints'

type GetChatsParams = {
  url: string
  apiToken: string
}

type GetChatsType = (
  params: GetChatsParams
) => Promise<ResolveType<ChatInformationType[]>>

export const getChats: GetChatsType = ({ apiToken, url }) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', apiToken)

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  return new Promise((resolve) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as ChatInformationType[]

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => {
        resolve({ resolveType: 'withError', error })
      })
  })
}

type GetChatParams = {
  apiToken: string
  chatbotId: string
}

type GetChatType = (
  params: GetChatParams
) => Promise<ResolveType<MessageType[]>>

export const getChat: GetChatType = ({ apiToken, chatbotId }) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', apiToken)

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  const url = endpoint().chat.getChat(chatbotId)

  return new Promise((resolve) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as ChatDataType
        const messages = data.context
          .filter((message) => message.role !== 'system')
          .map((message) => ({
            ...message,
            createdAt: new Date(message.createdAt),
            type: message.type ?? 'TEXT',
          }))

        return resolve({ resolveType: 'withoutError', data: messages })
      })
      .catch((error) => {
        resolve({ resolveType: 'withError', error })
      })
  })
}

type ChatWithBotParams = {
  url: string
  userMessage: string
  apiToken: string
}

type ChatWithBotType = (
  params: ChatWithBotParams
) => Promise<ResolveType<ChatbotAnswerType>>

export const chatWithBot: ChatWithBotType = ({
  apiToken,
  url,
  userMessage,
}) => {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', apiToken)
  myHeaders.append('Content-Type', 'application/json')

  const requestOptions: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({
      text: userMessage,
    }),
    redirect: 'follow',
  }

  return new Promise((resolve) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as ChatbotAnswerType

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => resolve({ resolveType: 'withError', error: {} }))
  })
}
