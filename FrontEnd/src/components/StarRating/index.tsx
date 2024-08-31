import { Star } from "@phosphor-icons/react";
import React, { useCallback } from "react";
import { twMerge } from "tailwind-merge";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
}

const StarRating: React.FC<StarRatingProps> = React.memo(
  ({ rating, onRatingChange }) => {
    const handleRatingChange = useCallback(
      (star: number) => {
        if (onRatingChange) {
          onRatingChange(star);
        }
      },
      [onRatingChange]
    );

    return (
      <div className="flex gap-1" role="radiogroup" aria-label="Star Rating">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            weight="fill"
            className={twMerge(
              "transition-all cursor-pointer text-xl hover:text-secondary text-slate-300",
              rating >= star && "text-secondary"
            )}
            onClick={() => handleRatingChange(star)}
            aria-label={`${star} star`}
            role="radio"
            aria-checked={rating === star}
          />
        ))}
      </div>
    );
  }
);

export default StarRating;
