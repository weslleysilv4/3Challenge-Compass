import { useQuery } from "@tanstack/react-query";
import { Category } from "@Types/Tour";
import axios, { AxiosPromise } from "axios";

const fetchCategoriesData = async (): AxiosPromise<Category[]> => {
  const response = await axios.get<Category[]>(
    `${import.meta.env.VITE_API_BASE_URL}/categories`
  );
  return response;
};

export function useAllCategoriesData() {
  const query = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategoriesData,
  });
  return {
    ...query,
    data: query.data?.data,
  };
}
