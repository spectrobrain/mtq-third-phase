import React from 'react'
import { View, Text, StyleSheet,Dimensions, ScrollView } from 'react-native'
import { useFonts } from "expo-font";



const { width, height } = Dimensions.get('window');
const WellcomeMessage = ({message}:any) => {
  const [fontsLoaded] = useFonts({
    'Roboto': require("../../../assets/fonts/Roboto-Light.ttf"),
  });
  
  if (!fontsLoaded) {
    return null;
  }
  
    const {
        containerMessageGlobal,
        containerMessage,
        textMessage
      } = styles
  return (
    
        <View style={containerMessageGlobal}>
          <View style={containerMessage}>
          <ScrollView
         overScrollMode='always'
         style={styles.contentContainer}
         scrollEnabled={true}
         showsVerticalScrollIndicator={true}
         >
            <Text style={textMessage}>
              {message}
            </Text>
            </ScrollView>
          </View>
         
        </View>
  
  )
}

const styles = StyleSheet.create({
   
    containerMessageGlobal: {
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "wrap",
      flexDirection: "row",
      height: "35%",
    },
    containerMessage: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      borderRadius: width * 0.0233,
      backgroundColor: "#fff",
      width: "63%",
      height: "auto",
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
      alignItems: "center",
      justifyContent: "flex-start",
    },
    containerGift: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "34%",
      width: "50%",
      height: "21.5%",
    },
    contentContainer: {
      display: "flex",
      borderRadius: width * 0.0233,  
      marginBottom: '10%'
      // width: "100%",
      // height: "50%",  
    },
    textMessage: {
      marginTop: "10%",
      marginLeft: "10%",
      marginRight: "10%",
      marginBottom: "30%",
      fontSize: height * 0.0170,
      fontFamily:'Roboto'
    },
  })
export default WellcomeMessage