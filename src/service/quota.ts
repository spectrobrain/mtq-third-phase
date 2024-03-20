import { AskQuestionResponse, IQuota, ResolveType } from '../typings'

type FetchQuotaParams = {
  url: string
  token: string
}

export function fetchQuotaInformation<QuotaInfoType = IQuota>({
  token,
  url,
}: FetchQuotaParams): Promise<ResolveType<QuotaInfoType>> {
  const myHeaders = new Headers()
  myHeaders.append('Authorization', `Bearer ${token}`)

  const requestOptions: RequestInit = {
    method: 'GET',
    headers: myHeaders,
  }

  return new Promise((resolve) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as QuotaInfoType

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => {
        resolve({ resolveType: 'withError', error })
      })
  })
}

type AskQuestionParams = {
  url: string
  question: string
}

export function fetchToAskQuestion({
  question,
  url,
}: AskQuestionParams): Promise<ResolveType<AskQuestionResponse>> {
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const requestOptions: RequestInit = {
    headers: myHeaders,
    method: 'POST',
    body: JSON.stringify({ text: question }),
    redirect: 'follow',
  }

  return new Promise((resolve) => {
    fetch(url, requestOptions)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: {},
          })
        }

        const data = (await response.json()) as any

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => {
        resolve({ resolveType: 'withError', error })
      })
  })
}
