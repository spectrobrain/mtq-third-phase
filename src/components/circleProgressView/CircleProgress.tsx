import React from 'react'
import { View, Dimensions, StyleSheet, Text } from 'react-native'
import { Svg, Circle, Text as SVGText } from 'react-native-svg'
import { SliderCircle as SVGViewElement } from '../viewCharts/navBottonChart/SliderCircle'
import { text } from '../../designSystem/styles'
import { LinearGradient } from 'expo-linear-gradient'
import { hightVerticalScale, moderateScale } from '../../utils/metrics'


const { width, height } = Dimensions.get('window')
const CircleProgress = (props: any) => {
  const { size, strokeWidth } = props
  const radius = (size - strokeWidth) / 2
  const circum = radius * 2 * Math.PI
  const svgProgress =
    props.progressPercent > 100 ? 0 : 100 - props.progressPercent
  const textSize = props.progressPercent > 100 ? size * 0.12 : size * 0.144
  const bgCircle = props.progressPercent >= 100 ? '#5D9037' : '#51e7fb'

  return (
    <View style={styles.contentCircleProgress}>
      <Svg width={size} height={size}>
        <Circle
          stroke={props.bgColor ? props.bgColor : '#f2f2f2'}
          fill="none"
          strokeOpacity={0.2}
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth={size / 10}
        />

        <Circle
          stroke={bgCircle}
          strokeOpacity={0.8}
          fill="none"
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeDasharray={`${circum} ${circum}`}
          strokeDashoffset={radius * Math.PI * 2 * (svgProgress / 100)}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
          strokeWidth={size / 10}
        />
        <View style={styles.circlePercent}>
          <SVGViewElement
            width="98%"
            height="98%"
            widthCustom="65%"
            heightCustom="65%"
            progressPercent={props.progressPercent}
            //colorGradient={["#51e7fb", "#0185f2"]}
          >
            <Text style={[styles.textPercent, text.xl, text.bold]}>
              {props.progressPercent}%
            </Text>
          </SVGViewElement>
        </View>
      </Svg>
    </View>
  )
}

const styles = StyleSheet.create({
  contentCircleProgress: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: hightVerticalScale(310),
    height:hightVerticalScale(240), 
    borderRadius: width * 0.0277,
  },
  circlePercent: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textPercent: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
})
export default CircleProgress
