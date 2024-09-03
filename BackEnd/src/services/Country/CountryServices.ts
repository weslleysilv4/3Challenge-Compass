import country from 'countryjs'
import { PrismaClient } from '@prisma/client'
import { CountryInsert } from '../../validations/destination.validation'

const prismaClient = new PrismaClient()

class CountryService {
  async getCountries() {
    const countries = await prismaClient.country.findMany()
    if (!countries) {
      throw new Error('No countries found')
    }
    return countries
  }

  async getCountryById(country_id: string) {
    const country = await prismaClient.country.findUnique({
      where: { id: country_id },
    })
    if (!country) {
      throw new Error(`Country with id ${country_id} not found`)
    }
    return country
  }

  async createCountry(data: CountryInsert) {
    const latlng = country.latlng(data.isoCode) || [0, 0]
    const infos = {
      name: country.name(data.isoCode) || 'Not found',
      latitude: latlng[0],
      longitude: latlng[1],
      language: country.languages(data.isoCode)?.join(', ') || 'Not found',
      currency: country.currencies(data.isoCode)?.join(', ') || 'Not found',
      area: country.area(data.isoCode) || 0,
      population: country.population(data.isoCode) || 0,
      timeZone: country.timezones(data.isoCode)?.join(' ') || 'Not found',
      timeToTravel: 'May, June, July, August',
    }

    const result = await prismaClient.country.create({
      data: {
        ...data,
        ...infos,
      },
    })

    if (!result) {
      throw new Error('Country not created')
    }

    return result.id
  }
}

export { CountryService }
