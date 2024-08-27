import AddReview from "@Components/AddReview";
import AverageReview from "@Components/AverageReview";
import Header from "@Components/Header";
import UserReview from "@Components/UserReview";
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
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function TourDetails() {
  const categories = [
    "Services",
    "Locations",
    "Amenities",
    "twos",
    "Food",
    "Room comfort",
  ];
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
                    src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                    alt="Tour Details"
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
                    <span className="mr-10">Budapest, Hungary</span>
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
                  Wonders of the West Coast & Kimberly
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
                      <td className="text-secondary">$104</td>
                      <td>7 days</td>
                      <td>25</td>
                      <td>12+</td>
                      <td>Adventure, Beaches</td>
                      <td>
                        <FontAwesomeIcon
                          icon={faStar}
                          size="sm"
                          className="text-secondary"
                        />{" "}
                        4.8
                        <span className="font-normal">(15 reviews)</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h2 className="font-bold text-2xl text-primary my-5">
                  Overview
                </h2>
                <p className="text-tertiary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ac.
                </p>
              </section>
              <section id="map" className="w-full">
                <h2 className="font-bold text-2xl text-primary my-5 ">Map</h2>
                <MapContainer
                  center={[51.505, -0.09]}
                  zoom={25}
                  scrollWheelZoom={false}
                  style={{ height: "400px", width: "99%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[51.505, -0.09]}>
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
                <h6 className="text-lg font-bold text-primary my-5">
                  Showing 1 review
                </h6>
                <UserReview
                  date="March 20, 2022"
                  name="Sindy Simmons"
                  rating={4.8}
                  reviewCounter={15}
                  review="Objectively productivate just in time information with dynamic channels. Energistically exploit seamless growth strategies after 24/7 experiences."
                />
                <AddReview categories={categories} />
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
                    <SelectItem key={"one"} value={"one"}>
                      One Day
                    </SelectItem>
                    <SelectItem key={"two"} value={"two"}>
                      Two Days
                    </SelectItem>
                    <SelectItem key={"three"} value={"three"}>
                      Three Days
                    </SelectItem>
                    <SelectItem key={"four"} value={"four"}>
                      Four Days
                    </SelectItem>
                    <SelectItem key={"five"} value={"five"}>
                      Five Days
                    </SelectItem>
                    <SelectItem key={"six"} value={"six"}>
                      Sixt Days
                    </SelectItem>
                    <SelectItem key={"seven"} value={"seven"}>
                      Seven Days
                    </SelectItem>
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
                    <p>Children (3+ years)</p>
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
                </section>
              </div>
            </aside>
          </div>
          <section>Teste</section>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourDetails;
