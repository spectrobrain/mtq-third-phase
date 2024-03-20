import { useQuotaContext } from '../contexts'
import { salesMonthType } from '../typings/types'
import { getAverange, monthsData, orderByItem } from '../utils/helper'

const usePastMonth = () => {
  const { dataSummary, summary } = useQuotaContext() ?? {}
  const { data } = summary

  const salesMonthMap = data?.map((item) => item?.sales)
  const quotaMonthMap = data?.map((item) => item?.quota)
  const salesReduce =
    salesMonthMap?.reduce((accum, currentValue) => accum + currentValue, 0) || 0
  const quotaReduce =
    quotaMonthMap?.reduce((accum, currentValue) => accum + currentValue, 0) || 0

  let promYear = ((salesReduce / quotaReduce) * 100)?.toFixed(2)

  const salesMonthMapProm: salesMonthType[] = dataSummary?.map((item) => {
    return {
      month: monthsData[parseInt(item?.endDate) - 1],
      prom: getAverange(item?.sales, item?.quota),
      id_: parseInt(item?.endDate),
    }
  })

  const salesMonthSort: salesMonthType[] = orderByItem(salesMonthMapProm)

  const monthslice = salesMonthSort?.slice(
    salesMonthSort.length - 3,
    salesMonthSort.length
  )

  return { promYear, salesMonthSort, monthslice }
}

export default usePastMonth
