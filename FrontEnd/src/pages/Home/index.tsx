import React from "react";
import Header from "../../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faPaperPlane,
  faUser,
} from "@fortawesome/free-regular-svg-icons";

function Home() {
  return (
    <>
      <Header />
      <section className=" h-[527px] bg-center bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fian-dooley-DuBNA1QMpPA-unsplash.jpg?alt=media&token=360db849-f055-4194-8896-7c8ee308c4a1')]">
        <div className="container mx-auto">
          <main className="relative w-full h-[527px] flex flex-col">
            <div className="flex justify-center items-center h-full">
              <div className="text-center">
                <h2 className="text-2xl font-secondary text-secondary mb-4">
                  Save 15% off in Worldwide
                </h2>
                <h1 className="text-4xl font-bold text-white mb-2">
                  Travel & Adventures
                </h1>
                <p className="text-white">
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
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-primary"
                  />
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
                  <FontAwesomeIcon icon={faFlag} className="text-primary" />
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
    </>
  );
}

export default Home;
