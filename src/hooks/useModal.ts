import { View, Text } from 'react-native'
import { useState } from 'react'

export interface UseModalType {
  modal: currentModalType
  toast: currentToastType
  handleOpenModal: (name: currentModalType) => void
  handleOpenToast: (name: currentToastType) => void
  handleCloseModal: () => void
  handleCloseToast: () => void
  
}

export type currentModalType =
  | 'ChatsScreen'
  | 'ScreenCharts'
  | 'SearchAnswerScreen'
  | 'CustomersHistoryScreen'
  | 'close'
export type currentToastType =
  | 'sucess'
  | 'info'
  | 'warrning'
  | 'error'
  | 'close'

export const useModal = (): UseModalType => {
  const [modal, setModal] = useState<currentModalType>('close')
  const handleOpenModal = (modal: currentModalType) => setModal(modal)
  const handleCloseModal = () => setModal('close')
  const [toast, setToast] = useState<currentToastType>('close')
  const handleOpenToast = (toast: currentToastType) => setToast(toast)
  const handleCloseToast = () => setToast('close')
 
  return {
    modal,
    toast,
    handleOpenModal,
    handleCloseModal,
    handleOpenToast,
    handleCloseToast,
  }
}

export default useModal
