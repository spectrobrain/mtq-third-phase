import { useState } from 'react'

export interface UseToastType {
  toast: currentToastType

  handleOpenToast: (name: currentToastType) => void

  handleCloseToast: () => void
}

export type currentToastType =
  | 'sucess'
  | 'info'
  | 'warrning'
  | 'error'
  | 'close'

export const useToast = (): UseToastType => {
  const [toast, setToast] = useState<currentToastType>('close')
  const handleOpenToast = (toast: currentToastType) => setToast(toast)
  const handleCloseToast = () => setToast('close')

  return {
    toast,
    handleOpenToast,
    handleCloseToast,
  }
}
