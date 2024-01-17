import { useQuery } from 'react-query'

import apiClient from '../util/apiClient'

const useOrganisations = (organisation: string | undefined) => {
  const queryKey = ['organisation', organisation]

  const query = async (): Promise<string[]> => {
    const { data } = await apiClient.get(`/organizations/${organisation}`)

    return data
  }

  const { data: organisations, ...rest } = useQuery(queryKey, query, {
    enabled: Boolean(organisation),
  })

  return { organisations, ...rest }
}

export default useOrganisations
