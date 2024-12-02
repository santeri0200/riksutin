import axios from 'axios'

import { PUBLIC_URL } from '@client/config'

const baseURL = `${PUBLIC_URL}/api`

const apiClient = axios.create({ baseURL })

export default apiClient
