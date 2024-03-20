import React from 'react'
import { ActivityIndicator, StyleSheet, View,Image } from 'react-native';

type loaderPropsType = {
  widthRobot?:string;
  heightRobot?:string;
}

export const Loader = ({widthRobot='15%',heightRobot='10%'}:loaderPropsType)  => {
  return (
    <View style={styles.loaderContainer}>
      <ActivityIndicator size='large'/>
      <Image  style={{...styles.imageGifRobot,width:widthRobot,height:heightRobot}} 
      source={require('../../../assets/images/MASCOT.gif')}/>
    </View>
  )
}
const styles = StyleSheet.create({
  loaderContainer:{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap:5,
    width:'100%',
    height:'100%',
  },
  imageGifRobot: {
   
  },
})

export default Loader;