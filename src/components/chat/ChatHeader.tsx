import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { useChatContext } from '../../contexts'
import { Header } from '../../designSystem/components'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import {
  hightHorizontalScale,
  hightVerticalScale,
  moderateScale,
} from '../../utils/metrics'

export const ChatHeader = () => {
  const chat = useChatContext()
  const { goBack } = useNavigation()
  return (
    <Header style={styles.container}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: hightHorizontalScale(350),
          height: hightVerticalScale(60),
          gap: 16,
          flexDirection: 'row',
        }}
      >
        <View style={styles.containerIcon}>
          <Ionicons
            name={'arrow-back'}
            color="#FFF"
            size={moderateScale(32)}
            onPress={goBack}
          />
        </View>
        <View style={styles.containerTitle}>
          <Text style={[styles.textName, text.sm, text.semibold]}>
            {chat.name}
          </Text>
        </View>
      </View>
    </Header>
  )
}

const styles = StyleSheet.create({
  container: {
    height:
      Platform.OS === 'ios' ? hightVerticalScale(120) : hightVerticalScale(100),
  },
  containerTitle: {
    display: 'flex',
    width: hightHorizontalScale(280),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 10,
    padding: moderateScale(8),
    borderColor: colors.gray[500],
    borderWidth: 1,
  },
  containerIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: hightHorizontalScale(50),
    height: hightHorizontalScale(50),
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: colors.gray[500],
    borderRadius: 100,
    borderWidth: 1,
  },
  textName: {
    color: '#FFF',
  },
})
