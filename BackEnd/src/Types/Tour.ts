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
  categories?: CategoryProps[]
  reviews?: ReviewProps[]
}

export interface ReviewProps {
  id?: number
  name: string
  email: string
  comment: string
  ratings: RatingProps[]
  createdAt: Date
}

export interface CategoryProps {
  id: number
  name: string
}

export interface RatingProps {
  id?: number
  category: RatingCategory
  services: number
  prices: number
  locations: number
  food: number
  amenities: number
  roomComfortAndQuality: number
}

export enum RatingCategory {
  SERVICES = 'services',
  PRICES = 'prices',
  LOCATIONS = 'locations',
  FOOD = 'food',
  AMENITIES = 'amenities',
  ROOM_COMFORT_AND_QUALITY = 'roomComfortAndQuality',
}
