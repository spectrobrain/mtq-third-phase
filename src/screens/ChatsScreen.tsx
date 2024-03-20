import React, { useEffect, useState } from 'react'
import { ListOfChats } from '../components/chat'

import {
  ChatsProvider,
  useUserDataContext,
  useModalContext,
 
} from '../contexts'
import ModalTutorial from '../components/modal/ModalTutorial'

export const ChatsScreen = () => {
  const { user } = useUserDataContext()
  const { modal,handleOpenModal,handleCloseModal } = useModalContext()

  const uservalidate = true
  
  useEffect(() => {
    if (uservalidate) {
      handleOpenModal('ChatsScreen')
    }
  }, [])
  
  return (
    <ChatsProvider>
        {modal !== 'close' ? <ModalTutorial
          isVisible={true}
          requestClose={() => handleCloseModal()}
        /> : null}
        <ListOfChats />  
    </ChatsProvider>
  )
}
