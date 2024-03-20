import { ReactNode } from 'react'

export type serviceFetchSummaryType = IServiceFetch[]

export interface IQuota {
  compilance: number
  endDate: string
  message: string
  quota: number
  sales: number
  startDate: string
  status: string
  resultCode?: string
  resultMsg?: string
}

export interface IServiceFetch {
  startDate: string
  endDate: string
  sales: number
  quota: number
  compilance: number
  status: string
  message: string
  children: ReactNode
}

export interface IQuotaProps {
  serviceFetch: IServiceFetch
  getDataProvider: (userName: any) => Promise<void>
  dataQuotas: IQuota[]
  dataSummary: IQuota[]
  dataTipRobot: string
}

export interface IViewChart {
  title: string
  description: string
  sales: number
  quota: number
  averangetext: string
}

export interface IViewChartOptions extends IViewChart {
  endDate: any
}

export type chartViewType = {
  dataView: IViewChartOptions
}

export type salesMonthType = {
  month?: string
  prom?: number
  id_?: number
}
export interface IPastMonths {
  promYear: string
  salesMonthSort: salesMonthType
  monthslice: IQuota[]
}
