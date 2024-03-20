import { Ionicons } from '@expo/vector-icons'
import { StackScreenProps } from '@react-navigation/stack'
import React from 'react'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'
import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  View,
  Text,
} from 'react-native'
import { logout } from '../../service/serviceFetch'
import { useUserDataContext } from '../../contexts'

type BannerChartsPropsType = {
  iconName?: any
  navigateTo: string
}

const { width, height } = Dimensions.get('window')

export const BannerCharts = ({ iconName }: BannerChartsPropsType) => {
  const { user } = useUserDataContext()
  const userName =
    user?.data?.username
      ?.split(' ')
      .reverse()
      .map((letter) => letter.charAt(0)) ?? []

  const handleLogout = () => {
    logout()
    user.set(null)
  }
  return (
    <View style={styles.containerHeader}>
      <Image
        style={styles.imageLogo}
        source={require('../../../assets/images/logo_w.png')}
      ></Image>
      <View style={styles.sessionContainer}>
        <View style={styles.initialsLetters}>
          <Text style={[styles.textSession, text.sm]}>
            {userName?.join('')}
          </Text>
        </View>
        <Pressable style={styles.iconXblack} onPress={() => handleLogout()}>
          <Ionicons
            style={styles.iconLogout}
            name={iconName}
            size={moderateScale(35)}
            color="#fff"
          />
        </Pressable>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    width: width,
    height: '100%',
  },
  iconLogout: {
    height: moderateScale(30),
  },
  containerHeader: {
    width: horizontalScale(310),
    height: verticalScale(60),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: verticalScale(20),
  },
  imageLogo: {
    marginTop: verticalScale(10),
    // marginLeft: horizontalScale(5),
    width: hightHorizontalScale(100),
    height: hightVerticalScale(45),
  },
  iconXblack: {
    display: 'flex',
    alignItems: 'flex-end',
    width: horizontalScale(50),
    height: '100%',
    justifyContent: 'center',
  },
  sessionContainer: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: 10,
    alignItems: 'center',
    width: horizontalScale(100),
    height: '100%',
    justifyContent: 'flex-end',
  },
  textSession: {
    color: colors.white,
  },
  initialsLetters: {
    display: 'flex',
    alignItems: 'center',
    marginTop: hightVerticalScale(10),
    justifyContent: 'center',
    width: hightHorizontalScale(40),
    height: hightHorizontalScale(40),
    borderRadius: 100,
    backgroundColor: colors.blueBackground,
  },
})

export default BannerCharts
