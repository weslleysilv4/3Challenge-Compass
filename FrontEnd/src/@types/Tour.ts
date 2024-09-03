import { Country } from "./Country";

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
  country: Country;
  countryId: string;
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
  _count: {
    reviews: number;
  };
  ratings: Rating[];
  averageRating: {
    services: number;
    prices: number;
    locations: number;
    food: number;
    amenities: number;
    roomComfortAndQuality: number;
  };
}

interface Review {
  id?: number;
  anonymous: boolean;
  comment: string;
  createdAt: string;
  email: string;
  name: string;
  tourId: string;
  user: User;
  rating: Rating;
  userId: string;
}

interface Rating {
  id: number;
  averageRating: number;
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
  tourCount: number;
  lowestPrice: number | null;
}

interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  createdAt: string;
  updatedAt: string;
  _count: {
    reviews: number;
  };
}

export type {
  TourResponse,
  TourProps,
  Review,
  Rating,
  CategoryOnTour,
  Category,
};
