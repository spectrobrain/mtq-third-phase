import React from "react";
import {  Dimensions, StyleSheet, Text, View } from "react-native";
import usePastMonth from "../../../hooks/usePastMonth";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
  hightHorizontalScale,
  hightVerticalScale,
  lowVerticalScale,
  lowHorizontalScale
} from '../../../utils/metrics'
import { generatorKey } from "../../../utils/helper";
import ViewSliderVertical from "./ViewSliderVertical";
import { Loader } from '../../loader/Loader';
import { useQuotaContext } from "../../../contexts";
import { text } from "../../../designSystem/styles";

const { width, height } = Dimensions.get("window")
export const ChartViewVertival = () => {
  const { loading } = useQuotaContext() ?? {}
  const { promYear,monthslice} = usePastMonth() 
  const {
    chartView,
    chartSlideMonths,
    viewTextPast,
    textAcomplishment,
    textPastMonth,
  } = styles;

  return (
    <View style={[chartView]}>
      <View style={viewTextPast}>
      <Text style={[textPastMonth,text.sm]}>Past month Sales</Text>
        <Text style={[textAcomplishment,text.xs]}>{promYear}%  </Text>
        <Text style={[textAcomplishment,text.xs]}>Average</Text>
        <Text style={[textAcomplishment,text.xs]}>Acomplishment</Text>
      </View>
      <View style={chartSlideMonths}>
       { loading ? <Loader heightRobot="25%" widthRobot="25%"/> : monthslice?.map(({month,prom},index)=><ViewSliderVertical key={`${index + 1}-${generatorKey}`} prom = {prom} month ={month} />) }
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  chartView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    alignContent: "flex-end",
    width: hightHorizontalScale(310),
    height:hightVerticalScale(160),
    borderRadius: moderateScale(12),
    marginTop: hightVerticalScale(10),
    backgroundColor:  "rgba(255,255,255,0.2)"
  },
  viewTextPast: {
    justifyContent: "center",
    alignItems: "flex-start",
    width: hightHorizontalScale(150),
    height: hightVerticalScale(160),
  },
  chartSlideMonths: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: hightHorizontalScale(160),
    height: hightVerticalScale(180),
    
  },
  textPastMonth: {
    color:'#09D7D7',
    width: "50%",
    height: "50%",
    marginLeft: hightVerticalScale(14),
    fontFamily: 'Roboto'
  },
  textAcomplishment: {
    color: "#D4DCDD",
    marginLeft: hightVerticalScale(14),
  },
});

