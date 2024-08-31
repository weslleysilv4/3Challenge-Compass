import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserLogin, userLoginSchema } from "@Schemas/userLogin";
import { ReviewProps, reviewSchema } from "@Schemas/userReview";

export const useLoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserLogin>({
    resolver: zodResolver(userLoginSchema),
  });
  return { register, handleSubmit, errors };
};

export const useReviewForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ReviewProps>({
    resolver: zodResolver(reviewSchema),
  });
  return { register, handleSubmit, errors };
};
