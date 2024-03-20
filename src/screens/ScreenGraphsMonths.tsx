
import React from 'react'
import { StyleSheet, Text, Dimensions } from "react-native"
import {BackGroundTemplate, BannerCharts, ChartViewMonth } from '../components'
import { StackScreenProps } from '@react-navigation/stack'
import usePastMonth from '../hooks/usePastMonth'


const { width, height } = Dimensions.get("window")

interface Props extends StackScreenProps<any,any>{} 
export const ScreenGraphsMonths = (props: Props) => {

  const { promYear} = usePastMonth()
  const { textTitle } = styles
  return (
    <BackGroundTemplate>
      <BannerCharts  iconName={"close-outline"} navigateTo="ScreenCharts"/>
      <Text style={textTitle}>Monthly Quota</Text>
      <Text style={styles.textDescription}>
       You have met an average of {promYear}% of the objective sales quota,
        visit AI chat to receive advice on how to increase your results
      </Text>
      <ChartViewMonth />
    </BackGroundTemplate>
  )
}


const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    width: width,
    height: "100%",
  },

  containerHeader: {
    width: "100%",
    height: "11%",
  },
  textTitle: {
    display: "flex",
    width: "90%",
    height: "7%",
    marginTop: "9%",
    alignItems: "flex-start",
    alignContent: "flex-start",
    color: "#51e7fb",
    fontSize: height * 0.0284,
  },
  textDescription: {
    marginTop: "5%",
    marginBottom: "8%",
    fontSize:height * 0.0184,
    color: "white",
    width: "90%",
  },
})

export default ScreenGraphsMonths