import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import {
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  StyleSheet,
} from 'react-native'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../utils/metrics'
import { BannerLogin, FormLogin, BackGroundTemplate } from '../components'

const { width, height } = Dimensions.get('window')
const isTablet = width >= 768
export const ScreenLogin = () => {
  return (
    <SafeAreaView style={styles.containerSafeAreaView}>
      <BackGroundTemplate>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
          keyboardVerticalOffset={Platform.OS === 'ios' ?  verticalScale(10)  : verticalScale(5)}
        >
          <BannerLogin />
          <FormLogin />
        </KeyboardAvoidingView>
      </BackGroundTemplate>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  containerSafeAreaView: {
    flex: 1,
    // backgroundColor:'yellow'
  },
  container: {
    height : verticalScale(850),
    width : horizontalScale(360),
    flexDirection: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
})
export default ScreenLogin
