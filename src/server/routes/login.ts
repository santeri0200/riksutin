import express from 'express'
import passport from 'passport'

const loginRouter = express.Router()

loginRouter.get(
  '/',
  (_req, _res, next) => next(),
  passport.authenticate('oidc', { scope: 'openid' })
)

loginRouter.get('/callback', (req, res, next) => {
  passport.authenticate('oidc', {
    successRedirect: '/riksutin/admin',
    failureRedirect: '/riksutin/api/login',
    scope: ['openid'],
  })(req, res, next)
})

export default loginRouter
