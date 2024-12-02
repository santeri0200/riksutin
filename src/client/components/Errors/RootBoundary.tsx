import React, { useEffect } from 'react'
import {
  ErrorResponse,
  isRouteErrorResponse,
  useRouteError,
} from 'react-router-dom'

import * as Sentry from '@sentry/browser'

import Error from './Error'
import NotFound from './NotFound'
import Unauthorized from './Unauthorized'

const RootBoundary = () => {
  const error = useRouteError() as any

  useEffect(() => {
    if (isRouteErrorResponse(error)) {
      /**
        HACK: `error.error` is not valid syntax with the type infered from isRouteErrorResponse().
        It has been replaced with typed error. Type being `any` both cases are undefined behavior. 

        - @santeri0200
      */
      Sentry.captureException(error as ErrorResponse)
    } else {
      Sentry.captureException(error)
    }
  }, [error])

  if (error?.response && error.response?.data) {
    if (error.response.status === 404) return <NotFound />

    if (error.response.status === 401) return <Unauthorized />
  }
  return <Error />
}

export default RootBoundary
