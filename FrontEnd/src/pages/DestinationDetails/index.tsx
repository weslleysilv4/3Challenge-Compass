import Hero from "./Hero";
import { useNavigate, useParams } from "react-router-dom";
import { useDestinationDataById } from "@Hooks/useDestinationData";
import Header from "@Components/Header";
import Footer from "@Pages/Home/Footer";
import MapComponent from "@Components/MapContainer";
import Weather from "@Components/Weather";
import Card from "@Components/Card";
import Slider from "react-slick";
import { Button } from "@nextui-org/react";
import { ArrowRight } from "@phosphor-icons/react";

export default function DestinationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  if (!id) {
    throw new Error("ID is required but was not provided.");
  }
  const { data } = useDestinationDataById(id);
  if (!data) return null;

  const handleCardClick = (id: string) => {
    navigate(`/tours/${id}`);
  };
  return (
    <div>
      <Header />
      <Hero title={data.name} image={data.image} />
      <section className="py-[80px]">
        <div className="container mx-auto">
          <div className="flex flex-row w-full gap-5">
            <main className="w-3/5 h-full flex flex-col gap-5">
              <section className="w-full h-[631px] grid grid-rows-3 grid-cols-8 gap-8">
                <figure className="col-span-8 row-span-2 w-full relative h-full bg-black">
                  <img
                    src={data.image}
                    alt="Image of Tour"
                    className="object-cover object-center w-full h-full"
                  />
                </figure>
                <figure className="col-span-2 row-span-1 w-full relative h-full bg-black">
                  <img
                    src={data.image}
                    alt="Image of Tour"
                    className="object-cover object-center w-full h-full"
                  />
                </figure>
                <figure className="col-span-2 row-span-1 w-full relative h-full bg-black">
                  <img
                    src={data.image}
                    alt="Image of Tour"
                    className="object-cover object-center w-full h-full"
                  />
                </figure>
                <figure className="col-span-2 row-span-1 w-full relative h-full bg-black">
                  <img
                    src={data.image}
                    alt="Image of Tour"
                    className="object-cover object-center w-full h-full"
                  />
                </figure>
                <figure className="col-span-2 row-span-1 w-full relative h-full bg-black">
                  <img
                    src={data.image}
                    alt="Image of Tour"
                    className="object-cover object-center w-full h-full"
                  />
                </figure>
              </section>
              <section className="flex flex-col gap-5 pt-10">
                <h1 className="text-2xl font-bold text-primary">
                  About {data.name}
                </h1>
                <p>{data.overview}</p>
              </section>
              <section>
                <h1 className="text-2xl font-bold text-primary my-5">
                  Basic Information
                </h1>
                <section className="bg-[#F7F8FA] w-full h-[350px] flex items-center p-10">
                  <div className="flex w-1/3 flex-col h-full justify-between">
                    <span className="text-tertiary">Country</span>
                    <span className="text-tertiary">Language</span>
                    <span className="text-tertiary">Area</span>
                    <span className="text-tertiary">Population</span>
                    <span className="text-tertiary">Time Zone</span>
                    <span className="text-tertiary">Time to Travel</span>
                  </div>
                  <div className="flex flex-col h-full justify-between w-2/3">
                    <span className="text-primary font-bold">{data.name}</span>
                    <span className="text-primary font-bold">
                      {data.language.toLocaleUpperCase()}
                    </span>
                    <span className="text-primary font-bold">
                      {data.area.toLocaleString()}²
                    </span>
                    <span className="text-primary font-bold">
                      {data.population.toLocaleString()}
                    </span>
                    <span className="text-primary font-bold">
                      {data.timeZone}
                    </span>
                    <span className="text-primary font-bold">
                      {data.timeToTravel}
                    </span>
                  </div>
                </section>
              </section>
            </main>
            <aside className="w-2/5">
              <section className="w-full">
                <MapComponent
                  latitude={data.latitude}
                  longitude={data.longitude}
                  zoom={3}
                />
              </section>
              <section>
                <Weather city={data.name} />
              </section>
            </aside>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex justify-between">
              <h1 className="text-2xl font-bold text-primary my-5">
                Popular Tours in {data.isoCode}
              </h1>
              <Button
                variant="light"
                color="primary"
                className="font-bold"
                endContent={<ArrowRight size={20} />}
                onClick={() =>
                  navigate(`/tours/`, { state: { country: data.id } })
                }
              >
                See All
              </Button>
            </div>
            <div className="w-full mx-auto">
              <Slider
                infinite={false}
                dotsClass="slick-dots -bottom-10"
                slidesToShow={4}
                arrows={false}
                dots
                autoplay
              >
                {data?.tours.map((tour) => (
                  <Card
                    key={tour.id}
                    image={tour.image}
                    city={tour.city}
                    country={data.name}
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
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
