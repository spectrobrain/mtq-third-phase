import {
  View,
  Text,
  Pressable,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import { text } from '../../designSystem/styles'
import {
  hightVerticalScale,
  moderateScale,
  verticalScale,
} from '../../utils/metrics'
const { width, height } = Dimensions.get('window')

type navChartType = {
  title: string
  isTouch: boolean
  handleProgress: () => void
  dataType: string
}
const NavChartCircle = ({
  title,
  handleProgress,
  isTouch,
  dataType,
}: navChartType) => {
  const [isPress, setIsPress] = useState(false)

  useEffect(() => {
    const validate = title === dataType
    setIsPress(validate)
  }, [isTouch])

  return (
    <TouchableOpacity onPress={handleProgress} style={styles.navButtonProgress}>
      <Text
        style={{
          ...styles.textNav,
          color: isPress ? '#74D96D' : '#fff',
          ...text.xs,
        }}
      >
        {title}
      </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  textNav: {
    color: '#fff',
    textTransform: 'capitalize',
  },
  navCircleProgress: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: hightVerticalScale(40),
    width: '100%',
  },
  navButtonProgress: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: verticalScale(40),
    width: '25%',
  },
})
export default NavChartCircle
