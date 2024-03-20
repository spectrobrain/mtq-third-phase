import { StyleSheet, Text, View } from 'react-native'
import React, { FC, PropsWithChildren } from 'react'
import Constants from 'expo-constants'
import {
  hightHorizontalScale,
  horizontalScale
} from '../../utils/metrics'
import { colors } from '../definitions'
import { text } from '../styles'

type HeaderProps = {
  title?: string
  style?: {}
}

export const Header: FC<PropsWithChildren<HeaderProps>> = ({
  children,
  title,
  style: containerStyles,
}) => {
  return (
    <View style={[styles.container, containerStyles]}>
      {title && (
        <View style={[styles.containerTitle,]}>
          <Text style={[styles.title, text.sm, text.semibold]}>{title}</Text>
        </View>
      )}
      {children}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    width: horizontalScale(360),
    alignItems: 'center',
    backgroundColor: colors.primary.base,
    opacity:0.9,
    borderTopColor:colors.blueBorder,
    borderBottomColor:colors.blueBorder,
    borderWidth:1,
    padding:10,
    paddingTop: Constants.statusBarHeight + 10,
  },
  containerTitle: {
    width:hightHorizontalScale(330),
    borderColor: colors.gray[500],
    borderWidth: 1,
    borderRadius:10,
    backgroundColor:'rgba(0,255,247,0.1)',
    padding:8,
    shadowColor: "#000",

  },
  title: {
    color: colors.gray[50],
    textAlign: 'center',
  }
})
