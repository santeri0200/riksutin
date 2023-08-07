import {
  Issuer,
  Strategy,
  TokenSet,
  UnknownObject,
  UserinfoResponse,
} from 'openid-client'
import passport from 'passport'

import {
  OIDC_ISSUER,
  OIDC_CLIENT_ID,
  OIDC_CLIENT_SECRET,
  OIDC_REDIRECT_URI,
} from './config'

const params = {
  claims: {
    id_token: {
      uid: { essential: true },
    },
    userinfo: {
      name: { essential: true },
      email: { essential: true },
    },
  },
}

const getClient = async () => {
  const issuer = await Issuer.discover(OIDC_ISSUER)

  const client = new issuer.Client({
    client_id: OIDC_CLIENT_ID,
    client_secret: OIDC_CLIENT_SECRET,
    redirect_uris: [OIDC_REDIRECT_URI],
    response_types: ['code'],
  })

  return client
}

// Access token and user params are first received here
const verifyLogin = async (
  tokenSet: TokenSet,
  userinfo: UserinfoResponse<UnknownObject, UnknownObject>,
  done: (err: any, user?: unknown) => void
) => {
  console.log('tokenSet', tokenSet.claims())
  console.log('userinfo', userinfo)

  return done(null, userinfo)
}

const setupAuthentication = async () => {
  const client = await getClient()

  passport.serializeUser((user: any, done) => {
    // return the user id here
    done(null, user)
  })

  passport.deserializeUser((user: any, done) => {
    // get the user from the database here
    done(null, user)
  })

  passport.use('oidc', new Strategy({ client, params }, verifyLogin))
}

export default setupAuthentication
