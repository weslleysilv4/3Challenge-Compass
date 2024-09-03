import { Router } from 'express'
import { CountryController } from '../controllers/countryController'

const router = Router()

router.get('/countries', (req, res) => {
  return new CountryController().getCountries(req, res)
})

router.post('/countries', (req, res) => {
  return new CountryController().createCountry(req, res)
})

router.get('/countries/:id', (req, res) => {
  return new CountryController().getCountryById(req, res)
})
export default router
