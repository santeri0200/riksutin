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
import { UserInfo } from '../types'
import { User } from '../db/models'

const params = {
  claims: {
    id_token: {
      uid: { essential: true },
      hyPersonSisuId: { essential: true },
    },
    userinfo: {
      email: { essential: true },
      hyGroupCn: { essential: true },
      preferredLanguage: null,
      given_name: null,
      family_name: null,
    },
  },
}

const checkAdmin = (iamGroups: string[]) =>
  iamGroups.some((iamGroup) =>
    ['hy-ypa-opa-ote', 'grp-toska'].includes(iamGroup)
  )

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

const verifyLogin = async (
  _tokenSet: TokenSet,
  userinfo: UserinfoResponse<UnknownObject, UnknownObject>,
  done: (err: any, user?: unknown) => void
) => {
  const {
    uid: username,
    hyPersonSisuId: id,
    email,
    hyGroupCn: iamGroups,
    preferredLanguage: language,
    given_name: firstName,
    family_name: lastName,
  } = userinfo as unknown as UserInfo

  const user = {
    username,
    id: id || username,
    email,
    iamGroups,
    language,
    firstName,
    lastName,
    isAdmin: checkAdmin(iamGroups),
  }

  const [updatedUser] = await User.upsert({
    ...user,
    lastLoggedIn: new Date(),
  })

  done(null, updatedUser)
}

const setupAuthentication = async () => {
  const client = await getClient()

  passport.serializeUser((user: any, done) => {
    console.log(user)

    const { id, isAdmin } = user as User

    return done(null, { id, isAdmin })
  })

  passport.deserializeUser(async ({ id }: { id: string }, done) => {
    const user = await User.findByPk(id)

    if (!user) return done(new Error('User not found'))

    return done(null, user)
  })

  passport.use('oidc', new Strategy({ client, params }, verifyLogin))
}

export default setupAuthentication
