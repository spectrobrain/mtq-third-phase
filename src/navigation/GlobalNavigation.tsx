import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { useUserDataContext } from '../contexts'
import { ChatScreen, ScreenLogin, ScreenMessage } from '../screens'
import AppNavigation from './AppNavigation';


const Stack = createNativeStackNavigator()

export const GlobalNavigation = () => {
  const { user } = useUserDataContext() ?? {}

  if (!user?.data) return <ScreenLogin/>

  return (
    <Stack.Navigator
    initialRouteName='ScreenMessage'
    screenOptions={{
      headerShown:false
    }}
    >
      <Stack.Screen
        name='AppNavigation'
        options={{ headerShown: false }}
        component={AppNavigation}
        />
      <Stack.Screen
        name='ChatScreen'
        options={{ headerShown: false }}
        component={ChatScreen}
        />
      <Stack.Screen
        name='ScreenMessage'
        options={{headerShown: false}}
        component={ScreenMessage}
        />
    </Stack.Navigator>
       
        
        
  )
}
