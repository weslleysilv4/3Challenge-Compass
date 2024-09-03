import { z } from 'zod'

export const CategorySchema = z.object({
  id: z.number().int().positive(),
})

export const ReviewSchema = z.object({
  tourId: z.string(),
  name: z.string().min(1),
  email: z.string().email(),
  comment: z.string().min(10),
  anonymous: z.boolean(),
  createdAt: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional()
  ),
  services: z.number().min(0).max(5),
  prices: z.number().min(0).max(5),
  locations: z.number().min(0).max(5),
  food: z.number().min(0).max(5),
  amenities: z.number().min(0).max(5),
  roomComfortAndQuality: z.number().min(0).max(5),
})

export const TourSchema = z.object({
  image: z.string().url(),
  name: z.string().min(1),
  country: z.string().min(1),
  countryId: z.string().min(1),
  city: z.string().min(1),
  continent: z.enum([
    'Africa',
    'Antarctica',
    'Asia',
    'Europe',
    'North America',
    'Oceania',
    'South America',
  ]),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  price: z.number().positive(),
  maxGroupSize: z.number().int().positive(),
  minAge: z.number().int().positive().max(100),
  initialDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  finalDate: z.preprocess((arg) => new Date(arg as string), z.date()),
  initialRatingAverage: z.number().min(0).max(5),
  duration: z.string().min(1),
  createdAt: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional()
  ),
  updatedAt: z.preprocess(
    (arg) => (arg ? new Date(arg as string) : undefined),
    z.date().optional()
  ),
  categories: z.array(CategorySchema).nonempty('Categories cannot be empty'), // Agora aceita um array de IDs
  reviews: z.array(ReviewSchema).optional(),
})
