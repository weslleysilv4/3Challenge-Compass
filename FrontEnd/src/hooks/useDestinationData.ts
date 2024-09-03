import axios, { AxiosPromise } from "axios";
import { useQuery } from "@tanstack/react-query";
import { Country } from "@Types/Country";

function fetchDestinationData(): AxiosPromise<Country[]> {
  const response = axios.get<Country[]>(
    `${import.meta.env.VITE_API_BASE_URL}/countries`
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
