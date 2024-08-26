import StarRating from "@Components/StarRating";
import { Button, Input, Textarea } from "@nextui-org/react";
import React, { useState } from "react";

interface AddReviewProps {
  categories: string[];
}

function AddReview({ categories }: AddReviewProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reviewText, setReviewText] = useState("");
  const [ratings, setRatings] = useState<{ [key: string]: number }>({});

  const handleRatingChange = (category: string, rating: number) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [category]: rating,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(name, email, reviewText, ratings);
  };

  return (
    <div className="w-1/2 bg-slate-50 h-[530px] p-5 flex flex-col gap-10 justify-center">
      <h6 className="text-primary font-bold">Add a review</h6>
      <form onSubmit={handleSubmit}>
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
          <div className="flex gap-5">
            <Input
              placeholder="Your name"
              name="name"
              value={name}
              aria-label="name"
              aria-labelledby="name"
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email" hidden></label>
            <Input
              placeholder="Email address"
              name="email"
              value={email}
              aria-label="email"
              aria-labelledby="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Textarea
            placeholder="Your review"
            aria-label="review"
            aria-labelledby="review"
            size="lg"
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
          />
        </div>
        <Button color="secondary" className="rounded-md mt-5" type="submit">
          Submit review
        </Button>
      </form>
    </div>
  );
}

export default AddReview;
