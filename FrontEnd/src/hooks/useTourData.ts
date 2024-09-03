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

const fetchTourDataByParams = async (
  params: URLSearchParams
): AxiosPromise<TourResponse> => {
  const response = await axios.get<TourResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/tours`,
    {
      params: {
        skip: params.get("skip"),
        page: params.get("page"),
        limit: params.get("limit"),
        destination: params.get("destination"),
        categories: params.get("categories"),
        date: params.get("date"),
        country: params.get("country"),
        guests: params.get("guests"),
        price: params.get("price"),
        rating: params.get("rating"),
        sortField: params.get("sortField"),
        sortOrder: params.get("sortOrder"),
      },
    }
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
    enabled: !!id,
  });
  return {
    ...query,
    data: query.data?.data,
  };
}

export function useTourDataByParams(params: URLSearchParams) {
  const query = useQuery({
    queryKey: ["tours", params.toString()],
    queryFn: () => fetchTourDataByParams(params),
    enabled: !!params,
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
