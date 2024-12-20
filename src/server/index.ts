import path from 'path'
import { dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

// eslint-disable-next-line import/no-extraneous-dependencies
import 'express-async-errors'
import express from 'express'
import session from 'express-session'
import passport from 'passport'

import {
  SERVER_PORT,
  SESSION_SECRET,
  inE2EMode,
  inProduction,
} from './util/config'
import { redisStore } from './util/redis'
import logger from './util/logger'
import router from './routes'
import setupAuthentication from './util/oidc'
import { connectToDatabase } from './db/connection'
import seed from './db/seeders'
import startRiskCron from './util/cron/riskReEvaluation/riskReEvaluation'
import startCountryCron from './util/cron/highRiskCountries/highRiskCountries'

const app = express()

app.use(
  session({
    store: redisStore,
    resave: false,
    saveUninitialized: false,
    secret: inE2EMode ? 'testing' : SESSION_SECRET,
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use(['/api', '/public/api'], (req, res, next) => router(req, res, next))
app.use(['/api', '/public/api'], (_, res) => res.sendStatus(404))

if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
  const DIST_PATH = path.resolve(
    dirname(fileURLToPath(import.meta.url)),
    '../../dist'
  )
  const INDEX_PATH = path.resolve(DIST_PATH, 'index.html')

  app.use(express.static(DIST_PATH))
  app.get('*', (_, res) => res.sendFile(INDEX_PATH))
}

app.listen(SERVER_PORT, async () => {
  await connectToDatabase()
  await seed()
  await setupAuthentication()
  if (inProduction) {
    await startRiskCron()
  }
  await startCountryCron()

  logger.info(`Server running on port ${SERVER_PORT}`)
})
