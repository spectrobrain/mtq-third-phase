import { useNavigation } from '@react-navigation/native'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'
import { colors } from '../definitions'
import { text } from '../styles'

interface Props extends NativeStackScreenProps<any, any> {
  typeMessage: messageContentType
  children: React.ReactNode
}

const { width, height } = Dimensions.get('window')

export type messageContentType = 'StaticText' | 'IaText' | 'ChatText'

export interface IChatContainer {
  messageType?: messageContentType
  typeMessage?: IChatContainer
}

export interface ITypeMessage {
  typeMessage: messageContentType
  children: React.ReactNode
  onHandleNavigationMessage: () => void
}
export const MessageContainer: FC<ITypeMessage> = ({
  typeMessage,
  children,
  onHandleNavigationMessage,
}) => {
  const typeContainer = {
    StaticText: styles.messageContainerStaticText,
    IaText: styles.messageContainerIaText,
    ChatText: styles.messageContainerChatText,
  }

  const messageContainer = typeContainer[`${typeMessage}`]

  return (
    <View style={styles.container}>
      <View style={styles.messageContainer}>
        <View style={styles.headerContainerMessage}>
          <Image
            style={styles.imageLogo}
            source={require('../../../assets/images/robot_1.png')}
          />

          <TouchableHighlight
            underlayColor="#5D9037"
            style={styles.buttonIconMessage}
            onPress={onHandleNavigationMessage}
          >
            <Text style={[styles.textContinue, text.xxs]}> Continue</Text>
          </TouchableHighlight>
        </View>
        <Text style={[styles.textContainer, text.sm]}>{children}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(360),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(50),
  },
  headerContainerMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    width: horizontalScale(260),
    height: verticalScale(70),
    paddingHorizontal: horizontalScale(12),
    borderColor: colors.blueBorder,
    borderWidth: 1,
    backgroundColor: colors.blue_bg_chatMessage,
  },
  messageContainer: {
    display: 'flex',
    width: horizontalScale(288),
    borderRadius: moderateScale(12),
    borderColor: colors.blue_Rgba_035,
    borderWidth: 1,
    padding: verticalScale(16),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  messageContainerIaText: {
    backgroundColor: colors.blue_bg_chatMessage,
    borderBottomLeftRadius: 0,
  },
  messageContainerStaticText: {
    backgroundColor: colors.blue_bg_chatMessageRobot,
    paddingVertical: verticalScale(8),
    paddingHorizontal: horizontalScale(16),
  },
  messageContainerChatText: {
    backgroundColor: colors.blue_bg_chatMessageRobot,
    borderBottomLeftRadius: 0,
  },
  textContainer: {
    display: 'flex',
    width: '100%',
    color: colors.gray[100],
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  textContinue: {
    textAlign: 'center',
    textAlignVertical: 'center',
    width: horizontalScale(90),
    height: verticalScale(20),
    color: colors.gray[100],
  },
  imageLogo: {
    display: 'flex',
    width: horizontalScale(33),
    height: verticalScale(50),
  },
  buttonIconMessage: {
    borderRadius: moderateScale(25),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: colors.blueBorder,
    backgroundColor: colors.blue_bg_chatMessage,
    borderWidth: 1,
    width: moderateScale(90),
    height: moderateScale(30),
  },
})
