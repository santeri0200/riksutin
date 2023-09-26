import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

import { CountryData } from '../types'

const useCountry = (code: string) => {
  const queryKey = ['country', code]

  const query = async (): Promise<CountryData> => {
    const { data } = await apiClient.get(`/countries/${code}`)

    return data
  }

  const { data: country, ...rest } = useQuery(queryKey, query)

  return { country, ...rest }
}

export default useCountry
