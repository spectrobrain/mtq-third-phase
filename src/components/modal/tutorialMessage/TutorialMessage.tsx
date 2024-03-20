import React, { useState } from 'react'
import { useModalContext } from '../../../contexts'
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  Pressable,
} from 'react-native'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  hightHorizontalScale,
  hightVerticalScale,
  lowVerticalScale,
  lowHorizontalScale,
} from '../../../utils/metrics'
import { useFonts } from 'expo-font'
import { colors } from '../../../designSystem/definitions'
import { text } from '../../../designSystem/styles'

const { width, height } = Dimensions.get('window')
export const TutorialMessage = ({ message }: any) => {
  const { handleCloseModal } = useModalContext() ?? {}
  const [isPress, setIsPress] = useState(false)
  const [fontsLoaded] = useFonts({
    Roboto: require('../../../../assets/fonts/Roboto-Light.ttf'),
  })

  if (!fontsLoaded) {
    return null
  }

  const {
    containerMessage,
    textMessage,
    footerContainerMessage,
    headerContainerMessage,
    buttonDone,
    textButton,
  } = styles
  return (
    <View style={containerMessage}>
      <View style={headerContainerMessage}>
        <Image
          style={styles.imageLogo}
          source={require('../../../../assets/images/robot_1.png')}
        />
        <Text style={[textButton, text.md]}> MTQ App Tutorial </Text>
      </View>
      <ScrollView
        overScrollMode="always"
        style={styles.contentContainer}
        scrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        <Text style={[textMessage, text.xs]}>{message}</Text>
      </ScrollView>
      <View style={footerContainerMessage}>
        <Pressable style={buttonDone} onPress={handleCloseModal}>
          <Text style={[textButton, text.sm]}>Done</Text>
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  headerContainerMessage: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    width: hightHorizontalScale(280),
    height: hightVerticalScale(90),
    borderColor: colors.blueBorder,
    borderWidth: 1,
    backgroundColor: colors.blue_bg_chatMessage,
  },
  footerContainerMessage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: '80%',
    height: '12%',
  },
  containerMessage: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: moderateScale(8),
    backgroundColor: colors.blue_bg_chatMessageRobot,
    gap: 8,
    borderColor: colors.blueBorder,
    borderWidth: 1,
    width: hightHorizontalScale(280),
    height: hightVerticalScale(500),
    marginTop: '10%',
    marginLeft: '10%',
    marginRight: '10%',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  contentContainer: {
    display: 'flex',
    marginTop: verticalScale(8),
    borderRadius: moderateScale(8),
    backgroundColor: colors.gray[100],
    width: hightHorizontalScale(250),
    height: verticalScale(100),
  },
  textMessage: {
    marginTop: verticalScale(20),
    marginLeft: verticalScale(30),
    marginRight: verticalScale(30),
    marginBottom: verticalScale(40),
    fontFamily: 'Roboto',
  },
  imageLogo: {
    display: 'flex',
    width: hightHorizontalScale(45),
    height: hightVerticalScale(65),
  },
  buttonDone: {
    borderRadius: moderateScale(25),
    alignItems: 'center',
    borderColor: colors.blueBorder,
    backgroundColor: colors.blue_bg_chatMessage,
    borderWidth: 1,
    width: hightHorizontalScale(70),
    height: hightVerticalScale(30),
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    color: colors.white,
  },
})
export default TutorialMessage
