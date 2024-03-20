import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { useFonts } from "expo-font";
import usePastMonth from "../../hooks/usePastMonth";
import CardMedall from "./CardMedall";
import { generatorKey } from "../../utils/helper";
const { width, height } = Dimensions.get("window");

const MedallsView = () => {
  const { medallsView } = styles;
  

  const { salesMonthSort } = usePastMonth();
  const [fontsLoaded] = useFonts({
    Roboto: require("../../../assets/fonts/Roboto-Light.ttf"),
  });
  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <View style={medallsView}>
      {salesMonthSort?.map((item, index) => (
        <CardMedall key={`${index + 1}-${generatorKey}`} prom={item.prom} />
      ))}
      <CardMedall />
    </View>
  );
};

const styles = StyleSheet.create({
  medallsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",

    justifyContent: "flex-start",
    width: "73%",
    height: "50%",
    borderRadius: width * 0.0277,
    marginTop: "3%",
  },
});

export default MedallsView;
