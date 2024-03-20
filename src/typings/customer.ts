export interface ICustomer {
  idItem:number,
  altname: string
  companyname: string
  email: string
  phone: string
  salesrep_firstname: string
  salesrep_lastname: string
  last_transaction_date: string
}

export type CustomersHistoryResponseType = {
  count: number
  items: ICustomer[]
}
