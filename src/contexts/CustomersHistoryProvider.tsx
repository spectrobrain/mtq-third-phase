import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import type { FC, PropsWithChildren } from 'react'
import { ICustomer } from '../typings'
import { fetchCustomerHistory } from '../service'
import { useUserDataContext } from './UserDataProvider'

type PossibleState = 'loading' | 'updated' | 'error' | 'initial'

export interface CustomersHistoryContextType {
  currentCustomersHistory: ICustomer[]
  state: PossibleState
  next: () => void
  prev: () => void
  totalPages: number
  currentPage: number
}

const CustomersHistoryContext = createContext({} as CustomersHistoryContextType)

const ITEMS_PER_PAGES = 10

export const useCustomersHistoryContext = () =>
  useContext(CustomersHistoryContext)

export const CustomersHistoryProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const { Provider } = CustomersHistoryContext
  const { user } = useUserDataContext()

  const [currentCustomersHistory, setCurrentCustomersHistory] = useState<
    ICustomer[]
  >([])
  const [state, setState] = useState<PossibleState>('initial')
  const [currentPage, setCurrentPage] = useState(0)

  const totalPages = useRef(0)
  const pages = useRef<{ [key: number]: ICustomer[] }>({})

  const next = () => {
    if (currentPage === totalPages.current) return
    setCurrentPage(curr => curr + 1)
  }

  const prev = () => {
    if (currentPage === 1) return
    setCurrentPage(curr => curr - 1)
  }

  useEffect(() => {
    if (!user.data) return

    setState('loading')
    fetchCustomerHistory(user.data.access_token)
      .then(resolveData => {
        if (resolveData.resolveType === 'withError') {
          setState('error')
          return
        }

        const { items } = resolveData.data

        const calculatedTotalPages = Math.ceil(items.length / ITEMS_PER_PAGES)
        for (let i = 0; i < calculatedTotalPages; i++) {
          const currentIndex = i * ITEMS_PER_PAGES
          pages.current[i + 1] = items.slice(
            currentIndex,
            currentIndex + ITEMS_PER_PAGES
          )
        }

        setCurrentPage(1)
        totalPages.current = calculatedTotalPages
        setState('updated')
      })
      .finally(() => {})
  }, [user.data])

  useEffect(() => {
    const currentHistoryData = pages.current[currentPage]

    if (!currentHistoryData) return

    setCurrentCustomersHistory(currentHistoryData)
  }, [currentPage])

  const context: CustomersHistoryContextType = {
    currentCustomersHistory,
    currentPage,
    state,
    totalPages: totalPages.current,
    next,
    prev,
  }

  return <Provider value={context}>{children}</Provider>
}
