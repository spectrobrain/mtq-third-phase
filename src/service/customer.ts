import type { ResolveType } from '../typings'
import { CustomersHistoryResponseType } from '../typings'
import { endpoint } from './endpoints'

type CustomerHistoryType = (
  apiToken: string
) => Promise<ResolveType<CustomersHistoryResponseType>>

export const fetchCustomerHistory: CustomerHistoryType = apiToken => {
  const url = endpoint().quota.getCustomerHistory()

  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${apiToken}`)
  myHeaders.append('Content-Type', 'application/json')
  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow',
  }

  return new Promise(resolve => {
    fetch(url, requestOptions)
      .then(async response => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as CustomersHistoryResponseType

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch(error => resolve({ resolveType: 'withError', error: {} }))
  })
}
