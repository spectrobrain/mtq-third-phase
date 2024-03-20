import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

import {
  QuotaProvider,
  UserDataProviderProvider,
  ModalProvider,
} from './src/contexts'
import { HandlerNavigation } from './src/navigation/HandlerNavigation'
import { ToastProvider } from './src/contexts/ToastProvider'

export default function App() {
  return (
    <UserDataProviderProvider>
      <QuotaProvider>
        <NavigationContainer>
          <ModalProvider>
            <HandlerNavigation />
          </ModalProvider>
        </NavigationContainer>
      </QuotaProvider>
    </UserDataProviderProvider>
  )
}
