import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Country } from "@Types/Country";

function fetchDestinationData(): AxiosPromise<Country[]> {
  const response = axios.get<Country[]>(
    `${import.meta.env.VITE_API_BASE_URL}/countries`
  );
  return response;
}

function fetchDestinationDataById(id: string): AxiosPromise<Country> {
  const response = axios.get<Country>(
    `${import.meta.env.VITE_API_BASE_URL}/countries/${id}`
  );
  return response;
}

export function useDestinationData() {
  const query = useQuery({
    queryKey: ["countries"],
    queryFn: fetchDestinationData,
  });
  return {
    ...query,
    data: query.data?.data,
  };
}

export function useDestinationDataById(id: string) {
  const query = useQuery({
    queryKey: ["countries", id],
    queryFn: () => fetchDestinationDataById(id),
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
