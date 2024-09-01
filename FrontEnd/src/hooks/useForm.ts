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

export const useReviewForm = (defaultValues?: Partial<ReviewProps>) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<ReviewProps>({
    defaultValues,
    resolver: zodResolver(reviewSchema),
  });

  return { register, handleSubmit, setValue, watch, errors };
};
