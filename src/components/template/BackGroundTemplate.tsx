import {
  View,
  StyleSheet,
  Dimensions,
} from "react-native";
import React, { ReactNode } from "react";
import { colors } from '../../designSystem/definitions'
import { horizontalScale,moderateScale,verticalScale} from '../../utils/metrics'

type BackGrounTemplateProps = {
  children: ReactNode;
  justify?: 'center' | 'flex-end' | 'flex-start' | 'space-around' | 'space-between' | 'space-evenly';
  aling?: 'center' | 'flex-end' | 'flex-start' | 'baseline' | 'stretch' ;
};

const { width, height } = Dimensions.get("window");

export const BackGroundTemplate = ({ children,justify,aling }: BackGrounTemplateProps) => {
  return (
    <View style={{...styles.container,alignItems:aling,justifyContent:justify}}>
        {children}   
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: horizontalScale(360),
    height: verticalScale(845),
     alignItems: 'center',
    backgroundColor: colors.primary.base
  },
  });
export default BackGroundTemplate;
