import * as dotenv from 'dotenv'

export * from '../../config'

dotenv.config()

export const SERVER_PORT = process.env.PORT || 8000

export const { API_TOKEN, OPENAI_API_KEY } = process.env
export const SESSION_SECRET = process.env.SESSION_SECRET || ''

export const DATABASE_URL = process.env.DATABASE_URL || ''
export const REDIS_HOST = process.env.REDIS_HOST || 'redis'

export const OIDC_CLIENT_ID = process.env.OIDC_CLIENT_ID || ''
export const OIDC_CLIENT_SECRET = process.env.OIDC_CLIENT_SECRET || ''
export const OIDC_REDIRECT_URI = process.env.OIDC_REDIRECT_URI || ''
