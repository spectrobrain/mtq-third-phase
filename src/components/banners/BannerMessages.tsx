import React from 'react'

import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native'
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  moderateVerticalScale,
} from '../../utils/metrics'

const { width, height } = Dimensions.get('window')

export const BannerMessage = () => {
  const { imageBanner } = styles
  return (
    <View style={styles.container}>
      <ImageBackground
        style={{ ...imageBanner, height: verticalScale(100) }}
        source={require('../../../assets/images/header_bg_ok.png')}
      >
        <Image
          source={require('../../../assets/images/logo.png')}
          style={styles.imageLogo}
        ></Image>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(360),
    justifyContent: 'flex-start',
  },
  iconX: {
    marginRight: horizontalScale(5),
  },
  imageBanner: {
    display: 'flex',
    flexDirection: 'row',
    width: horizontalScale(360),
    heigth: verticalScale(80),
    alignItems: 'flex-start',
  },
  imageLogo: {
    marginTop: moderateVerticalScale(40),
    display: 'flex',
    width: horizontalScale(85),
    height: verticalScale(35),
  },
})
