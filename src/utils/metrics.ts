import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const guidelineBaseWidth = 360
const guidelineBaseHeight = 812

export const horizontalScale = (size: any) =>
  (width / guidelineBaseWidth) * size
export const verticalScale = (size: any) =>
  (height / guidelineBaseHeight) * size
export const moderateScale = (size: any, factor = 0.5) =>
  size + (horizontalScale(size) - size) * factor
export const moderateVerticalScale = (size: any, factor = 0.5) =>
  size + (verticalScale(size) - size) * factor
export const hightHorizontalScale = (size: any, factor = 0.3) =>
  size + (horizontalScale(size) - size) * factor
export const hightVerticalScale = (size: any, factor = 0.3) =>
  size + (verticalScale(size) - size) * factor
export const lowHorizontalScale = (size: any, factor = 0.7) =>
  size + (horizontalScale(size) - size) * factor
export const lowVerticalScale = (size: any, factor = 0.7) =>
  size + (verticalScale(size) - size) * factor

export default {
  horizontalScale,
  verticalScale,
  moderateScale,
  moderateVerticalScale,
  hightHorizontalScale,
  hightVerticalScale,
  lowHorizontalScale,
  lowVerticalScale,
}
