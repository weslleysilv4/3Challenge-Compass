import React, { useState } from "react";
import CardProps from "./types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faClock, faHeart } from "@fortawesome/free-regular-svg-icons";

const Card = ({
  imageSrc,
  location,
  title,
  rating,
  reviewsCount,
  duration,
  price,
}: CardProps) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
    setIsAnimating(true);

    // Remove the animation class after the animation ends
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Duration of the animation
  };

  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="relative w-full">
        <img
          className="w-full h-[218px] object-cover"
          src={imageSrc}
          alt={title}
        />
        <button
          onClick={toggleFavorite}
          className={`absolute top-4 right-2 h-8  ${
            isFavorite ? "text-white bg-secondary" : "text-primary bg-white"
          } rounded-full p-2 transition-all hover:text-black`}
        >
          <FontAwesomeIcon
            icon={faHeart}
            size="xs"
            className={`h-4 ${isAnimating ? "heart-pulse" : ""}`}
          />
        </button>
      </div>
      <div className="px-6 py-4">
        <div className="text-primary text-sm mb-1">{location}</div>
        <div className="text-primary font-bold text-xl mb-2">{title}</div>
        <div className="flex row justify-between items-center mb-2">
          <div>
            <span className="text-white text-xs mr-2 bg-secondary rounded-md p-1 ">
              <FontAwesomeIcon icon={faStar} /> {rating}
            </span>
            <span className="text-primary">{reviewsCount} reviews</span>
          </div>
          <div className="text-primary">
            <FontAwesomeIcon icon={faClock} /> {duration}
          </div>
        </div>
        <hr />
        <div className="flex row justify-between items-center text-primary mt-2">
          <span className="text-xs">Starting From</span>
          <span className="font-bold font-secondary text-xl">${price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
