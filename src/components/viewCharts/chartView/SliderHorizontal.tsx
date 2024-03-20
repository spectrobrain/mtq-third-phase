import React, { useEffect, useState } from "react";
import { StyleSheet, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type salesType = {
  sales: number;
};

const { width, height } = Dimensions.get("window");
export const SliderHorizontal = ({ sales }: salesType) => {
  const { sliderProgress } = styles;

  const [colorsQuota, setColorsQuota] = useState(["#51e7fb", "#0185f2"]);

  useEffect(() => {
    sales >= 100 && setColorsQuota(["#90E94B", "#5D9037"]);
  }, []);

  return (
    <LinearGradient
      style={{ ...sliderProgress, width: sales >= 100 ? "99%" : `${sales}%` }} //destructuracion para hacer dinamico el slider
      colors={[colorsQuota[0], colorsQuota[1]]}
      end={{ x: 1, y: 1.2 }}
      start={{ x: 1, y: 0.1 }}
      locations={[0.1, 0.9]}
    />
  );
};
const styles = StyleSheet.create({
  sliderView: {
    justifyContent: "flex-end",
    flexDirection: "column",
    height: "100%",
    borderRadius: width * 0.055,
    backgroundColor: "#0a667d",
  },
  sliderProgress: {
    flexDirection: "column",
    alignItems: "flex-end",
    width: "80%",
    height: "92%",
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
});

export default SliderHorizontal;
