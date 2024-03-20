import { Feather } from '@expo/vector-icons'
import { openURL } from 'expo-linking'
import React, { FC } from 'react'
import { Pressable, StyleSheet, View } from 'react-native'
import { colors } from '../../designSystem/definitions'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'

type ActionsProps = {
  phone: string
  email: string
}

export const Actions: FC<ActionsProps> = ({ phone, email }) => {
  return (
    <View style={styles.actionContainer}>
      {phone && (
        <Pressable
          style={styles.buttonAction}
          onPress={() => openURL(`tel:${phone}`)}
        >
          <Feather name="phone" size={moderateScale(24)} color={colors.white} />
        </Pressable>
      )}
      <Pressable
        style={styles.buttonAction}
        onPress={() => openURL(`mailto:${email}`)}
      >
        <Feather name="mail" size={moderateScale(24)} color={colors.white} />
      </Pressable>
      {phone && (
        <Pressable
          style={styles.buttonAction}
          onPress={() => openURL(`sms:+${phone}`)}
        >
          <Feather
            name="message-circle"
            size={moderateScale(24)}
            color={colors.white}
          />
        </Pressable>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  actionContainer: {
    width: hightHorizontalScale(180),
    flexDirection: 'row',
    gap: horizontalScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonAction: {
    height: verticalScale(50),
    width: verticalScale(50),
    borderRadius: moderateScale(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
})
