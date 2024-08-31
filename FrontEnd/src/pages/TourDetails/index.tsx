import AddReview from "@Components/AddReview";
import AverageReview from "@Components/AverageReview";
import Header from "@Components/Header";
import UserReview from "@Components/UserReview";
import { AuthContext } from "@Contexts/Auth";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Checkbox, Input, Select, SelectItem } from "@nextui-org/react";
import Footer from "@Pages/Home/Footer";
import {
  Heart,
  MapPin,
  Minus,
  Plus,
  ShareNetwork,
  VideoCamera,
} from "@phosphor-icons/react";
import { TourResponse, TourProps } from "@Types/Tour";
import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

function TourDetails() {
  const { user } = useContext(AuthContext);
  const [tour, setTour] = useState<TourProps>();
  const { id } = useParams();
  const categories = [
    "Services",
    "Locations",
    "Amenities",
    "twos",
    "Food",
    "Room comfort",
  ];
  useEffect(() => {
    const fetchtour = async () => {
      try {
        const { data } = await axios.get<TourProps>(
          `${import.meta.env.VITE_API_BASE_URL}/tours/${id}`
        );
        setTour(data);
      } catch (error) {
        console.error("Error fetching tour:", error);
      }
    };
    fetchtour();
  }, [id]);
  if (!tour) {
    //TODO: Add loading spinner
    return <div>Loading...</div>;
  }
  return (
    <>
      <Header />
      <section>
        <div className="container mx-auto">
          <div className="flex flex-row w-full gap-5">
            <main className="w-3/5">
              <section className="w-full">
                <figure className="w-full relative h-[401px] bg-black">
                  <img
                    src={tour.image}
                    alt="Image of Tour"
                    className="bg-cover w-full h-full"
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
                      {tour.city}, {tour?.country}
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
                  {tour.name}
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
                      <td className="text-secondary">${tour.price}</td>
                      <td>{tour.duration}</td>
                      <td>{tour.maxGroupSize}</td>
                      <td>{tour.minAge}</td>
                      <td>
                        {tour?.categories.map((category, index) => (
                          <span key={index}>
                            {category.category.name}
                            {index < tour.categories.length - 1 && ", "}
                          </span>
                        ))}
                      </td>
                      <td>
                        <FontAwesomeIcon
                          icon={faStar}
                          size="sm"
                          className="text-secondary"
                        />
                        {tour.initialRatingAverage.toFixed(1)}{" "}
                        <span className="font-normal">
                          ({tour?.reviews.length} reviews)
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="font-bold text-2xl text-primary my-5">
                  Overview
                </h2>
                <p className="text-tertiary">{tour.overview}</p>
              </section>
              <section id="map" className="w-full">
                <h2 className="font-bold text-2xl text-primary my-5 ">Map</h2>
                <MapContainer
                  center={[tour.latitude, tour.longitude]}
                  zoom={25}
                  scrollWheelZoom={false}
                  style={{ height: "400px", width: "99%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[tour.latitude, tour.longitude]}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                </MapContainer>
              </section>
              <section className="w-[99%]">
                <h2 className="font-bold text-2xl text-primary my-5 ">
                  Average Reviews
                </h2>
                <AverageReview
                  serviceReview={4}
                  priceReview={4}
                  locationReview={2.8}
                  foodReview={3.5}
                  amenitiesReview={3.0}
                  roomReview={4.6}
                />
              </section>
              <section className="w-[99%]">
                {tour.reviews.length > 0 ? (
                  <>
                    <h6 className="text-lg font-bold text-primary my-5">
                      Showing 1 review
                    </h6>
                    <UserReview
                      date={new Date(
                        tour.reviews.map((review) => review.createdAt)[0]
                      ).toLocaleDateString()}
                      name={tour.reviews.map((review) => review.name)[0]}
                      rating={4.8}
                      image={user?.photoURL || ""}
                      reviewCounter={tour.reviews.length}
                      review={tour.reviews.map((review) => review.comment)[0]}
                    />
                  </>
                ) : (
                  <h6 className="text-lg font-bold text-primary my-5">
                    No reviews yet, add the first review!
                  </h6>
                )}
              </section>
            </main>
            <aside className="w-1/4 h-[620px] bg-slate-50">
              <div className="w-full h-full p-10 flex flex-col gap-5">
                <h2 className="text-md text-primary">
                  <span className="font-bold text-4xl">$104</span> / per person
                </h2>
                <hr />
                <div>
                  <label htmlFor="date" className="text-primary font-bold">
                    Date
                  </label>
                  <Input type="date" name="date" size="lg" />
                </div>
                <div>
                  <label htmlFor="time" className="text-primary font-bold">
                    Time
                  </label>
                  <Select
                    placeholder="Select"
                    aria-label="Select option"
                    size="lg"
                  >
                    {Array.from(
                      { length: parseInt(tour.duration) },
                      (_, index) => (
                        <SelectItem key={index + 1} value={`${index + 1}`}>
                          {index + 1} Day{index + 1 > 1 ? "s" : ""}
                        </SelectItem>
                      )
                    )}
                  </Select>
                </div>
                <section className="w-full h-full flex flex-col gap-2">
                  <h6 className="font-bold ">Ticket</h6>
                  <div className="flex flex-row items-center justify-between">
                    <p>Adults (18+ years)</p>
                    <div className="flex items-center">
                      <Button isIconOnly>
                        <Minus size={22} />
                      </Button>
                      <Button isIconOnly>0</Button>
                      <Button isIconOnly>
                        <Plus size={22} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p>Kids (12+ years)</p>
                    {tour.minAge <= 12 ? (
                      <div className="flex items-center">
                        <Button isIconOnly>
                          <Minus size={22} />
                        </Button>
                        <Button isIconOnly>0</Button>
                        <Button isIconOnly>
                          <Plus size={22} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Button isIconOnly isDisabled>
                          <Minus size={22} />
                        </Button>
                        <Button isIconOnly isDisabled>
                          0
                        </Button>
                        <Button isIconOnly isDisabled>
                          <Plus size={22} />
                        </Button>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p>Children (3+ years)</p>
                    {tour.minAge <= 3 ? (
                      <div className="flex items-center">
                        <Button isIconOnly>
                          <Minus size={22} />
                        </Button>
                        <Button isIconOnly>0</Button>
                        <Button isIconOnly>
                          <Plus size={22} />
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Button isIconOnly isDisabled>
                          <Minus size={22} />
                        </Button>
                        <Button isIconOnly isDisabled>
                          0
                        </Button>
                        <Button isIconOnly isDisabled>
                          <Plus size={22} />
                        </Button>
                      </div>
                    )}
                  </div>
                </section>
              </div>
            </aside>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourDetails;
