import { ReviewProps } from "@Schemas/userReview";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

const reviewData = async (data: ReviewProps) => {
  return await axios.post(`${import.meta.env.VITE_API_BASE_URL}/reviews`, data);
};

const useReviewMutate = (id: string) => {
  const queryClient = useQueryClient();
  const mutate = useMutation({
    mutationFn: reviewData,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["reviews", id] });
    },
  });

  return mutate;
};

export { useReviewMutate };
