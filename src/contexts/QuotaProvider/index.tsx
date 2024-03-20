import type { FC, PropsWithChildren } from 'react'
import React, { createContext, useContext, useEffect, useState } from 'react'
import {
  getDataServiceDayli,
  getDataServiceMonthly,
  getDataServiceSummary,
  getDataServiceYearly,
} from '../../service/serviceFetch'
import { IQuota, QuotaStateType } from '../../typings'
import { useUserDataContext } from '../UserDataProvider'
import { useGetQuotaInformation } from './useGetQuotaInformation'

interface IQuotaContext {
  dataTipRobot: string
  dataSummary: IQuota[]
  dataQuotas: IQuota[]
  loading: boolean

  daily: QuotaStateType
  monthly: QuotaStateType
  weekly: QuotaStateType
  yearly: QuotaStateType
  summary: QuotaStateType<IQuota[]>
}

const QuotaContext = createContext<IQuotaContext>({} as IQuotaContext)

export const useQuotaContext = () => useContext(QuotaContext)

export const QuotaProvider: FC<PropsWithChildren> = ({ children }) => {
  const { Provider } = QuotaContext
  const { user } = useUserDataContext()

  const [dataTipRobot, setDataTipRobot] = useState('')
  const [dataQuotas, setDataQuotas] = useState<IQuota[]>([])
  const [dataSummary, setDataSummary] = useState<IQuota[]>([])
  const [loading, setLoading] = useState(false)
 
  const daily = useGetQuotaInformation('daily')
  const monthly = useGetQuotaInformation('monthly')
  const yearly = useGetQuotaInformation('yearly')
  const weekly = useGetQuotaInformation('weekly')
  const summary = useGetQuotaInformation<IQuota[]>('summary')
  
  
  const getDataProvider = async (userName: string) => {
    
    setLoading(true)

    const dayliData = await getDataServiceDayli(userName)
    const monthlyData = await getDataServiceMonthly(userName)
    const yearlyData = await getDataServiceYearly(userName)
    const summaryData = await getDataServiceSummary(userName)

    setLoading(false)

    setDataQuotas([
      { ...dayliData, title: 'Daily', description: 'USD $', type: true },
      {
        ...monthlyData,
        title: 'Monthly',
        description: 'Days to monthly cut',
        type: false,
      },
      { ...yearlyData, title: 'Yearly' },
    ])
    setDataSummary(summaryData)
    setDataTipRobot(dayliData?.message)
  }

  useEffect(() => {
    if (user.data) {
      getDataProvider(user.data.username)
    }
  }, [user])

  const context: IQuotaContext = {
    dataQuotas,
    dataSummary,
    dataTipRobot,
    loading,
    daily,
    weekly,
    monthly,
    summary,
    yearly,
  }

  return <Provider value={context}>{children}</Provider>
}
