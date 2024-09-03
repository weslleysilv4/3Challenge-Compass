import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { Review } from "@Types/Tour";

const fetchReviewData = async (): AxiosPromise<Review[]> => {
  const response = await axios.get<Review[]>(
    `${import.meta.env.VITE_API_BASE_URL}/reviews`
  );
  return response;
};

const fetchReviewDataById = async (id: string): AxiosPromise<Review[]> => {
  const response = await axios.get<Review[]>(
    `${import.meta.env.VITE_API_BASE_URL}/reviews/${id}`
  );
  return response;
};

const useAllReviewData = () => {
  const query = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviewData,
  });
  return {
    ...query,
    review: query.data?.data,
  };
};

const useReviewDataById = (id: string) => {
  const query = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => fetchReviewDataById(id),
  });
  return {
    ...query,
    review: query.data?.data,
  };
};

export { useAllReviewData, useReviewDataById };
