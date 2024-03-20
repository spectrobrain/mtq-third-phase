import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { text } from '../../designSystem/styles'
import { formatterUSD } from '../../utils/helper'
import {
  hightHorizontalScale,
  hightVerticalScale,
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'

type textDataRowType = {
  title: string
  value: number
}

const { width, height } = Dimensions.get('window')

const TextDataRow = ({ value, title }: textDataRowType) => {
  return (
    <View style={styles.containerTextData}>
      <Text style={[styles.textData, text.sm]}>{title}</Text>
      <Text style={[styles.textData, text.sm]}>
        {formatterUSD.format(value)}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerTextData: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: horizontalScale(5),
    justifyContent: 'space-between',
    width: hightHorizontalScale(290),
    height: hightVerticalScale(40),
    borderRadius: moderateScale(6),
    backgroundColor: 'rgba(255,255,255,0.2)',
  },
  textData: {
    color: '#fff',
  },
})
export default TextDataRow
