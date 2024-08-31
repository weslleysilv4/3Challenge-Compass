interface TourResponse {
  totalPages: number;
  totalTours: number;
  tours: TourProps[];
}

interface TourProps {
  id: string;
  name: string;
  overview: string;
  continent: string;
  city: string;
  country: string;
  createdAt: string;
  duration: string;
  finalDate: string;
  image: string;
  initialDate: string;
  initialRatingAverage: number;
  latitude: number;
  longitude: number;
  maxGroupSize: number;
  minAge: number;
  price: number;
  reviews: Review[];
  categories: CategoryOnTour[];
}

interface Review {
  id: number;
  comment: string;
  createdAt: string;
  email: string;
  name: string;
  ratings: Rating[];
}

interface Rating {
  id: number;
  services: number;
  prices: number;
  locations: number;
  food: number;
  amenities: number;
  roomComfortAndQuality: number;
}

interface CategoryOnTour {
  categoryId: number;
  tourId: string;
  category: Category;
}

interface Category {
  id: number;
  name: string;
}

export type {
  TourResponse,
  TourProps,
  Review,
  Rating,
  CategoryOnTour,
  Category,
};
