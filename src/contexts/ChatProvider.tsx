import type { FC, PropsWithChildren } from 'react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { chatWithBot, getChat } from '../service/chat'
import { endpoint } from '../service/endpoints'
import type {
  ChatInformationType,
  MessageType,
  PossibleMessageType,
} from '../typings'
import { useUserDataContext } from './UserDataProvider'

type MessageInfoType = {
  message: string
  type: PossibleMessageType
}

type SendMessageType = (params: MessageInfoType) => void

export interface ChatProviderContextType extends ChatInformationType {
  chatId: string
  messages: MessageType[]
  sendMessage: SendMessageType
  loadingResponse: boolean
}

export type ChatProviderProps = ChatInformationType

const ChatProviderContext = createContext({} as ChatProviderContextType)

export const useChatContext = () => useContext(ChatProviderContext)

export const ChatProvider: FC<PropsWithChildren<ChatProviderProps>> = ({
  children,
  ...chatInfo
}) => {
  const { Provider } = ChatProviderContext
  const { user } = useUserDataContext()

  const [messages, setMessages] = useState<MessageType[]>([])
  const [loadingResponse, setLoadingResponse] = useState(false)

  const sendMessage: SendMessageType = ({ message, type }) => {
    if (!user.data) return

    const userMessageId = `${Math.random()}`
    const userMessage: MessageType = {
      createdAt: new Date(),
      _id: userMessageId,
      transcription: message,
      type,
      role: 'user',
    }

    const assistantMessageId = `${Math.random()}`
    const assistantResponse: MessageType = {
      createdAt: new Date(),
      _id: assistantMessageId,
      transcription: '',
      type: 'LOADING',
      role: 'assistant',
    }
    setMessages(curr => curr.concat([userMessage, assistantResponse]))

    setLoadingResponse(true)

    chatWithBot({
      url: endpoint().chat.text2text(chatInfo._id),
      userMessage: message,
      apiToken: user.data.token,
    })
      .then(chatResolve => {
        if (chatResolve.resolveType === 'withError') {
          setMessages(curr =>
            curr.filter(
              message =>
                ![assistantMessageId, userMessageId].includes(message._id)
            )
          )
          return Alert.alert('I cannot answer you')
        }

        const { gptResponse, output_created_at } = chatResolve.data

        setMessages(curr =>
          curr.map(message => {
            if (message._id !== assistantMessageId) return message

            return {
              ...message,
              createdAt: new Date(output_created_at),
              transcription: gptResponse,
              type: 'TEXT',
            }
          })
        )
      })
      .finally(() => setLoadingResponse(false))
  }

  const getInitialChatInfo = async () => {
    if (!user.data) return

    const chatResponse = await getChat({
      apiToken: user.data?.token,
      chatbotId: chatInfo._id,
    })

    if (chatResponse.resolveType === 'withError') {
      return
    }

    setMessages(chatResponse.data)
  }

  useEffect(() => {
    getInitialChatInfo()
  }, [user.data])

  const context: ChatProviderContextType = {
    chatId: chatInfo._id,
    messages,
    loadingResponse,
    sendMessage,
    ...chatInfo,
  }

  return <Provider value={context}>{children}</Provider>
}
