import React from 'react'
import { useUserDataContext } from '../contexts'
import  {ScreenLogin}  from '../screens'
import { GlobalNavigation } from './GlobalNavigation'

export const HandlerNavigation = () => {
  const { user } = useUserDataContext()

  if (!user?.data) return <ScreenLogin />

  return <GlobalNavigation />
}
