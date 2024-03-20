import {
  ChatborUserType as ChatbotUserType,
  QuotaUserType,
  ResolveType,
  UserDataType,
} from '../typings'
import { endpoint } from './endpoints'

type LoginParams = {
  username: string
  password: string
  encryptedPassword: string
  email: string
}

type LoginFunctionType<LoginData = any> = (
  params: LoginParams
) => Promise<ResolveType<LoginData>>

type LoginQuotaType = LoginFunctionType<QuotaUserType>
type LoginChatbotType = LoginFunctionType<ChatbotUserType>
type LoginType = LoginFunctionType<UserDataType>

export const loginInQuotaService: LoginQuotaType = ({
  username,
  encryptedPassword,
}) => {
  const url = endpoint().quota.login()
  const config: RequestInit = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      username,
      password: encryptedPassword,
    }),
  }

  return new Promise((resolve) => {
    fetch(url, config)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: { ...response },
          })
        }

        const data = (await response.json()) as QuotaUserType

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => resolve({ resolveType: 'withError', error }))
  })
}

export const loginInChatbotService: LoginChatbotType = ({
  email,
  password,
}) => {
  const url = endpoint().chat.login()
  const myHeaders = new Headers()
  myHeaders.append('Content-Type', 'application/json')

  const config: RequestInit = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify({ email, password }),
  }

  return new Promise((resolve) => {
    fetch(url, config)
      .then(async (response) => {
        if (!response.ok) {
          return resolve({
            resolveType: 'withError',
            error: { ...response },
          })
        }

        const data = (await response.json()) as ChatbotUserType

        return resolve({ resolveType: 'withoutError', data })
      })
      .catch((error) => resolve({ resolveType: 'withError', error }))
  })
}

export const login: LoginType = (params) => {
  return new Promise(async (resolve) => {
    Promise.all([loginInChatbotService(params), loginInQuotaService(params)])
      .then((data) => {
        let userData = {} as UserDataType

        for (const response of data) {
          if (response.resolveType === 'withError') {
            return resolve({
              resolveType: 'withError',
              error: {},
            })
          }

          userData = {
            ...userData,
            ...response.data,
          }
        }

        resolve({ resolveType: 'withoutError', data: userData })
      })
      .catch((error) => resolve({ resolveType: 'withError', error }))
  })
}
