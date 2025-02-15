import * as dotenv from 'dotenv'

export { OIDC_ISSUER, PATE_URL, JAMI_URL } from '@config'

dotenv.config({ path: '../../.env' })

export const PORT = process.env.PORT ?? 8000
export const REDIS_HOST = process.env.REDIS_HOST ?? 'redis'
export const DATABASE_URL = process.env.DATABASE_URL ?? 'postgres://postgres:postgres@db:5432/postgres'

export const API_TOKEN = process.env.API_TOKEN ?? ''
export const SESSION_SECRET = process.env.SESSION_SECRET ?? ''

export const OIDC_CLIENT_ID = process.env.OIDC_CLIENT_ID ?? ''
export const OIDC_CLIENT_SECRET = process.env.OIDC_CLIENT_SECRET ?? ''
export const OIDC_REDIRECT_URI = process.env.OIDC_REDIRECT_URI ?? ''
