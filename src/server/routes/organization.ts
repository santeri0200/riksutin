import express from 'express'

const organizationRouter = express.Router()

organizationRouter.get('/:org', async (req, res: any) => {
  const { org } = req.params

  const params = '&pageSize=10&pageNumber=1'
  const url = `https://api.tech.ec.europa.eu/search-api/prod/rest/search?apiKey=SEDIA_PERSON&text="${org}"${params}`

  const response = await fetch(url, { method: 'POST' })
  const data = await response.json()

  return res.status(200).send(data.results)
})

export default organizationRouter
