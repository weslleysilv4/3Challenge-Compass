import { Review } from "./Tour";

export interface Country {
  id: string;
  isoCode: string;
  title: string;
  image: string;
  name: string;
  overview: string;
  latitude: number;
  longitude: number;
  region: string;
  area: number;
  timeZone: string;
  language: string;
  population: number;
  currency: string;
  timeToTravel: string;
  tours: ToursInCountry[];
}

interface ToursInCountry {
  id: string;
  image: string;
  name: string;
  overview: string;
  countryId: string;
  city: string;
  continent: string;
  latitude: number;
  longitude: number;
  price: number;
  maxGroupSize: number;
  minAge: number;
  initialDate: string;
  finalDate: string;
  initialRatingAverage: number;
  duration: string;
  createdAt: string;
  updatedAt: string;
  reviews: Review[];
  _count: {
    reviews: number;
  };
}
