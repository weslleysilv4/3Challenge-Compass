export interface TourProps {
  name: string
  country: string
  image: string
  city: string
  latitude: number
  longitude: number
  price: number
  maxGroupSize: number
  minAge: number
  initialDate: Date
  finalDate: Date
  initialRatingAverage: number
  duration: string
  categories: CategoryProps[]
  reviews: ReviewProps[]
}

interface ReviewProps {
  id?: number
  name: string
  email: string
  comment: string
  rating: RatingProps[]
  createdAt: string
}

interface CategoryProps {
  id?: number
  name: string
}

interface RatingProps {
  id?: number
  category: string
  services: number
  prices: number
  locations: number
  food: number
  amenities: number
  roomComfortAndQuality: number
}

export { ReviewProps, CategoryProps, RatingProps }
