import AddReview from "@Components/AddReview";
import AverageReview from "@Components/AverageReview";
import Header from "@Components/Header";
import UserReview from "@Components/UserReview";
import { AuthContext } from "@Contexts/Auth";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
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
import { set } from "react-hook-form";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams } from "react-router-dom";

function TourDetails() {
  const [tour, setTour] = useState<TourProps>();
  const [adultTickets, setAdultTickets] = useState(0);
  const [kidTickets, setKidTickets] = useState(0);
  const [childTickets, setChildTickets] = useState(0);
  const [diary, setDiary] = useState(1);
  const [total, setTotal] = useState(0);

  const { user } = useContext(AuthContext);
  const { id } = useParams();

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

  useEffect(() => {
    setTotal(
      diary *
        (adultTickets * (tour?.price ?? 0) +
          kidTickets * (tour?.price ?? 0) +
          childTickets * (tour?.price ?? 0)) || 0
    );
  }, [diary, adultTickets, kidTickets, childTickets, tour?.price]);

  if (!tour) {
    //TODO: Add loading spinner
    return <div>Loading...</div>;
  }
  const incrementTickets = (type: string) => {
    if (type === "adult") {
      setAdultTickets(adultTickets + 1);
      setTotal(total + tour.price);
    } else if (type === "kid" && tour.minAge <= 12) {
      setKidTickets(kidTickets + 1);
      setTotal(total + tour.price);
    } else if (type === "child" && tour.minAge <= 3) {
      setChildTickets(childTickets + 1);
      setTotal(total + tour.price);
    }
  };

  const decrementTickets = (type: string) => {
    if (type === "adult" && adultTickets > 0) {
      setAdultTickets(adultTickets - 1);
      setTotal(total - tour.price);
    } else if (type === "kid" && kidTickets > 0) {
      setKidTickets(kidTickets - 1);
      setTotal(total - tour.price);
    } else if (type === "child" && childTickets > 0) {
      setChildTickets(childTickets - 1);
      setTotal(total - tour.price);
    }
  };

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
                  <span className="font-bold text-4xl">${tour.price}</span> /
                  per person
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
                    onChange={(e) => setDiary(parseInt(e.target.value))}
                  >
                    {Array(parseInt(tour.duration))
                      .fill(null)
                      .map((_, index) => (
                        <SelectItem
                          key={index + 1}
                          textValue={`${index + 1} Day${
                            index + 1 > 1 ? "s" : ""
                          }`}
                        >
                          {index + 1} Day{index + 1 > 1 ? "s" : ""}
                        </SelectItem>
                      ))}
                  </Select>
                </div>
                <section className="w-full h-full flex flex-col gap-2">
                  <h6 className="font-bold">Ticket</h6>
                  <div className="flex flex-row items-center justify-between">
                    <p>Adults (18+ years)</p>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        variant="bordered"
                        size="sm"
                        onClick={() => decrementTickets("adult")}
                      >
                        <Minus size={22} />
                      </Button>
                      <Button
                        isDisabled
                        isIconOnly
                        variant="bordered"
                        size="sm"
                      >
                        {adultTickets}
                      </Button>
                      <Button
                        isIconOnly
                        variant="bordered"
                        size="sm"
                        onClick={() => incrementTickets("adult")}
                      >
                        <Plus size={22} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p>Kids (12+ years)</p>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        variant="bordered"
                        size="sm"
                        onClick={() => decrementTickets("kid")}
                        isDisabled={tour.minAge > 12}
                      >
                        <Minus size={22} />
                      </Button>
                      <Button
                        isDisabled
                        isIconOnly
                        variant="bordered"
                        size="sm"
                      >
                        {kidTickets}
                      </Button>
                      <Button
                        isIconOnly
                        variant="bordered"
                        size="sm"
                        onClick={() => incrementTickets("kid")}
                        isDisabled={tour.minAge > 12}
                      >
                        <Plus size={22} />
                      </Button>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <p>Children (3+ years)</p>
                    <div className="flex items-center gap-1">
                      <Button
                        isIconOnly
                        onClick={() => decrementTickets("child")}
                        variant="bordered"
                        size="sm"
                        isDisabled={tour.minAge > 3}
                      >
                        <Minus size={22} />
                      </Button>
                      <Button
                        isDisabled
                        isIconOnly
                        variant="bordered"
                        size="sm"
                      >
                        {childTickets}
                      </Button>
                      <Button
                        isIconOnly
                        onClick={() => incrementTickets("child")}
                        isDisabled={tour.minAge > 3}
                        variant="bordered"
                        size="sm"
                      >
                        <Plus size={22} />
                      </Button>
                    </div>
                  </div>
                  <hr className="my-2" />
                  <div className="flex justify-between my-3">
                    <h6 className="font-bold">Total</h6>
                    <p className="text-secondary font-bold">
                      ${total.toFixed(2)}
                    </p>
                  </div>
                  <Button size="lg" className="w-full" color="secondary">
                    Book Now
                  </Button>
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
