import { IQuota } from '../typings/types'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { BASE_URL } from '@env'
import { endpoint } from './endpoints'

const fetchWithToken = async (url: string) => {
  try {
    // Check token expiry time
    const expiry = await AsyncStorage.getItem('tokenExpiry')
    if (expiry && new Date().getTime() > Number(expiry)) {
      // TODO: refresh the token, or log the user out
    } else {
      const token = await AsyncStorage.getItem('userToken')
      const res = await fetch(url, {
        headers: { Authorization: `Bearer ${token}` },
      })
      return await res.json()
    }
  } catch (error) {
    console.log(error)
    throw error
  }
}
const orderByDate = (jsonArray: IQuota[]) => {
  jsonArray.sort((a: IQuota, b: IQuota) => {
    const dateA: any = new Date(a.startDate.split('/').reverse().join('/'))
    const dateB: any = new Date(b.startDate.split('/').reverse().join('/'))
    return dateA - dateB
  })
  return jsonArray
}

export const getDataServiceDayli = async (userName: string) => {
  return await fetchWithToken(endpoint().quota.getQuotaInformation('daily'))
}

export const getDataServiceMonthly = async (userName: string) => {
  return await fetchWithToken(endpoint().quota.getQuotaInformation('monthly'))
}

export const getDataServiceYearly = async (userName: string) => {
  return await fetchWithToken(endpoint().quota.getQuotaInformation('yearly'))
}

export const getDataServiceSummary = async (userName: string) => {
  const data = await fetchWithToken(
    endpoint().quota.getQuotaInformation('summary')
  )
  // Check if data is array and not null before using orderByDate
  if (Array.isArray(data)) {
    return orderByDate(data)
  } else {
    return data // or return some other default value or error
  }
}

export const logout = async () => {
  try {
    await AsyncStorage.removeItem('userToken')
    await AsyncStorage.removeItem('tokenExpiry')
  } catch (e) {
    console.log(e)
  }
}
