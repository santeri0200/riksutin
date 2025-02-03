import * as dotenv from 'dotenv'

import { inProduction } from '@config'

dotenv.config()

export const PORT = process.env.PORT || 8000

export const { API_TOKEN, OPENAI_API_KEY } = process.env

export const SESSION_SECRET = process.env.SESSION_SECRET || ''

export const DATABASE_URL =
  process.env.DATABASE_URL ?? 'postgres://postgres:@localhost/riksutin'

export const REDIS_HOST = process.env.REDIS_HOST || 'redis'

export const JAMI_URL = inProduction
  ? 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/jami/'
  : 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/jami'

export const PATE_URL = inProduction
  ? 'https://api-toska.apps.ocp-prod-0.k8s.it.helsinki.fi/pate/'
  : 'https://api-toska.apps.ocp-test-0.k8s.it.helsinki.fi/pate/'

export const OIDC_ISSUER = inProduction
  ? 'https://login.helsinki.fi/.well-known/openid-configuration'
  : 'https://login-test.it.helsinki.fi/.well-known/openid-configuration'

export const OIDC_CLIENT_ID = process.env.OIDC_CLIENT_ID || ''

export const OIDC_CLIENT_SECRET = process.env.OIDC_CLIENT_SECRET || ''

export const OIDC_REDIRECT_URI = process.env.OIDC_REDIRECT_URI || ''
