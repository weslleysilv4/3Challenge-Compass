import {
  faPaperPlane,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Form() {
  return (
    <form className="absolute flex gap-6 items-center mx-auto px-6 self-center h-[110px] -bottom-11 bg-white rounded-xl drop-shadow-md">
      <div className="flex flex-col">
        <label htmlFor="search" className="text-primary font-secondary">
          Destination
        </label>
        <div className="flex gap-2 items-center outline-none border-2 border-gray-100 rounded-md h-10 px-4">
          <FontAwesomeIcon icon={faPaperPlane} className="text-tertiary" />
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
          <FontAwesomeIcon icon={faFlag} className="text-tertiary" />
          <select defaultValue="" className="text-tertiary">
            <option value="" disabled>
              Activity
            </option>
            <option value="" className="text-primary">
              Beaches
            </option>
            <option value="" className="text-primary">
              Boat Tours
            </option>
            <option value="" className="text-primary">
              City Tours
            </option>
            <option value="" className="text-primary">
              Food
            </option>
            <option value="" className="text-primary">
              Hiking
            </option>
            <option value="" className="text-primary">
              Honeymoon
            </option>
            <option value="" className="text-primary">
              Museum Tours
            </option>
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
          <FontAwesomeIcon icon={faUser} className="text-tertiary" />
          <input
            type="number"
            placeholder="0"
            className="outline-none"
            min={0}
            inputMode="numeric"
          />
        </div>
      </div>
      <button className="bg-secondary rounded-md text-white h-10 px-4">
        Search
      </button>
    </form>
  );
}

export default Form;
