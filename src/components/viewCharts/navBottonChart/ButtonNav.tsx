import { Pressable,Image, StyleProp, ViewStyle, ImageStyle, ImageSourcePropType } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';

interface Props extends StackScreenProps<any, any> {}

type ButtonProps = {
  props: Props ;
  nameScreen?: string;
  nameStylePressable?: StyleProp<ViewStyle> 
  nameStyleImage?:StyleProp<ImageStyle> 
  routeImage:ImageSourcePropType
}
const ButtonNav = ({props,nameStyleImage,nameStylePressable,nameScreen,routeImage}: ButtonProps) => {
  const {navigation}=props
 
  const handleNavButtonNavigation = (nameScreen: string) => {
    navigation.navigate(`${nameScreen}`);
  };
  return (
    <Pressable
    style={nameStylePressable}
    onPress={() => handleNavButtonNavigation(`${nameScreen}`)}
  >
    <Image
      style={nameStyleImage}
      source={routeImage}
    />
  </Pressable>
  )
}

export default ButtonNav