export interface CategoryProps {
  id: number
  name: string
}

export interface CategoriesOnTourProps {
  tourId: string
  categoryId: number
  category: CategoryProps
}

export interface TourProps {
  id?: string
  name: string
  image: string
  overview: string
  continent: string
  country: string
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
  categories?: CategoriesOnTourProps[]
  reviews?: ReviewProps[]
  ratings?: RatingProps
}
export interface ReviewProps {
  id?: number
  name: string
  email: string
  comment: string
  anonymous: boolean
  averageRating: number
  services: number
  prices: number
  locations: number
  food: number
  amenities: number
  roomComfortAndQuality: number
  userId: string
  tourId: string
  rating: RatingProps
  createdAt?: Date
}
export interface RatingProps {
  id?: number
  tourId: string
  reviewId: number
  services: number
  prices: number
  locations: number
  food: number
  amenities: number
  roomComfortAndQuality: number
  createdAt?: Date
}
