import * as dotenv from 'dotenv'

import { inProduction } from '../../config'

dotenv.config()

export const PORT = process.env.PORT || 8000

export const { API_TOKEN, OPENAI_API_KEY } = process.env

export const DATABASE_URL = process.env.DATABASE_URL || ''

export const JAMI_URL = inProduction
  ? 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/jami/'
  : 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/jami'

export const PATE_URL = inProduction
  ? 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/pate/'
  : 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/pate/'

export const IMPORTER_URL = inProduction
  ? 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/importer/kliksutin'
  : 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/importer/kliksutin'
