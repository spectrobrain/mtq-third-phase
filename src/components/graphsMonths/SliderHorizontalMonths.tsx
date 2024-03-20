import React, { useEffect, useState } from "react"
import { LinearGradient } from "expo-linear-gradient"

import { StyleSheet, View, Text, Dimensions } from "react-native"

const { width, height } = Dimensions.get("window");

const SliderHorizontalMonths = ({ month, sales, quota, prom }:any) => {
  const {
    sliderProgress,
    sliderView,
    shadowSliderView,
    textMonthChart,
    textMonthquote,
    sliderViewContainer,
  } = styles
 
  const intlSales = new Intl.NumberFormat('en-EU', { style: 'currency', currency: 'USD',maximumSignificantDigits: 6 }).format(sales)
  const intlQuota = new Intl.NumberFormat('en-EU', { style: 'currency', currency: 'USD',maximumSignificantDigits: 6 }).format(quota)
  
  const [colorsQuota, setColorsQuota] = useState(["#51e7fb", "#0185f2"])

  useEffect(() => {
    prom >= 100 && setColorsQuota(["#90E94B", "#5D9037"])
  }, []) 
  
  return (
    <View style={sliderViewContainer}>
      <View style={[sliderView, shadowSliderView]}>
        <LinearGradient
          style={{
            ...sliderProgress,
            width: prom >= 100 ? "98%" : `${prom}%`,
          }} 
          colors={[colorsQuota[0], colorsQuota[1]]}
          end={{ x: 1, y: 1.2 }}
          start={{ x: 1, y: 0.1 }}
          locations={[0.1, 0.9]}
        />
      </View>
      <Text style={textMonthChart}>
        {month}<Text style={textMonthquote}> {intlSales} </Text>/ {intlQuota}
      </Text>
    </View>
   
  )
}
const styles = StyleSheet.create({
  sliderViewContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "90%",
    height: "13%",
    borderRadius: width * 0.027,
    marginTop: "1%",
  },
  sliderView: {
    flexDirection: "column",
    width: "37%",
    height: "75%",
    borderRadius: width * 0.055,
    backgroundColor: "#036481",
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems: "flex-end",

    height: "92%",
    margin: 1,
    borderRadius: width * 0.055,
  },
  textMonthChart: {
    fontSize: height * 0.0160,
    marginLeft: "2%"
  },
  textMonthquote: {
    fontSize: height * 0.0160,
    color: "#0185f2",
  },
  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
})

export default SliderHorizontalMonths