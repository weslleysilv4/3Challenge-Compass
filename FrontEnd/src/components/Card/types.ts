type CardProps = {
  image: string;
  city: string;
  country: string;
  title: string;
  rating: number;
  reviewsCount: number;
  duration: string;
  price: number;
  onClick?: () => void;
};

export default CardProps;
