import { useQuery } from "@tanstack/react-query";
import { TourProps, TourResponse } from "@Types/Tour";
import axios, { AxiosPromise } from "axios";

const fetchTourData = async (): AxiosPromise<TourResponse> => {
  const response = await axios.get<TourResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/tours`
  );
  return response;
};

const fetchTourDataById = async (id: string): AxiosPromise<TourProps> => {
  const response = await axios.get<TourProps>(
    `${import.meta.env.VITE_API_BASE_URL}/tours/${id}`
  );
  return response;
};

export function useAllTourData() {
  const query = useQuery({
    queryKey: ["tours"],
    queryFn: fetchTourData,
  });
  return {
    ...query,
    data: query.data,
  };
}

export function useTourDataById(id: string) {
  const query = useQuery({
    queryKey: ["tours", id],
    queryFn: () => fetchTourDataById(id),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
