import React, {ReactNode, useState} from 'react';
import { Modal, StyleSheet, Text, Pressable, View, SafeAreaView, } from 'react-native';
import {useModalContext} from '../../contexts'
import ModalTutorial from './ModalTutorial';
import ModalToast from './ModalToast';
import MessageToast from './MessageToast';

interface IModalProps {
  animation:'slide'|'fade'|'none';
  isTransparent:boolean;
  isVisible?: boolean;

  requestClose: () => void;
}
const ModalComponent = () => {
  
  const { modal } = useModalContext() ?? {};
  
  return (
    <>
    {/* { modal === 'tutorial' ? <ModalTutorial/> : <MessageToast textModal={'hola'}/> };  */}
   {/* <ModalTutorial/> */}
    
    </>
  );
};

const styles = StyleSheet.create({

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)'
  },
});

export default ModalComponent;