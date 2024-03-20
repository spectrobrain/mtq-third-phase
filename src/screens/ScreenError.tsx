import React from 'react'
import { Dimensions, StyleSheet, View, Image, Text } from 'react-native'
import { BackGroundTemplate, BannerCharts, Loader } from '../components'
import {  useQuotaContext } from '../contexts'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { horizontalScale, moderateScale, moderateVerticalScale, verticalScale } from '../utils/metrics'
import { colors } from '../designSystem/definitions'
import { text } from '../designSystem/styles'


interface Props extends NativeStackScreenProps<any, any> {
  messageError: string
}
interface MessageErrorType {
  messageError: string
}

const { width, height } = Dimensions.get('window')

export const ScreenError = (props: Props) => {
  const { messageError } = props
  const { loading } = useQuotaContext() ?? {}
  const isTablet = width >= 768
  const textSize = isTablet ? text.xl : text.md;
  return (
    <>
   { loading ? (<Loader/>) : (
    <BackGroundTemplate aling='center'>
      <BannerCharts iconName="log-out-outline" navigateTo="ScreenLogin"/>
      <View style={styles.container}>
        <View style={styles.messageContainer}>
          <Text style={[styles.textContainer, textSize ]}>!Ups... {messageError} ¡</Text>
          <View style={styles.containerRobot}>
            <Image
              style={styles.imageLogo}
              source={require('../../assets/images/robot_1.png')}
            />
          </View>
        </View>
      </View>
    </BackGroundTemplate>)}
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
   

    
  },
  messageContainer: {
    display: 'flex',
    width: moderateScale(288),
    height: 'auto',
    borderRadius: moderateScale(12),
    borderColor: colors.yellow_border_alert,
    borderWidth: 3,
    padding: verticalScale(16),
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    flexWrap: 'nowrap',
  },
  textContainer: {
    display: 'flex',
    width: '100%', 
    textAlign:'center',
    color: colors.gray[100],
    paddingVertical: verticalScale(16),
    paddingHorizontal: horizontalScale(16),
  },
  containerRobot: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    borderRadius: moderateScale(8),
    width: moderateScale(260),
    height: moderateVerticalScale(70),
    paddingHorizontal: horizontalScale(12),
   
    
  },
  imageLogo: {
    display: 'flex',
    width: moderateScale(60),
    height: moderateVerticalScale(78),
  },
  
})
