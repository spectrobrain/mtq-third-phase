import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  Image,
} from 'react-native'
import React, { ReactNode } from 'react'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  hightHorizontalScale,
  hightVerticalScale,
} from '../../utils/metrics'

export const BannerLogin = () => {
  return (
    <ImageBackground
      style={{ ...styles.container, height: verticalScale(410) }}
      source={require('../../../assets/images/login_bg_ok.png')}
    >
      <View style={styles.containerLogoText}>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.imageLogo}
        ></Image>

        <View style={styles.textView}>
          <Text style={styles.textImage}>Welcome to your sales assistant</Text>
        </View>
      </View>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: horizontalScale(360),
  },
  containerLogoText: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(360),
  },
  imageLogo: {
    marginTop: '17%',
    display: 'flex',
    width: hightHorizontalScale(120),
    height: hightVerticalScale(60),
  },
  textImage: {
    fontSize: moderateScale(20),
    color: '#1592b9',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textView: {
    justifyContent: 'center',
    alignItems: 'center',
    width: horizontalScale(250),
  },
})
export default BannerLogin
