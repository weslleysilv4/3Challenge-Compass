import { faCirclePlay, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";
import CardTourType from "../../../components/CardTourType";
import Titles from "../../../components/Titles";

function FourthSection() {
  return (
    <section>
      <div className="container mx-auto">
        <section className="h-[1235px] flex flex-col  gap-20 items-center justify-center ">
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
                Holisticly optimize proactive strategic theme areas rather than
                effective manufactured products create.
              </span>
              <div className="grid grid-cols-2 gap-2">
                <span className="font-bold">
                  <FontAwesomeIcon icon={faCheck} className="text-secondary" />{" "}
                  Travel Plan
                </span>
                <span className="font-bold">
                  <FontAwesomeIcon icon={faCheck} className="text-secondary" />{" "}
                  Cheap Rates
                </span>
                <span className="font-bold">
                  <FontAwesomeIcon icon={faCheck} className="text-secondary" />{" "}
                  Hand-picked Tour
                </span>
                <span className="font-bold">
                  <FontAwesomeIcon icon={faCheck} className="text-secondary" />{" "}
                  Private Guide
                </span>
              </div>
              <button className="transition-colors w-[161px] h-[54px] bg-white font-bold text-primary border-2 border-primary rounded-md hover:bg-secondary hover:text-white hover:border-white">
                Contact Us
              </button>
            </aside>
          </main>
          <footer>
            <Titles title="Browse By Category" position="center" />
            <h2 className="text-primary font-bold text-4xl text-center mt-4">
              Pick a Tour Type
            </h2>
          </footer>
          <div className="w-full mx-auto">
            <Slider
              infinite={false}
              dots
              dotsClass="slick-dots -bottom-16"
              slidesToShow={6}
              arrows={false}
            >
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
              <CardTourType label="Adventure" price={250} />
            </Slider>
          </div>
        </section>
      </div>
    </section>
  );
}

export default FourthSection;
