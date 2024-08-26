import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Progress } from "@nextui-org/react";
import React from "react";

interface AverageReviewProps {
  serviceReview: number;
  priceReview: number;
  locationReview: number;
  foodReview: number;
  amenitiesReview: number;
  roomReview: number;
}

function AverageReview({
  serviceReview,
  priceReview,
  locationReview,
  foodReview,
  amenitiesReview,
  roomReview,
}: AverageReviewProps) {
  const calculateAverage = () => {
    const total =
      serviceReview +
      priceReview +
      locationReview +
      foodReview +
      amenitiesReview +
      roomReview;
    return total / 6;
  };

  const getRatingText = () => {
    const average = calculateAverage();
    if (average >= 4) return "Excellent";
    if (average >= 3) return "Good";
    if (average >= 2) return "Fair";
    return "Poor";
  };

  return (
    <div className="w-1/2 h-[260px] p-6 bg-slate-50 flex gap-10 items-center ">
      <main className="bg-secondary w-[180px] h-full flex flex-col items-center justify-center  gap-2">
        <h6 className="text-white text-6xl font-bold">
          {calculateAverage().toFixed(1)}
        </h6>
        <span className="text-base text-white">
          <FontAwesomeIcon icon={faStar} /> {getRatingText()}
        </span>
      </main>
      <aside className="w-[510px] grid grid-rows-3 grid-cols-2 gap-4">
        <div className="flex flex-col">
          <span>Services</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={serviceReview}
              color="secondary"
              maxValue={5}
            />
            <span>{serviceReview.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Prices</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={priceReview}
              color="secondary"
              maxValue={5}
            />
            <span>{priceReview.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Locations</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={locationReview}
              color="secondary"
              maxValue={5}
            />
            <span>{locationReview.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col">
          <span>Food</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={foodReview}
              color="secondary"
              maxValue={5}
            />
            <span>{foodReview.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <span>Amenities</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={amenitiesReview}
              color="secondary"
              maxValue={5}
            />
            <span>{amenitiesReview.toFixed(1)}</span>
          </div>
        </div>
        <div className="flex flex-col ">
          <span>Room comfort and quality</span>
          <div className="flex items-center justify-between w-full gap-2">
            <Progress
              size="md"
              value={roomReview}
              color="secondary"
              maxValue={5}
            />
            <span>{roomReview.toFixed(1)}</span>
          </div>
        </div>
      </aside>
    </div>
  );
}

export default AverageReview;
