import React, { FC, ReactNode, useEffect, useState } from "react";
import { StyleSheet, Dimensions, View, Pressable } from "react-native";

type salesType = {
  color:string;
  sales?: number;
  children: ReactNode;
  width?: string;
  height?: string;
  widthCustom?: string;
  heightCustom?: string;
  onPressHandle?: () => void;
  onPressInHandle?: () => void;
  onPressOutHandle?: () => void;
  onLongPressHandle?: () => void;
};

const { width, height } = Dimensions.get("window");
const ButtonCircle = ({
  color,
  children,
  width,
  height,
  widthCustom = "25%",
  heightCustom = "90%",
  onPressHandle,
  onPressInHandle,
  onPressOutHandle,
  onLongPressHandle
}: salesType) => {
  const { buttonChat } = styles;
  
  const [colorsQuota, setColorsQuota] = useState(color);

 

  return (
    <Pressable
      style={[
        {
          ...styles.sliderView,
          width: `${widthCustom}`,
          height: `${heightCustom}`,
          backgroundColor:  `${color}`
        },
        styles.shadowSliderView,
      ]}
      onPress={onPressHandle}
      onPressIn={onPressInHandle}
      onPressOut={onPressOutHandle}
      onLongPress={onLongPressHandle}
    >
        <View style={buttonChat }>
        {children}
        </View>
     
    </Pressable>
  );
};
const styles = StyleSheet.create({
  buttonChat: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "98%",
    height: "98%",
    margin: 1,
    borderRadius: width * 0.155,
  },
  sliderView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    backgroundColor: "#036481",
  },
  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 8,
  },
});

export default ButtonCircle;
