import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { chartViewType } from "../../../typings/types";

const { width, height } = Dimensions.get("window");

import SliderHorizontal from "./SliderHorizontal";


export const ChartView = ({dataView}: chartViewType) => {
 const { title, description, averangetext, sales} = dataView;

  return (
    <View style={styles.chartView}>
      <View style={styles.textViewTop}>
        <Text style={styles.leftText}>{title}</Text>
        <Text style={styles.rightText}>{`${averangetext}%`}</Text>
      </View>
      <View style={[styles.sliderView,styles.shadowSliderView]}>
        <SliderHorizontal  sales = {sales}/>
      </View>
      <View style={styles.textViewTop}>
        <Text style={styles.rightTextBotton}>{description}</Text>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  chartView: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "15%",
    borderRadius: width * 0.0277,
    marginTop: '3%',

    backgroundColor: "#fff",
  },
  sliderView: {
    flexDirection: "column",
    width: "90%",
    height: "25%",
    borderRadius: height * 0.0284,
    backgroundColor: "#036481",
  },
 
  textViewTop: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: width * 0.0555,
    paddingLeft: width * 0.0555,
    fontSize:'Roboto'
  },
  leftText: {
    flex: 1,
    textAlign: "left",
    fontSize: height *0.0170,
    fontFamily:'Roboto'
  },
  rightText: {
    flex: 1,
    textAlign: "right",
    fontSize: height *0.0170,
    fontFamily:'Roboto'
  },
  rightTextBotton: {
    flex: 1,
    textAlign: "right",
    fontSize: height *0.0170,
    color:'#0185f2',
    fontFamily:'Roboto'
  },
  shadowSliderView: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity:1,
    shadowRadius: 5,
    elevation:15,
      
  },
});

export default ChartView;