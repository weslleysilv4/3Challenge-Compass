import React from "react";
import Slider from "react-slick";
import Card from "../../../components/Card";
import Titles from "../../../components/Titles";
import TravelCounters from "../../../components/TravelCounters";

function SecondSection() {
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
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
              <Card
                imageSrc="https://elquarto.com/blog/wp-content/uploads/2022/10/Budapeste.jpg" // Replace with your image source
                location="Budapest, Hungary"
                title="Wonders of the West Coast & Kimberley"
                rating={4.8}
                reviewsCount={15}
                duration="7 days"
                price={520}
              />
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
