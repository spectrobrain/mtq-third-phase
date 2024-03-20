
import React,{FC, PropsWithChildren,createContext, useContext} from 'react'
import { useToast,UseToastType } from './../hooks/useToast';

interface IToastContext extends UseToastType {}

const ToastContext = createContext({} as IToastContext)

export const useToastContext = () => useContext(ToastContext)

export const ToastProvider: FC<PropsWithChildren> = ({children}) => {

  const { Provider} = ToastContext
  const context = useToast()
  return (
    <Provider value={context}>
    {children} 
    </Provider>
  )
}