const mockUser = {
  id: 'hy-hlo-1441871',
  username: 'testuser',
  firstName: 'Testi',
  lastName: 'Kayttaja',
  email: 'grp-toska@helsinki.fi',
  language: 'fi',
  isAdmin: true,
  iamGroups: ['grp-toska', 'hy-mltdk-employees'],
}

const userMiddleware = (req: any, _: any, next: any) => {
  if (req.path.includes('/login')) return next()

  req.user = mockUser

  return next()
}

export default userMiddleware
