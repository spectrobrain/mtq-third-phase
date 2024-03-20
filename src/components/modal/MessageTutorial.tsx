import React from 'react'
import { useModalContext } from '../../contexts'
import { rawMessages1 } from '../../utils/messages' // Adjust the import to get the function

import { StyleSheet } from 'react-native'
import { ContentMessage } from './tutorialMessage'
import TutorialMessage from './tutorialMessage/TutorialMessage'

const MessageTutorial = () => {
  const { modal } = useModalContext() ?? {}

  const messagesScreenText = rawMessages1[`${modal}`]

  return (
    <>
      <ContentMessage>
        <TutorialMessage message={messagesScreenText} />
      </ContentMessage>
    </>
  )
}

const styles = StyleSheet.create({
  containerSearchView: {
    width: 200,
    height: 200,
  },
})
export default MessageTutorial
