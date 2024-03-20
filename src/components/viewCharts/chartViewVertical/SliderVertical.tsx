import React,{ useState, useEffect } from "react"
import { LinearGradient } from "expo-linear-gradient"
import { View, StyleSheet, Dimensions } from "react-native"
import { colors } from "../../../designSystem/definitions";
//import { lasttreemonths } from "../../services/Data.json"

const { width, height } = Dimensions.get("window");

export const SliderVertical = ({ prom }:any ) => {
  const { sliderView, shadowSliderView, sliderProgress } = styles
  const [colorsQuota, setColorsQuota] = useState(["#51e7fb", "#0185f2"])
  useEffect(() => {
    prom >= 100 && setColorsQuota(["#90E94B", "#5D9037"])
  }, []) 
  return (
    <View style={[sliderView, shadowSliderView]}>
      <LinearGradient
        style={{ ...sliderProgress, height:  prom >= 100 ? "98%" : `${prom}%` }}
        colors={[colorsQuota[0], colorsQuota[1]]}
        end={{ x: 1, y: 1.2 }}
        start={{ x: 1, y: 0.1 }}
        locations={[0.1, 0.9]}
      />
    </View>
    
  )
}
const styles = StyleSheet.create({
  sliderView: {
    justifyContent: "flex-end",
    flexDirection: "column",
    width: "60%",
    height: "60%",
    borderRadius: width * 0.055,

    backgroundColor: colors.primary.base,
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "95%",
    margin: 1,
    borderRadius: width * 0.055,
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

export default SliderVertical
