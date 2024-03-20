import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Pressable,
} from 'react-native'
import React, { FC, Fragment, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import * as Clipboard from 'expo-clipboard'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import { useModalContext } from '../../contexts'
import { PossibleMessageType } from '../../typings'
import { moderateScale } from '../../utils/metrics'
import ModalMessage from '../modal/ModalMessage'

const formatTime = (date: Date) => {
  const hour = date.getHours().toString().padStart(2, '0')
  const minutes = date.getMinutes().toString().padStart(2, '0')

  return `${hour}:${minutes}`
}

type MessageInfoProps = {
  fromAssistant: boolean
  transcription: string
  createdAt: Date
  type: PossibleMessageType
}

export const MessageInfo: FC<MessageInfoProps> = ({
  createdAt,
  fromAssistant,
  transcription,
  type,
}) => {
  const [isCopiedText, setIsCopiedText] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const { handleOpenToast } = useModalContext() ?? {}
  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(transcription)
  }

  const handleInClipboard = () => {
    copyToClipboard()
    setIsCopiedText(!isCopiedText)
    setModalVisible(!modalVisible)
    handleOpenToast('sucess')
  }
  const handleOutClipboard = () => {
    setIsCopiedText(!isCopiedText)
    setModalVisible(!modalVisible)
  }

  if (type === 'LOADING') {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator color={colors.primary.base} />
      </View>
    )
  }

  return (
    <Fragment>
      <ModalMessage
        isVisible={modalVisible}
        requestClose={() => handleInClipboard()}
      ></ModalMessage>
      <Text
        style={[
          text.md,
          { color: fromAssistant ? colors.gray[100] : colors.gray[200] },
        ]}
      >
        {transcription}
      </Text>
      <View style={styles.footerMessage}>
        <Text
          style={[
            text.xs,
            { color: fromAssistant ? colors.gray[700] : colors.white },
          ]}
        >
          {formatTime(createdAt)}
        </Text>
        <Pressable
          style={styles.buttonClipBoard}
          onPressIn={() => handleInClipboard()}
          onPressOut={() => handleOutClipboard()}
        >
          <Ionicons
            name={'copy'}
            color={isCopiedText ? 'gray' : 'white'}
            size={moderateScale(20)}
          />
        </Pressable>
      </View>
    </Fragment>
  )
}

const styles = StyleSheet.create({
  loaderContainer: {
    justifyContent: 'center',
    width: '100%',
  },
  buttonClipBoard: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '20%',
    height: 40,
  },
  footerMessage: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
})
