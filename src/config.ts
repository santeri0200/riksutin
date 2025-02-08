import prefs from '../prefs.json'

// App state
export const inE2EMode = process.env.REACT_APP_E2E === 'true'

export const inDevelopment = process.env.NODE_ENV === 'development'
export const inStaging = process.env.REACT_APP_STAGING === 'true'
export const inProduction = !inStaging && process.env.NODE_ENV === 'production'

const DEFAULT_URL = 'http://localhost:3000'
// Extend config with preferences
const config = {
  // Application name
  appName: 'Riskiarviointi',

  // Emails
  contactEmail: '',
  supportEmail: 'grp-int-risks@helsinki.fi',

  // Constants
  DEFAULT_SURVEY_NAME: process.env.DEFAULT_SURVEY_NAME || 'testSurvey',
  PUBLIC_URL: process.env.PUBLIC_URL || '',

  FORM_DATA_KEY: 'riksutin_local_save',
  SESSION_TOKEN: 'riksutin_session_token',
  LOCATION_KEY: 'riksutin_session_location',

  SENTRY_DNS: '',
  SENTRY_GIT_SHA: process.env.REACT_APP_GIT_SHA,

  // URLS
  PRODUCTION_URL: DEFAULT_URL,
  STAGING_URL: DEFAULT_URL,
  DEVELOPMENT_URL: DEFAULT_URL,

  // Import preferences
  ...prefs,
}

//
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

// eslint-disable-next-line no-nested-ternary
export const FULL_URL = inProduction
  ? config.PRODUCTION_URL
  : inStaging
  ? config.STAGING_URL
  : config.DEVELOPMENT_URL

// Internal tools
export const JAMI_URL = inProduction
  ? config.JAMI_PRODUCTION_URL
  : config.JAMI_DEVELOPMENT_URL

export const PATE_URL = inProduction
  ? config.PATE_PRODUCTION_URL
  : config.PATE_DEVELOPMENT_URL

export const OIDC_ISSUER = inProduction
  ? config.OIDC_PRODUCTION_ISSUER
  : config.OIDC_DEVELOPMENT_ISSUER
