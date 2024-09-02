import React, { useEffect } from "react";
import Slider from "react-slick";
import Card from "@Components/Card";
import Titles from "@Components/Titles";
import TravelCounters from "@Components/TravelCounters";
import { useNavigate } from "react-router-dom";
import { useAllTourData } from "@Hooks/useTourData";

function SecondSection() {
  const { data } = useAllTourData();
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/tours/${id}`);
  };
  useEffect(() => {
    document.title = "Home | Trisog";
  }, []);
  return (
    <section>
      <div className="container mx-auto">
        <section className="flex flex-col gap-6 items-center justify-center h-[780px]">
          <Titles title="Tours" position="center" />
          <h1 className="text-primary font-bold text-4xl mb-10">
            Most Popular Tours
          </h1>
          <div className="w-full mx-auto ">
            <Slider
              infinite={false}
              dotsClass="slick-dots -bottom-20"
              slidesToShow={4}
              arrows={false}
              dots
              autoplay
            >
              {data?.data.tours.map((tour) => (
                <Card
                  key={tour.id}
                  image={tour.image}
                  city={tour.city}
                  country={tour.country}
                  title={tour.name}
                  rating={tour.initialRatingAverage}
                  reviewsCount={tour.reviews.length}
                  duration={tour.duration}
                  price={tour.price}
                  onClick={() => handleCardClick(tour.id)}
                />
              ))}
            </Slider>
          </div>
        </section>
        <hr className="mt-6" />
        <section className="flex h-[190px] flex-row items-center justify-between  ">
          <TravelCounters counter="120+" label="Total Destination" />
          <TravelCounters counter="500+" label="Travel Package" />
          <TravelCounters counter="12k+" label="Total Travelers" />
          <TravelCounters counter="7k+" label="Positive Reviews" />
        </section>
      </div>
    </section>
  );
}

export default SecondSection;
