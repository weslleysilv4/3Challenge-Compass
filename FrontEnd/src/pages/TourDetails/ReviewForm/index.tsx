import StarRating from "@Components/StarRating";
import UserReview from "@Components/UserReview";
import { AuthContext } from "@Contexts/Auth";
import { useReviewForm } from "@Hooks/useForm";
import { useReviewDataById } from "@Hooks/useReviewData";
import { useReviewMutate } from "@Hooks/useReviewMutate";
import { useTourDataById } from "@Hooks/useTourData";
import { Checkbox, Input, Textarea, Button } from "@nextui-org/react";
import { ReviewProps } from "@Schemas/userReview";
import React, { useContext, useEffect, useState } from "react";

function ReviewForm({ id }: { id: string }) {
  const { user } = useContext(AuthContext);
  const [anonymous, setAnonymous] = useState(false);
  const { data: tourData } = useTourDataById(id);
  const { data: reviewData } = useReviewDataById(id);
  const { mutate } = useReviewMutate(id);

  const { register, handleSubmit, errors, setValue, watch } = useReviewForm({
    tourId: id,
    email: user?.email || "",
    name: user?.displayName || "",
    comment: "",
    amenities: 0,
    food: 0,
    locations: 0,
    prices: 0,
    roomComfortAndQuality: 0,
    services: 0,
    anonymous: false,
    userId: user?.uid || "",
  });
  const onSubmit = async (data: ReviewProps) => {
    mutate(data);
  };
  useEffect(() => {}, [onSubmit]);
  return (
    <section className="w-[99%]">
      {tourData?._count.reviews ? (
        <section>
          <h6 className="text-lg font-bold text-primary my-5">
            Showing {tourData._count.reviews}{" "}
            {tourData._count.reviews > 1 ? "reviews" : "review"}
          </h6>
          {reviewData?.data.map((review) => (
            <UserReview
              key={review.id}
              date={new Date(review.createdAt).toUTCString()}
              name={review.name}
              rating={review.rating.averageRating}
              image={review.user.image || review.user.name}
              reviewCounter={review.user._count.reviews}
              review={review.comment}
              isAnonymous={review.anonymous}
            />
          ))}
        </section>
      ) : (
        <h6 className="text-lg font-bold text-primary my-5">No reviews yet</h6>
      )}
      <div className="w-full bg-slate-50 p-5 flex flex-col gap-10 justify-center mt-5">
        <div className="flex justify-between">
          <h6 className="text-primary font-bold">Add a review</h6>
          <Checkbox
            color="secondary"
            {...register("anonymous")}
            defaultSelected={true}
            onChange={() => setAnonymous(!anonymous)}
            aria-labelledby="Anonymous"
            aria-label="Anonymous"
          >
            Anonymous
          </Checkbox>
        </div>
        <form method="POST" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="services">Services</label>
              <StarRating
                rating={watch("services", 0)}
                onRatingChange={(rating) => setValue("services", rating)}
              />
              {errors.services && <small>{errors.services.message}</small>}
            </div>
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="prices">Prices</label>
              <StarRating
                rating={watch("prices", 0)}
                onRatingChange={(rating) => setValue("prices", rating)}
              />
              {errors.prices && <small>{errors.prices.message}</small>}
            </div>
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="locations">Locations</label>
              <StarRating
                rating={watch("locations", 0)}
                onRatingChange={(rating) => setValue("locations", rating)}
              />
              {errors.locations && <small>{errors.locations.message}</small>}
            </div>
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="food">Food</label>
              <StarRating
                rating={watch("food", 0)}
                onRatingChange={(rating) => setValue("food", rating)}
              />
              {errors.food && <small>{errors.food.message}</small>}
            </div>
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="amenities">Amenities</label>
              <StarRating
                rating={watch("amenities", 0)}
                onRatingChange={(rating) => setValue("amenities", rating)}
              />
              {errors.amenities && <small>{errors.amenities.message}</small>}
            </div>
            <div className="flex flex-col items-start justify-start">
              <label htmlFor="roomComfortAndQuality">
                Room Comfort and Quality
              </label>
              <StarRating
                rating={watch("roomComfortAndQuality", 0)}
                onRatingChange={(rating) =>
                  setValue("roomComfortAndQuality", rating)
                }
              />
              {errors.roomComfortAndQuality && (
                <small>{errors.roomComfortAndQuality.message}</small>
              )}
            </div>
          </div>
          <div className="flex flex-col gap-5 mt-10">
            {!anonymous && (
              <div className="flex w-full gap-5">
                <div className="flex flex-col w-1/2">
                  <Input
                    placeholder="Your name"
                    aria-label="name"
                    {...register("name")}
                    aria-labelledby="name"
                  />
                  {errors.name && <small>{errors.name.message}</small>}
                </div>
                <div className="flex flex-col w-1/2">
                  <Input
                    placeholder="Email address"
                    aria-label="email"
                    {...register("email")}
                    aria-labelledby="email"
                  />
                  {errors.email && <small>{errors.email.message}</small>}
                </div>
              </div>
            )}
            <Textarea
              placeholder="Your review"
              size="lg"
              {...register("comment")}
              aria-label="comment"
            />
            {errors.comment && <small>{errors.comment.message}</small>}
          </div>
          <Button
            color="secondary"
            className="rounded-md mt-5"
            type="submit"
            size="lg"
            aria-labelledby="submit-review"
          >
            Submit review
          </Button>
        </form>
      </div>
    </section>
  );
}

export default ReviewForm;
