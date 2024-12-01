import prefs from '../prefs.json' assert { type: 'json' }

// App state
export const inStaging = process.env.REACT_APP_STAGING === 'true'
export const inE2EMode = process.env.REACT_APP_E2E === 'true'
export const inDevelopment = process.env.NODE_ENV === 'development'
export const inProduction = !inStaging && process.env.NODE_ENV === 'production'

// Extend default config with client preferences
const config = {
  // Application name
  appName: '',
  // Emails
  contactEmail: '',
  supportEmail: '',
  // Constants
  DEFAULT_SURVEY_NAME: process.env.DEFAULT_SURVEY_NAME || 'testSurvey',

  SENTRY_DNS: '',
  SENTRY_GIT_SHA: process.env.REACT_APP_GIT_SHA,
  PUBLIC_URL: process.env.PUBLIC_URL || '',
  FORM_DATA_KEY: 'riksutin_local_save',
  SESSION_TOKEN: 'riksutin_session_token',
  LOCATION_KEY: 'riksutin_session_location',

  //
  DEVELOPMENT_URL: 'http://localhost:3000',
  PRODUCTION_URL: 'http://localhost:3000',
  STAGING_URL: 'http://localhost:3000',

  // Internal tools
  JAMI_PRODUCTION_URL: '',
  JAMI_DEVELOPMENT_URL: '',
  PATE_PRODUCTION_URL: '',
  PATE_DEVELOPMENT_URL: '',
  OIDC_PRODUCTION_ISSUER: '',
  OIDC_DEVELOPMENT_ISSUER: '',

  // Import preference json-object and spread it to the pre-defined config.
  ...prefs,
}

export const {
  appName,
  contactEmail,
  supportEmail,

  DEFAULT_SURVEY_NAME,
  PUBLIC_URL,

  FORM_DATA_KEY,
  SESSION_TOKEN,
  LOCATION_KEY,

  SENTRY_DNS,
  SENTRY_GIT_SHA,
} = config

export const FULL_URL: string =
  // eslint-disable-next-line no-nested-ternary
  inProduction
    ? config.PRODUCTION_URL
    : inStaging
    ? config.STAGING_URL
    : config.DEVELOPMENT_URL

// Internal tools
export const JAMI_URL = inProduction
  ? config.JAMI_PRODUCTION_URL
  : config.JAMI_DEVELOPMENT_URL

export const PATE_URL: string = inProduction
  ? config.PATE_PRODUCTION_URL
  : config.PATE_DEVELOPMENT_URL

export const OIDC_ISSUER: string = inProduction
  ? config.OIDC_PRODUCTION_ISSUER
  : config.OIDC_DEVELOPMENT_ISSUER
