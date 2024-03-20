import { View, Text, Dimensions, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { monthsData, daysOfWeek } from '../../utils/helper'
import { text } from '../../designSystem/styles'
import { lowVerticalScale, moderateScale, verticalScale } from '../../utils/metrics'

const { width, height } = Dimensions.get('window')
const DateText = ({ typeDate1 }) => {
  const [typeDate, setTypeDate] = useState()

  const today = new Date()
  const startOfWeek = new Date(today)
  const startDayWeek = startOfWeek.setDate(
    today.getDate() - today.getDay() + (today.getDay() === 0 ? -6 : 1)
  )
  const startDayWeekok = startOfWeek.getDate() // if today is Sunday, go back 6 days, otherwise go to the next Monday

  const endOfWeek = new Date(startOfWeek)
  const endDayWeek = endOfWeek.setDate(startOfWeek.getDate() + 6)
  const endDayWeekok = endOfWeek.getDate()
  const monthName = monthsData[today.getMonth()]
  const dayNumber = today.getDate()

  const dates = {
    daily: `Today, ${monthName} ${dayNumber}`,
    yearly: today.getFullYear(),
    monthly: monthName,
    weekly: `Week, ${monthName} ${startOfWeek.getDate()} to ${endOfWeek.getDate()}`,
  }
  const dataChart = dates[typeDate1]

  return (
    <View style={styles.datesContainer}>
      <Text style={[styles.textDates, text.sm]}>{dataChart}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  textDates: {
    color: '#74D96D',
  },
  datesContainer: {
    paddingBottom: moderateScale(2),
    display: 'flex',
    width: '100%',
    height: lowVerticalScale(35),
    alignItems: 'center',
    justifyContent: 'center'
  },
})
export default DateText
