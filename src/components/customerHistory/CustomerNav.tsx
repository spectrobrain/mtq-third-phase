import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { useCustomersHistoryContext } from '../../contexts'
import { MaterialIcons } from '@expo/vector-icons'
import { colors } from '../../designSystem/definitions'
import { text } from '../../designSystem/styles'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'

export const CustomerNav = () => {
  const { next, prev, currentPage, state, totalPages } =
    useCustomersHistoryContext()

  if (state !== 'updated') return null
  return (
    <View style={styles.container}>
      <View style={styles.actionsContainer}>
        <Pressable style={styles.actionButton} onPress={prev}>
          <MaterialIcons
            name="navigate-before"
            size={moderateScale(30)}
            color={colors.gray[50]}
          />
        </Pressable>
        <Text
          style={[text.sm, styles.text]}
        >{`${currentPage} / ${totalPages}`}</Text>
        <Pressable style={styles.actionButton} onPress={next}>
          <MaterialIcons
            name="navigate-next"
            size={moderateScale(30)}
            color={colors.gray[50]}
          />
        </Pressable>
      </View>
    </View>
  )
}

export default CustomerNav

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    width: '100%',
    height: verticalScale(60),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: colors.primary.base,
  },
  actionsContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
    marginTop: verticalScale(4),
    marginRight: horizontalScale(6),
    gap: horizontalScale(8),
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionButton: {
    height: hightHorizontalScale(45),
    width: hightHorizontalScale(45),
    backgroundColor: colors.blue_Rgba_025,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: colors.gray[50],
  },
})
