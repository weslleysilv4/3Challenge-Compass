import { z } from 'zod'

const CountrySchema = z.object({
  id: z.string().min(1, { message: 'The id field is mandatory' }).trim(),
  isoCode: z
    .string()
    .min(1, { message: 'The isoCode field is mandatory' })
    .trim(),
  image: z.string().optional(),
  title: z.string().min(1, { message: 'The title field is mandatory' }).trim(),
  name: z.string().min(1, { message: 'The name field is mandatory' }).trim(),
  overview: z.string().optional(),
  latitude: z
    .number({ invalid_type_error: 'The latitude field must be a number' })
    .min(1, { message: 'The latitude field is mandatory' }),
  longitude: z
    .number({ invalid_type_error: 'The longitude field must be a number' })
    .min(1, { message: 'The longitude field is mandatory' }),
  area: z
    .number({ invalid_type_error: 'The area field must be a number' })
    .min(1, { message: 'The area field is mandatory' }),
  population: z
    .number({ invalid_type_error: 'The population field must be a number' })
    .min(1, { message: 'The population field is mandatory' }),
  timeZone: z
    .string()
    .min(1, { message: 'The timeZone field is mandatory' })
    .trim(),
  timeToTravel: z
    .string()
    .min(1, { message: 'The time to travel field is mandatory' })
    .trim(),
  language: z
    .string()
    .min(1, { message: 'The language field is mandatory' })
    .trim(),
  currency: z
    .string()
    .min(1, { message: 'The currency field is mandatory' })
    .trim(),
})

type Country = z.infer<typeof CountrySchema>

const CountryInsertSchema = z.object({
  isoCode: z
    .string()
    .min(1, { message: 'The isoCode field is mandatory' })
    .trim(),
  title: z.string().min(1, { message: 'The title field is mandatory' }).trim(),
  image: z.string().optional(),
  overview: z
    .string()
    .min(1, { message: 'The overview field is mandatory' })
    .trim(),
  name: z.string().optional(),
  latitude: z
    .number({ invalid_type_error: 'The latitude field must be a number' })
    .optional(),
  longitude: z
    .number({ invalid_type_error: 'The longitude field must be a number' })
    .optional(),
  area: z
    .number({ invalid_type_error: 'The area field must be a number' })
    .optional(),
  population: z
    .number({ invalid_type_error: 'The population field must be a number' })
    .optional(),
  timeZone: z.string().optional(),
  timeToTravel: z.string().optional(),
  language: z.string().optional(),
  currency: z.string().optional(),
})

type CountryInsert = z.infer<typeof CountryInsertSchema>

export { CountrySchema, CountryInsertSchema, Country, CountryInsert }
