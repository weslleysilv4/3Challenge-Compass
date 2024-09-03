import AverageReview from "@Components/AverageReview";
import BookContainer from "@Components/BookContainer";
import Header from "@Components/Header";
import MapComponent from "@Components/MapContainer";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAllTourData, useTourDataById } from "@Hooks/useTourData";
import { Button } from "@nextui-org/react";
import Footer from "@Pages/Home/Footer";
import {
  Heart,
  MapPin,
  ShareNetwork,
  VideoCamera,
} from "@phosphor-icons/react";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "./ReviewForm";
import Slider from "react-slick";
import Card from "@Components/Card";

function TourDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  if (!id) {
    throw new Error("ID is required but was not provided.");
  }
  const { data } = useTourDataById(id);
  const { data: allTours } = useAllTourData();
  useEffect(() => {}, [id]);
  if (!data) return null;
  const handleCardClick = (id: string) => {
    navigate(`/tours/${id}`);
  };
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto">
          <main className="w-full h-full">
            <div className="flex flex-row w-full gap-5">
              <main className="w-3/5">
                <section className="w-full">
                  <figure className="w-full relative h-[401px] bg-black">
                    <img
                      src={data.image}
                      alt="Image of Tour"
                      className="object-cover object-center w-full h-full"
                    />
                    <Button className="absolute bottom-6 right-32 font-semibold">
                      Video <VideoCamera size={20} />
                    </Button>
                    <Button className="absolute bottom-6 right-4 font-semibold">
                      Gallery <FontAwesomeIcon icon={faImage} />
                    </Button>
                  </figure>
                  <div className="flex justify-between mt-5">
                    <div className="flex items-center text-tertiary">
                      <MapPin size={24} />
                      <span className="mr-10">
                        {data.city}, {data.country?.name}
                      </span>
                      <a href="#map" className="text-secondary">
                        View on map
                      </a>
                    </div>
                    <div className="flex items-center">
                      <Button isIconOnly variant="light">
                        <ShareNetwork size={24} />
                      </Button>
                      <Button isIconOnly variant="light">
                        <Heart size={24} />
                      </Button>
                    </div>
                  </div>
                  <h1 className="text-4xl font-bold mt-5 text-primary">
                    {data.name}
                  </h1>
                  <hr className="my-5" />
                  <table className="w-full table-auto">
                    <thead className="text-left text-tertiary">
                      <tr>
                        <th className="font-normal">From</th>
                        <th className="font-normal">Duration</th>
                        <th className="font-normal">Max People</th>
                        <th className="font-normal">Min Age</th>
                        <th className="font-normal">Tour Type</th>
                        <th className="font-normal">Reviews</th>
                      </tr>
                    </thead>
                    <tbody className="text-primary font-bold">
                      <tr>
                        <td className="text-secondary">${data.price}</td>
                        <td>{data.duration}</td>
                        <td>{data.maxGroupSize}</td>
                        <td>{data.minAge}</td>
                        <td>
                          {data.categories.map((category, index) => (
                            <span key={index}>
                              {category.category.name}
                              {index < data.categories.length - 1 && ", "}
                            </span>
                          ))}
                        </td>
                        <td>
                          <FontAwesomeIcon
                            icon={faStar}
                            size="sm"
                            className="text-secondary"
                          />
                          {data.initialRatingAverage.toFixed(1)}{" "}
                          <span className="font-normal">
                            ({data.reviews.length} reviews)
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <h2 className="font-bold text-2xl text-primary my-5">
                    Overview
                  </h2>
                  <p className="text-tertiary">{data.overview}</p>
                </section>
                <MapComponent
                  latitude={data.latitude}
                  longitude={data.longitude}
                />
                <section className="w-[99%]">
                  <h2 className="font-bold text-2xl text-primary my-5 ">
                    Average Reviews
                  </h2>
                  <AverageReview
                    averageReview={data.initialRatingAverage || 0}
                    serviceReview={data.averageRating?.services || 0}
                    priceReview={data.averageRating?.prices || 0}
                    locationReview={data.averageRating?.locations || 0}
                    foodReview={data.averageRating?.food || 0}
                    amenitiesReview={data.averageRating?.amenities || 0}
                    roomReview={data.averageRating?.roomComfortAndQuality || 0}
                    aria-labelledby="average-reviews"
                  />
                </section>
                <ReviewForm id={id} />
              </main>
              <aside className="w-1/4 h-[620px] bg-slate-50">
                <BookContainer
                  maxGroupSize={data.maxGroupSize}
                  duration={data.duration}
                  minAge={data.minAge}
                  price={data.price}
                />
              </aside>
            </div>
            <section className="h-full pb-36">
              <h1 className="text-center py-10 text-2xl font-bold text-primary">
                You may also like...
              </h1>
              <div className="w-full mx-auto">
                <Slider
                  infinite={false}
                  dotsClass="slick-dots -bottom-10"
                  slidesToShow={4}
                  arrows={false}
                  dots
                  autoplay
                >
                  {allTours?.data.tours.map((tour) => (
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
            </section>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourDetails;
