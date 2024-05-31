import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

import { Country } from '../types'

const useCountries = () => {
  const queryKey = 'countries'

  const query = async (): Promise<Country[]> => {
    const { data } = await apiClient.get('/countries')

    return data
  }

  const { data: countries, ...rest } = useQuery(queryKey, query)

  return { countries, ...rest }
}

export const useHighRiskCountries = () => {
  const queryKey = 'highRiskCountries'

  const query = async (): Promise<Country[]> => {
    const { data } = await apiClient.get('/countries/highrisk')

    return data
  }

  const { data: countries, ...rest } = useQuery(queryKey, query)

  return { countries, ...rest }
}

export default useCountries
