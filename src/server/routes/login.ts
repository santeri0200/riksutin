import express from 'express'
import passport from 'passport'

import { PUBLIC_URL } from '../../config'

const loginRouter = express.Router()

loginRouter.get('/', passport.authenticate('oidc'))

loginRouter.get(
  '/callback',
  passport.authenticate('oidc', { failureRedirect: PUBLIC_URL }),
  (req, res) => {
    console.log(JSON.stringify(req.user, null, 2))
    res.redirect('/admin')
  }
)

export default loginRouter
