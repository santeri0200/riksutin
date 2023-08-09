import express from 'express'
import passport from 'passport'

const loginRouter = express.Router()

loginRouter.get('/', passport.authenticate('oidc'))

loginRouter.get(
  '/callback',
  passport.authenticate('oidc', { failureRedirect: '/error' }),
  (_, res) => {
    res.redirect('/')
  }
)

export default loginRouter
