import { init as initSentry, Integrations } from '@sentry/node'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Integrations as TracingIntegrations } from '@sentry/tracing'
import { Express } from 'express-serve-static-core'

import { inProduction, inStaging, inE2EMode, GIT_SHA } from '@config'

const initializeSentry = (router: Express) => {
  if (!inProduction || inStaging || inE2EMode) return

  initSentry({
    dsn: 'https://144f4b59d562a36afcdca13de964eb9a@toska.cs.helsinki.fi/3',
    release: GIT_SHA,
    integrations: [
      new Integrations.Http({ tracing: true }),
      new TracingIntegrations.Express({ router }),
    ],
    tracesSampleRate: 1.0,
  })
}

export default initializeSentry
