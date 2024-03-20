import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { FC, PropsWithChildren } from 'react'
import { getChats } from '../service/chat'
import type { ChatInformationType } from '../typings'
import { useUserDataContext } from './UserDataProvider'
import { endpoint } from '../service/endpoints'

export interface ChatsContextType {
  value: ChatInformationType[]
  loading: boolean
  error: boolean
}

const ChatsContext = createContext({} as ChatsContextType)

export const useChatsContext = () => useContext(ChatsContext)

export const ChatsProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = ChatsContext
  const { user } = useUserDataContext()

  const [chats, setChats] = useState<ChatInformationType[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  const getChatsHandler = async () => {
    if (!user.data) return

    setLoading(true)
    const fetchChatsResolve = await getChats({
      url: endpoint().chat.getChats(),
      apiToken: user.data.token,
    })

    setLoading(false)

    if (fetchChatsResolve.resolveType === 'withError') {
      return setError(true)
    }

    const { data } = fetchChatsResolve
    setError(false)
    setChats(data)
  }

  useEffect(() => {
    getChatsHandler()
  }, [])

  const context: ChatsContextType = {
    loading,
    value: chats,
    error,
  }

  return <Provider value={context}>{children}</Provider>
}
