import { StyleSheet } from 'react-native'
import {
  moderateScale
} from '../utils/metrics'
import { colors } from './definitions'

export const input = StyleSheet.create({
  styles: {
    height: 40,
    borderWidth: 1,
    borderColor: colors.primary.base,
    backgroundColor: colors.blue_Rgba_input,
    color: colors.gray[900],
    borderRadius: 6,
    paddingLeft: 20,
    paddingRight: 20,
  },
})

export const text = StyleSheet.create({
  regular: {
    fontWeight: '400',
  },
  semibold: {
    fontWeight: '600',
  },
  medium: {
    fontWeight: '700',
  },
  bold: {
    fontWeight: '800',
  },
  xxxs: {
    fontSize: moderateScale(8),
  },
  xxs: {
    fontSize: moderateScale(10),
  },
  xs: {
    fontSize: moderateScale(12),
  },
  sm: {
    fontSize: moderateScale(14),
  },
  md: {
    fontSize: moderateScale(16),
  },
  lg: {
    fontSize: moderateScale(18),
  },
  xl: {
    fontSize: moderateScale(20),
  },
})
