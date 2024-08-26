import { Star } from "@phosphor-icons/react";
import React from "react";
import { twMerge } from "tailwind-merge";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
}

function StarRating({ rating, onRatingChange }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          weight="fill"
          className={twMerge(
            "transition-all cursor-pointer text-xl text-slate-300",
            rating >= star && "text-secondary"
          )}
          onClick={() => onRatingChange?.(star)}
        />
      ))}
    </div>
  );
}

export default StarRating;
