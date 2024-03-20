import React, { FC, ReactNode, useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type salesType = {
  colorGradient?:string[];
  sales?: number;
  children: ReactNode;
  width: string;
  height: string;
  widthCustom?: string;
  heightCustom?: string;
  progressPercent :number ;
  onPressHandle?: () => void;
  onPressInHandle?: () => void;
  onPressOutHandle?: () => void;
  onLongPressHandle?: () => void;
};

const { width, height } = Dimensions.get("window");
export const SliderCircle = ({
  colorGradient,
  children,
  width,
  height,
  widthCustom = "25%",
  heightCustom = "90%",
  progressPercent ,
  onPressHandle,
  onPressInHandle,
  onPressOutHandle,
  onLongPressHandle
}: salesType) => {
  const { sliderProgress } = styles;
  
  const [colorsQuota, setColorsQuota] = useState(["#51e7fb", "#0185f2"]);
  const changeColors = () => {

    progressPercent >= 100 ? setColorsQuota(["#90E94B", "#5D9037"]) : setColorsQuota(["#51e7fb", "#0185f2"]);
  }

 useEffect(() => {
   changeColors()
  }, [progressPercent]);
  return (
    <Pressable
      style={[
        {
          ...styles.sliderView,
          width: `${widthCustom}`,
          height: `${heightCustom}`,
        },
        styles.shadowSliderView,
      ]}
      onPress={onPressHandle}
      onPressIn={onPressInHandle}
      onPressOut={onPressOutHandle}
      onLongPress={onLongPressHandle}
    >
      <LinearGradient
        style={{ ...sliderProgress, width: `${width}`, height: `${height}` }} //destructuracion para hacer dinamico el slider
        colors={[colorsQuota[0], colorsQuota[1]]}
        end={{ x: 1, y: 1.2 }}
        start={{ x: 1, y: 0.1 }}
        locations={[0.1, 0.9]}
      >
        {children}
      </LinearGradient>
    </Pressable>
  );
};
const styles = StyleSheet.create({
  sliderProgress: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    height: "98%",
    margin: 1,
    borderRadius: width * 0.28,
  },
  sliderView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#036481",
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

export default SliderCircle;
