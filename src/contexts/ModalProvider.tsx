import React,{FC, PropsWithChildren,createContext, useContext} from 'react'
import  {useModal, UseModalType} from '../hooks'

interface IModalContext extends UseModalType {}

const ModalContext = createContext({} as IModalContext)

export const useModalContext = () => useContext(ModalContext)

export const ModalProvider: FC<PropsWithChildren> = ({children}) => {

  const { Provider} = ModalContext
  const context = useModal()
  return (
    <Provider value={context}>
    {children} 
    </Provider>
  )
}