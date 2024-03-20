import React, { FC,useState, useEffect } from 'react'
import { KeyboardAvoidingView, Platform } from 'react-native'
import { ChatForm, ChatHeader, ListOfMessages } from '../components/chat'
import { ChatProvider } from '../contexts/ChatProvider'
import { ChatInformationType } from '../typings'


export interface ChatProviderProps {
  route: {
    params: { chatInfo: ChatInformationType }
  }
}

function ChatScreenComponents () {
  
  return (
    <>
      <ChatHeader />
      <ListOfMessages />
      <ChatForm />
    </>
  )
}

export const ChatScreen: FC<ChatProviderProps> = ({
  route: {
    params: { chatInfo },
  },
}) => {
  
  if (true || Platform.OS === 'android') {
    return (
      <ChatProvider {...chatInfo}>
        <ChatScreenComponents />
      </ChatProvider>
    )
  }
}
