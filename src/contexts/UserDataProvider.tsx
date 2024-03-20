import AsyncStorage from '@react-native-async-storage/async-storage'
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react'
import type { FC, PropsWithChildren } from 'react'
import { UserDataType } from '../typings/user'

export interface UserDataProviderContextType {
  user: {
    data: UserDataType | null
    set: (value: React.SetStateAction<UserDataType | null>) => void
  }
}

const UserDataProviderContext = createContext({} as UserDataProviderContextType)

export const useUserDataContext = () => useContext(UserDataProviderContext)

export const UserDataProviderProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Provider } = UserDataProviderContext

  const [userData, setUserData] = useState<UserDataType | null>(null)

  useEffect(() => {
    if (userData) {
      AsyncStorage.setItem('username', userData.username)
      // Store token
      AsyncStorage.setItem('userToken', userData.access_token)
      // Store token expiry time in milliseconds
      AsyncStorage.setItem(
        'tokenExpiry',
        (new Date().getTime() + Number(userData.expires) * 1000).toString()
      )
    }
  }, [userData])

  const context: UserDataProviderContextType = {
    user: {
      data: userData,
      set: setUserData,
    },
  }

  return <Provider value={context}>{children}</Provider>
}
