import React, { useState } from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import {useModalContext} from '../../contexts'
import MessageTutorial from './MessageTutorial';


interface IModalProps {
  
  isVisible?: boolean;
  requestClose: () => void;
}
const ModalTutorial = ({ isVisible, requestClose}: IModalProps) => {
  const [isOpen,setIsOpen] = useState(false)
  const { modal,handleCloseModal } = useModalContext() ?? {};
  const handleOnClose = () => {
  handleCloseModal()
  requestClose()
  }

  return (
    
    
      <Modal
        animationType='fade'
        transparent={true}
        visible={isVisible}
        onRequestClose={requestClose}
      
        >
        <View style={styles.centeredView}>
          <MessageTutorial/>
        </View>
      </Modal>
   
   
  );
};

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.2)'
  },
});

export default ModalTutorial;