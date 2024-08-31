import StarRating from "@Components/StarRating";
import { Button, Checkbox, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

interface AddReviewProps {
  onSubmitted?: () => void;
}

function AddReview({ onSubmitted }: AddReviewProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [anonymous, setAnonymous] = useState(true);
  const [reviewText, setReviewText] = useState("");
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };

  const handleAnonymousChange = () => {
    setAnonymous((prev) => !prev);
  };

  return (
    <div className="w-full bg-slate-50 p-5 flex flex-col gap-10 justify-center mt-5">
      <div className="flex justify-between">
        <h6 className="text-primary font-bold">Add a review</h6>
        <Checkbox
          color="secondary"
          checked={anonymous}
          onChange={handleAnonymousChange}
        >
          Anonymous
        </Checkbox>
      </div>
      <form onSubmit={on}>
        <div className="grid grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category} className="flex flex-col justify-between">
              <span>{category}</span>
              <StarRating
                rating={ratings[category] || 0}
                onRatingChange={(rating) =>
                  handleRatingChange(category, rating)
                }
              />
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-5 mt-10">
          {!anonymous && (
            <div className="flex gap-5">
              <Input
                placeholder="Your name"
                name="name"
                value={name}
                aria-label="name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                placeholder="Email address"
                name="email"
                value={email}
                aria-label="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          )}
          <Textarea
            placeholder="Your review"
            aria-label="review"
            size="lg"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <Button
          color="secondary"
          className="rounded-md mt-5"
          type="submit"
          size="lg"
        >
          Submit review
        </Button>
      </form>
    </div>
  );
}

export default AddReview;
