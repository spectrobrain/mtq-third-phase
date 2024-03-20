import React from 'react'
import { initialMessage } from '../utils/messages' // Adjust the import to get the function
import { BackGroundTemplate, BannerMessage } from '../components'
import { MessageContainer } from '../designSystem/components/MessageContainer'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

interface Props extends NativeStackScreenProps<any, any> {}

export const ScreenMessage = (props: Props) => {
  const { navigation } = props

  const handlerNavigationMessage = () => {
    navigation.navigate('AppNavigation')
  }
  return (
    <BackGroundTemplate>
      <BannerMessage />
      <MessageContainer
        typeMessage={'StaticText'}
        onHandleNavigationMessage={handlerNavigationMessage}
      >
        {initialMessage}
      </MessageContainer>
    </BackGroundTemplate>
  )
}
