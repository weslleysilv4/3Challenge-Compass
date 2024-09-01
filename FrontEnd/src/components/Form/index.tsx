import {
  faPaperPlane,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { today, getLocalTimeZone } from "@internationalized/date";
import { DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import { Category } from "@Types/Tour";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Form() {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const { data } = await axios.get<Category[]>(
          `${import.meta.env.VITE_API_BASE_URL}/categories`
        );
        setCategories(data);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };

    fetchCategories();
  }, []);
  return (
    <form className="absolute flex gap-6 items-center mx-auto px-6 self-center h-[110px] -bottom-11 bg-white rounded-xl drop-shadow-md">
      <div className="flex flex-col w-1/5">
        <label htmlFor="search" className="text-primary font-secondary">
          Destination
        </label>
        <Input
          type="text"
          isClearable
          placeholder="Where to go?"
          className="outline-none"
          variant="bordered"
          radius="sm"
          startContent={
            <FontAwesomeIcon icon={faPaperPlane} className="text-tertiary" />
          }
        />
      </div>
      <div className="flex flex-col w-1/5">
        <label htmlFor="search" className="text-primary font-secondary">
          Type
        </label>
        <Select
          className="text-tertiary max-w-[250px]"
          variant="bordered"
          radius="sm"
          placeholder="Activity"
          startContent={
            <FontAwesomeIcon icon={faFlag} className="text-tertiary" />
          }
        >
          {categories.map((category) => (
            <SelectItem key={category.id} value={category.id}>
              {category.name}
            </SelectItem>
          ))}
        </Select>
      </div>
      <div className="flex flex-col w-1/5">
        <label htmlFor="date" className="text-primary font-secondary">
          When
        </label>
        <DatePicker
          id="date"
          variant="bordered"
          className="outline-none text-tertiary"
          defaultValue={today(getLocalTimeZone()).subtract({ days: 1 })}
          dateInputClassNames={{ inputWrapper: "rounded-md" }}
          classNames={{
            selectorButton: "order-first",
          }}
        />
      </div>
      <div className="flex flex-col w-1/5">
        <label htmlFor="search" className="text-primary font-secondary">
          Guests
        </label>
        <Input
          type="number"
          isClearable
          placeholder="0"
          className="outline-none"
          min={0}
          inputMode="numeric"
          variant="bordered"
          radius="sm"
          startContent={
            <FontAwesomeIcon icon={faUser} className="text-tertiary" />
          }
        />
      </div>
      <button className="bg-secondary rounded-md text-white h-10 px-4">
        Search
      </button>
    </form>
  );
}

export default Form;
