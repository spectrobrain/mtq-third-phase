import React, { useEffect } from 'react'
import {
  CustomerNav,
  CustomersHistoryHeader,
  CustomsHistoryList,
} from '../components/customerHistory'
import { CustomersHistoryProvider,useModalContext } from '../contexts'
import ModalTutorial from '../components/modal/ModalTutorial'

export const CustomersHistoryScreen = () => {
  const { modal,handleOpenModal,handleCloseModal } = useModalContext() ?? {}

  const uservalidate = true
  useEffect(() => {
    if (uservalidate) {
      handleOpenModal('CustomersHistoryScreen')
    }
  }, [])
  return (
    <CustomersHistoryProvider>
      {modal !== 'close' ? (
        <ModalTutorial
          isVisible={true}
          requestClose={() => handleCloseModal()}
        />
      ) : null}
      <CustomersHistoryHeader />
      <CustomerNav />
      <CustomsHistoryList />
    </CustomersHistoryProvider>
  )
}
