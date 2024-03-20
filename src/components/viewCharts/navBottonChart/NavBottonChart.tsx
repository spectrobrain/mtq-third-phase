import { View, StyleSheet, Image } from "react-native";
import React from "react";
import { StackScreenProps } from "@react-navigation/stack";
import ButtonNav from "./ButtonNav";
import  SliderCircle from "./SliderCircle";

interface Props extends StackScreenProps<any, any> {}
const NavBottonChartFeature = (props: Props) => {
 

  const { viewGraph, imageGraphChart,imageGraph,viewGiftLogo,imageGifRobot } = styles;
  

  return (
    <View style={styles.chartView}>
        <SliderCircle
      width="93%"
      height="93%"
      colorGradient={["#51e7fb", "#0185f2"]}
      >
      <ButtonNav
        props={props}
        nameScreen={"ScreenMedalls"}
        nameStyleImage={imageGraph}
        nameStylePressable={viewGraph}
        routeImage={require("../../../../assets/images/icon2.png")}
      />
    </SliderCircle>
      <Image
        source={require("../../../../assets/images/logo.png")}
        style={styles.imageLogo}
      ></Image>
        <SliderCircle
      width="93%"
      height="93%"
      colorGradient={["#51e7fb", "#0185f2"]}
      >
      <ButtonNav
        props={props}
        nameScreen={"ScreenTipsRobots"}
        nameStyleImage={imageGifRobot}
        nameStylePressable={viewGiftLogo}
        routeImage={require("../../../../assets/images/MASCOT.gif")}
      />
      </SliderCircle>
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: "90%",
    height: "12%",
    borderColor:'white',
    borderWidth: 1,
    borderRadius:50,
    marginTop: "2.5%",
   
  },
  viewGraph: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    width: "90%",
    height: "90%",
   
   
    
  },
  imageLogo: {
   
    display: "flex",
   
    width: "40%",
    height: "80%",
  },
  imageGraph: {
    
    marginTop: 0,
    marginLeft: 0,
    width: "75%",
    height: "70%",
  },
  imageGraphChart: {
    marginTop: 0,
    marginLeft: 0,
    width: "48%",
    height: "45%",
  },
  viewGiftLogo: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    
    width: "90%",
    height: "90%",
  },
  imageGifRobot: {
    width: "70%",
    height: "80%",
  },

  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 15,
  },
});

export default NavBottonChartFeature;
