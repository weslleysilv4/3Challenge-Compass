import { z } from 'zod'

export const CategorySchema = z.object({
  id: z.number().int(),
  name: z.string().min(1).optional(),
})

export const RatingSchema = z.object({
  reviewId: z.number().int(),
  services: z.number().min(0).max(5),
  prices: z.number().min(0).max(5),
  locations: z.number().min(0).max(5),
  food: z.number().min(0).max(5),
  amenities: z.number().min(0).max(5),
  roomComfortAndQuality: z.number().min(0).max(5),
})

export const ReviewSchema = z.object({
  tourId: z.string().uuid(),
  name: z.string().min(1),
  email: z.string().email(),
  comment: z.string().min(10),
  createdAt: z.string().datetime().optional(),
  ratings: z.array(RatingSchema),
})

export const TourSchema = z.object({
  image: z.string().url(),
  name: z.string().min(1),
  country: z.string().min(1),
  city: z.string().min(1),
  latitude: z.number().min(-90).max(90),
  longitude: z.number().min(-180).max(180),
  price: z.number().positive(),
  maxGroupSize: z.number().int().positive(),
  minAge: z.number().int().positive().max(100),
  initialDate: z.string().datetime(),
  finalDate: z.string().datetime(),
  initialRatingAverage: z.number().min(0).max(5),
  duration: z.string().min(1),
  createdAt: z.string().datetime().optional(),
  updatedAt: z.string().datetime().optional(),
  category: z.array(CategorySchema),
  reviews: z.array(ReviewSchema),
})
