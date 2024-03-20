import { useEffect, useState } from 'react'
import { useUserDataContext } from '../UserDataProvider'
import type { IQuota, QuotaStateType } from '../../typings'
import { fetchQuotaInformation } from '../../service/quota'
import { endpoint } from '../../service/endpoints'

export function useGetQuotaInformation<DataType = IQuota>(
  typeInformation: string
): QuotaStateType<DataType> {
  const { user } = useUserDataContext()

  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [data, setData] = useState<DataType | null>(null)

  // agregar un handler para refrescar el token

  const getQuotaInfoHandler = async () => {
    if (!user.data) return

    if (new Date().getTime() > user.data.expires) {
      return
    }

    const url = endpoint().quota.getQuotaInformation(typeInformation)
    setLoading(true)

    const quotaInfoResolve = await fetchQuotaInformation<DataType>({
      token: user.data.access_token,
      url,
    })

    if (quotaInfoResolve.resolveType === 'withError') {
      setError(true)
      return
    }

    setData(quotaInfoResolve.data)
  }

  useEffect(() => {
    getQuotaInfoHandler()
  }, [user.data])

  return {
    loading,
    error,
    data,
    update: getQuotaInfoHandler,
  }
}
