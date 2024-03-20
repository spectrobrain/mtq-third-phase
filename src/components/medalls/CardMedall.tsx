import { StyleSheet, View, Image,Dimensions } from 'react-native'
import React,{ useState } from 'react'


const { width, height } = Dimensions.get('window');
const CardMedall = ({prom}:any) => {
    const {cardView,imageMedall} = styles;
    const [routeImageGold] = useState(require('../../../assets/images/medal1.png'))
    const [routeImageSilver] = useState(require('../../../assets/images/medal2.png'))
    
  return (
    <View style={cardView}>
      <Image
          style={imageMedall}
          source={prom >= 100 ? routeImageGold :routeImageSilver }
        />
    </View>
  )
}

export default CardMedall

const styles = StyleSheet.create({
    cardView: {
        flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "28%",
    height: "21%",
    marginTop:'2.5%',
    marginLeft:'1.7%',
    marginRight:'1.7%',
    marginBottom:'2.5%',
    borderRadius: width * 0.0277,
    borderColor : "#51e7fb",
    borderWidth: 1
    },
    imageMedall: {
      width: "99%",
      height: "99%",
    },
})