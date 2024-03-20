import React from "react"
import { View, Text, StyleSheet, Dimensions } from "react-native"
import SliderVertical from "./SliderVertical"

const { width, height } = Dimensions.get("window");
export const ViewSliderVertical = ( {month  ,prom } : any) => {
  
  const {
    textMonthChart,
    textPromChart,
    chartSlider,
  } = styles

  return (
    <View style={chartSlider}>
      <Text style={textPromChart}>{prom}%</Text>
      <SliderVertical prom={prom} />
      <Text style={textMonthChart}>{month}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  chartSlider: {
    justifyContent: "center",
    alignItems: "center",
    width: "25%",
    height: "100%",
    marginLeft: width * 0.027,
    
  },
  textMonthChart: {
    marginTop:"6%",
    fontSize: height * 0.014,
    color:'#fff'
  },
  textPromChart: {
    marginBottom:"6%",
    fontSize: height * 0.011,
    color:'#fff'
  },
})

export default ViewSliderVertical