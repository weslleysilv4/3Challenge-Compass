import { CountryService } from '../services/Country/CountryServices'
import { Request, Response } from 'express'

export class CountryController {
  async getCountries(req: Request, res: Response) {
    const getCountriesService = new CountryService()
    try {
      const countries = await getCountriesService.getCountries()
      if (!countries) return res.status(404).json({ msg: 'No data found' })
      return res.status(200).json(countries)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
  async createCountry(req: Request, res: Response) {
    const data = req.body
    try {
      const createCountryService = new CountryService()
      const country = await createCountryService.createCountry(data)
      return res.status(201).json(country)
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.name, message: error.message })
      } else {
        res.status(400).json({ error: 'Unknown error', message: String(error) })
      }
    }
  }
}
