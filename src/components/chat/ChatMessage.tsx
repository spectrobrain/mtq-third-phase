import React, { FC } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { colors } from '../../designSystem/definitions'
import { hightHorizontalScale, moderateScale } from '../../utils/metrics'
import { MessageType } from '../../typings'
import { MessageInfo } from './MessageInfo'

export const ChatMessage: FC<MessageType> = ({
  createdAt,
  transcription,
  role,
  type,
}) => {
  const fromAssistant = role === 'assistant'
  return (
    <View
      style={[
        styles.container,
        {
          justifyContent: fromAssistant ? 'flex-start' : 'flex-end',
        },
      ]}
    >
      {fromAssistant ? (
        <Image
          style={styles.imageLogo}
          source={require('../../../assets/images/robot_1.png')}
        />
      ) : null}
      <View
        style={[
          styles.messageContainer,
          {
            backgroundColor: fromAssistant
              ? colors.blue_bg_chatMessage
              : colors.blue_bg_chatMessageRobot,
            borderBottomLeftRadius: fromAssistant ? 0 : undefined,
            borderBottomRightRadius: fromAssistant ? undefined : 0,
          },
        ]}
      >
        <MessageInfo
          createdAt={createdAt}
          fromAssistant={fromAssistant}
          transcription={transcription}
          type={type ?? 'TEXT'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: hightHorizontalScale(330),
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 8,
  },
  messageContainer: {
    width: hightHorizontalScale(265),
    borderRadius: 12,
    borderColor: colors.blue_Rgba_035,
    borderWidth: 1,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  imageLogo: {
    display: 'flex',
    width: moderateScale(45),
    height: moderateScale(45),
  },
})
