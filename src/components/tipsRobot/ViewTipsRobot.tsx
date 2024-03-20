import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'
import { useQuotaContext } from '../../contexts'
const { width, height } = Dimensions.get('window')

const ViewTipsRobot = ({ message }: { message?: string }) => {
  const { dataTipRobot } = useQuotaContext()

  // Use the passed-in message if available, otherwise default to dataTipRobot
  const displayMessage = message || dataTipRobot

  return (
    <View style={styles.tipsView}>
      <Text style={styles.textTip}>{displayMessage}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tipsView: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%',
    height: 'auto',
    borderRadius: width * 0.0833,
    marginTop: '7%',
    marginLeft: '6%',
    marginRight: '6%',

    backgroundColor: '#fff',
  },
  textTip: {
    margin: '10%',
    textAlign: 'justify',
    fontSize: height * 0.017,
    color: '#0185f2',
  },
})

export default ViewTipsRobot
