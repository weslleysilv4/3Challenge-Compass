import axios from "axios";
import { TourResponse, Category } from "@Types/Tour"; // Certifique-se de importar a tipagem correta

const API = {
  async getTours(): Promise<TourResponse> {
    const response = await axios.get<TourResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/tours`
    );
    return response.data;
  },
  async getCategories(): Promise<Category> {
    const response = await axios.get(
      `${import.meta.env.VITE_API_BASE_URL}/categories`
    );
    return response.data;
  },
};

export default API;
