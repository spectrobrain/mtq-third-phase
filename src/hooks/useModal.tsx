import { useEffect, useState } from 'react'
import { useUserDataContext } from '../contexts'
import { StackScreenProps } from '@react-navigation/stack'

export interface UseModalType extends StackScreenProps<any, any> {
  modal: currentModalType
  handleOpenModal: (name: currentModalType) => void
  handleCloseModal: () => void
}

export type currentModalType =
  | 'ChatsScreen'
  | 'ScreenCharts'
  | 'SearchAnswerScreen'
  | 'CustomersHistoryScreen'
  | 'close'

export const useModal = (): UseModalType => {
  const { user } = useUserDataContext() ?? {}
  const [modal, setModal] = useState<currentModalType>('close')

  const handleOpenModal = (modal: currentModalType) => {
    setModal(modal)
  }
  const handleCloseModal = () => {
    setModal('close')
  }
  // useEffect(() => {

  // if(modal === 'close') { handleOpenModal('ChatsScreen')}

  // }, [])

  const handleIconCaretChevron = () => {
    if (modal === 'close') {
      user.set((currentUser) => {
        if (!currentUser) return null

        return {
          ...currentUser,
          showTutorial: false,
        }
      })
    }
  }

  return {
    modal,
    handleOpenModal,
    handleCloseModal,
  }
}

export default useModal
