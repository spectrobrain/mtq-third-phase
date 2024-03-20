import { useEffect, useState } from 'react'
import { useQuotaContext } from '../contexts'
import { IViewChart, IViewChartOptions } from '../typings/types'
import { getAverange, getCutMonth } from '../utils/helper'

export const UseQuotaChart = () => {
  const { dataQuotas } = useQuotaContext() ?? {}
  const [dataViewCharts, setDataViewCharts] = useState<IViewChartOptions[]>()

  useEffect(() => {
    const quotaArrayData: IViewChartOptions[] =
      dataQuotas?.map(
        ({ title, sales, quota, description, type, endDate }: any) => {
          const daysLeftInMonth = getCutMonth(endDate) // Calculate for each endDate
          return {
            endDate: daysLeftInMonth,
            title,
            description:
              description &&
              (type
                ? `${description} ${quota?.toFixed(0)} `
                : `${daysLeftInMonth} ${description}  `),
            sales: sales > quota ? 100 : getAverange(sales, quota),
            quota: quota?.toFixed(0),
            averangetext: getAverange(sales, quota)?.toFixed(1),
          }
        }
      ) ?? []

    setDataViewCharts(quotaArrayData)
  }, [])

  return { dataViewCharts }
}
