import * as React from 'react';
import { StyleSheet, Text,Dimensions } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import {BackGroundTemplate, BannerCharts, MedallsView} from '../components';



const { width, height } = Dimensions.get('window');

interface Props extends StackScreenProps<any,any>{} 
export const ScreenMedalls= (props: Props) => {
  const {textTitle,textDescription} = styles;
  
  return (
    
    <BackGroundTemplate>
    <BannerCharts  iconName="close-outline" navigateTo="ScreenTopNav" />
    <Text style={textTitle}>Awards</Text>
    <Text style={textDescription}>Get medals and trophies by meeting the objective for each month.</Text>
     <MedallsView/>
     </BackGroundTemplate>
  );
}

const styles = StyleSheet.create({
    
      textTitle: {
        display:'flex',
        width: '75%',
        height:'7%',
        marginTop: '9%',
        alignItems: 'flex-start',
        alignContent:'flex-start',
        color:'#51e7fb',
        fontSize: height * 0.028,
        
      },
      textDescription:{
        marginTop:'7%',
        marginBottom:'8%',
        textAlign:'justify',
        fontSize: height * 0.019,
        color:'white',
        width:'75%'
      }
      
}); 

export default ScreenMedalls;