import React, {ReactNode, useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, } from 'react-native';
import MessageToast from './MessageToast';


interface IModalProps {
  isVisible?: boolean;
  requestClose: () => void;
}
const ModalMessage = ({ isVisible, requestClose}: IModalProps) => {
  
  
  return (
    
    
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={isVisible}
        onRequestClose={requestClose}
      
        >
        <View style={styles.centeredView}>
          <MessageToast/>
        </View>
      </Modal>
   
   
  );
};

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.3)'
  },
});

export default ModalMessage;