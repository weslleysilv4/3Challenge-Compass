import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faFlag,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";
import Titles from "../../components/Titles";
import Card from "../../components/Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TravelCounters from "../../components/TravelCounters";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
      <section>
        <div className="container mx-auto">
          <section className="h-[1235px] flex flex-col  gap-28 items-center justify-center ">
            <main className="flex flex-row justify-center items-center h-[526px] w-full gap-32">
              <div className="w-[569px] h-full relative">
                <figure className="-rotate-12 -z-10">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fjake-blucker-tMzCrBkM99Y-unsplash.jpg?alt=media&token=f3e7ec6d-f8d9-429c-a4fd-c99d501158dc"
                    alt=""
                    className="h-[375px] w-[334px] object-cover"
                  />
                </figure>
                <figure className="z-10 absolute top-28 right-0 ">
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fjulentto-photography-CIuakYIjadc-unsplash.jpg?alt=media&token=ba8043ab-30ba-4174-8600-02eb388a2e5d"
                    alt=""
                    className="h-[424px] w-[334px] object-cover"
                  />
                </figure>
                <button className="absolute bottom-8 text-2xl left-32 z-20 font-secondary border-2 border-white bg-secondary text-white h-[77px] w-[280px] hover:bg-primary ">
                  <FontAwesomeIcon icon={faCirclePlay} /> Watch Now
                </button>
              </div>
              <aside className="w-[364px] flex flex-col gap-6">
                <Titles title="Why Choose Us" position="left" />
                <h2 className="text-primary font-bold text-4xl">
                  Our Experiences Meet High Quality Standards
                </h2>
                <span>
                  Holisticly optimize proactive strategic theme areas rather
                  than effective manufactured products create.
                </span>
                <div className="grid grid-cols-2 gap-2">
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> Travel Plan
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> Cheap Rates
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> Hand-picked Tour
                  </span>
                  <span>
                    <FontAwesomeIcon icon={faCheck} /> Private Guide
                  </span>
                </div>
                <button className="transition-colors w-[161px] h-[54px] bg-white font-bold text-primary border-2 border-primary rounded-md hover:bg-secondary hover:text-white hover:border-white">
                  Contact Us
                </button>
              </aside>
            </main>
            <footer>
              <Titles title="Browse By Category" position="center" />
              <h2 className="text-primary font-bold text-4xl text-center">
                Pick a Tour Type
              </h2>
            </footer>
          </section>
        </div>
      </section>
    </div>
  );
}

export default Home;
