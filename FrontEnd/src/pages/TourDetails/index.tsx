import AverageReview from "@Components/AverageReview";
import Header from "@Components/Header";
import UserReview from "@Components/UserReview";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Progress } from "@nextui-org/react";
import Footer from "@Pages/Home/Footer";
import {
  Heart,
  MapPin,
  ShareNetwork,
  VideoCamera,
} from "@phosphor-icons/react";
import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

function TourDetails() {
  return (
    <>
      <Header />
      <main>
        <div className="container mx-auto">
          <section className="w-[780px]">
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
            <h2 className="font-bold text-2xl text-primary my-5">Overview</h2>
            <p className="text-tertiary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              ac.
            </p>
          </section>
          <section id="map">
            <h2 className="font-bold text-2xl text-primary my-5 ">Map</h2>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={25}
              scrollWheelZoom={false}
              style={{ height: "400px", width: "50%" }}
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
          <section>
            <h2 className="font-bold text-2xl text-primary my-5 ">
              Average Reviews
            </h2>
          </section>
          <aside>
            <AverageReview
              serviceReview={4}
              priceReview={4}
              locationReview={2.8}
              foodReview={3.5}
              amenitiesReview={3.0}
              roomReview={4.6}
            />
            <h6>Showing 1 review</h6>
            <UserReview
              date="March 20, 2022"
              name="Sindy Simmons"
              rating={4.8}
              reviewCounter={15}
              review="Objectively productivate just in time information with dynamic channels. Energistically exploit seamless growth strategies after 24/7 experiences."
            />
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default TourDetails;
