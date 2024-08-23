import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import Titles from "../../components/Titles";
import Card from "../../components/Card";
import Slider from "react-slick";
import TravelCounters from "../../components/TravelCounters";
import ThirdSection from "./ThidSection";
import FourthSection from "./FourthSection";
import FifthSection from "./FifthSection";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Header />
      <section className="bg-center bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e')]">
        <div className="container mx-auto">
          <main className="relative w-full h-[527px] flex flex-col">
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h2 className="text-3xl font-secondary text-secondary mb-4">
                  Save 15% off in Worldwide
                </h2>
                <h1 className="text-5xl font-bold text-white mb-2">
                  Travel & Adventures
                </h1>
                <p className="text-white font-semibold">
                  Find awesome hotel, tour, car and activities in London
                </p>
              </div>
            </div>
            <form className="absolute flex gap-6 items-center mx-auto px-6 self-center h-[110px] -bottom-11 bg-white rounded-xl drop-shadow-md">
              <div className="flex flex-col">
                <label htmlFor="search" className="text-primary font-secondary">
                  Destination
                </label>
                <div className="flex gap-2 items-center outline-none border-2 border-gray-100 rounded-md h-10 px-4">
                  <FontAwesomeIcon icon={faPaperPlane} />
                  <input
                    type="text"
                    placeholder="Where to go?"
                    className="outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="search" className="text-primary font-secondary">
                  Type
                </label>
                <div className="flex gap-2 items-center outline-none border-2 border-gray-100 rounded-md h-10 px-4">
                  <FontAwesomeIcon icon={faFlag} />
                  <select defaultValue="" className="text-gray-300">
                    <option value="" disabled>
                      Activity
                    </option>
                    <option value="">Beaches</option>
                    <option value="">Boat Tours</option>
                    <option value="">City Tours</option>
                    <option value="">Food</option>
                    <option value="">Hiking</option>
                    <option value="">Honeymoon</option>
                    <option value="">Museum Tours</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="date" className="text-primary font-secondary">
                  When
                </label>
                <div className="flex gap-2 items-center outline-none border-2 border-gray-100 rounded-md h-10 px-4">
                  <input
                    type="date"
                    id="date"
                    className="outline-none text-gray-300 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="search" className="text-primary font-secondary">
                  Guests
                </label>
                <div className="flex gap-2 items-center outline-none border-2 border-gray-100 rounded-md h-10 px-4">
                  <FontAwesomeIcon icon={faUser} />
                  <input
                    type="text"
                    placeholder="Where to go?"
                    className="outline-none"
                  />
                </div>
              </div>
              <button className="bg-secondary rounded-md text-white h-10 px-4">
                Search
              </button>
            </form>
          </main>
        </div>
      </section>
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
        </div>
      </section>
      <section className="">
        <div className="container mx-auto">
          <section className="flex h-[190px] flex-row items-center justify-between  ">
            <TravelCounters counter="120+" label="Total Destination" />
            <TravelCounters counter="500+" label="Travel Package" />
            <TravelCounters counter="12k+" label="Total Travelers" />
            <TravelCounters counter="7k+" label="Positive Reviews" />
          </section>
        </div>
      </section>
      <section className="bg-[#F7F8FA]">
        <div className="container mx-auto">
          <section className="flex flex-col h-[772px] gap-6 items-center justify-center ">
            <Titles title="Destination" position="center" />
            <h1 className="text-primary font-bold text-4xl mb-10">
              Top Attractions Destinations
            </h1>
            <main className="grid grid-rows-2 grid-cols-8 gap-8">
              <figure className="col-span-2 relative overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
              <figure className="col-span-2 relative overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
              <figure className="col-span-2 relative overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
              <figure className="col-span-2 row-span-2 relative overflow-hidden shadow-lg ">
                <img
                  className="w-full h-full object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
              <figure className="col-span-3 relative overflow-hidden shadow-lg ">
                <img
                  className="w-full h-48 object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
              <figure className="col-span-3 relative overflow-hidden shadow-lg">
                <img
                  className="w-full h-48 object-cover"
                  src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                  alt="Destination"
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p>Teste</p>
                  <h3 className="font-bold">Testee</h3>
                </figcaption>
              </figure>
            </main>
          </section>
        </div>
      </section>
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <Footer />
    </div>
  );
}

export default Home;
