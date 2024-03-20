import React from 'react'
import {View, Text, StyleSheet } from 'react-native'
import {Ionicons}  from '@expo/vector-icons'
import { text } from '../../designSystem/styles'

type messageModalProps = {
  textModal: string
}

const MessageToast = ({ textModal }: messageModalProps) => {
  return (
    <View style={styles.modalView}>
     <Ionicons name="checkmark-circle-outline" size = {30} color={'green'}/>
      <Text style={[styles.modalText,text.md]}>copied succefull</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    display:'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'green',
    borderWidth:1,
    width: '80%',
    height: '8%',
    backgroundColor: 'rgba(255,255,255,0.9)',
  },
  textStyle: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    color: 'green',
    textAlign: 'center',
  },
})

export default MessageToast
