import { View, StyleSheet, Pressable, Dimensions } from 'react-native'
import React, { ReactNode } from 'react'

const { width, height } = Dimensions.get('window')

type messageRobotPropsType = {
  children: ReactNode
}
export const ContentMessage = ({ children }: messageRobotPropsType) => {
  const { container } = styles

  return <View style={container}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
  },
})

export default ContentMessage
