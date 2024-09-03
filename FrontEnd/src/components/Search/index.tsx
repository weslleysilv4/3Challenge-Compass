import {
  faPaperPlane,
  faFlag,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAllCategoriesData } from "@Hooks/useCategoriesData";
import { today, getLocalTimeZone, CalendarDate } from "@internationalized/date";
import { DatePicker, Input, Select, SelectItem } from "@nextui-org/react";
import { searchSchema } from "@Schemas/search";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";
import queryClient from "src/lib/tanstack-query";

interface SearchFormValues {
  destination: string;
  categories: string;
  date: string;
  guests: string;
}

export default function SearchForm() {
  const [searchParams] = useSearchParams();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<SearchFormValues>({
    values: {
      destination: searchParams.get("destination") || "",
      categories: searchParams.get("categories") || "",
      date: searchParams.get("date") || "",
      guests: searchParams.get("guests") || "",
    },
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();
  const { data: categories } = useAllCategoriesData();

  const onSubmit = (data: SearchFormValues) => {
    const params = new URLSearchParams();

    if (data.destination) params.set("destination", data.destination);
    if (data.categories) params.set("categories", data.categories);
    if (data.date) params.set("date", data.date);
    if (data.guests) params.set("guests", data.guests);

    queryClient.invalidateQueries({ queryKey: ["tours"] });
    navigate(`/tours?${params.toString()}`);
  };

  return (
    <form
      method="GET"
      className="absolute flex gap-6 items-center mx-auto px-6 self-center h-[110px] -bottom-11 bg-white rounded-xl drop-shadow-md"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col w-1/5">
        <label htmlFor="search" className="text-primary font-secondary">
          Destination
        </label>
        <Input
          {...register("destination")}
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
        {errors.destination && (
          <small className="text-red-500">{errors.destination.message}</small>
        )}
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
          onChange={(e) => {
            setValue("categories", e.target.value);
          }}
        >
          {categories ? (
            categories.map((category) => (
              <SelectItem key={category.id}>{category.name}</SelectItem>
            ))
          ) : (
            <SelectItem key="none">None Category</SelectItem>
          )}
        </Select>
        {errors.categories && (
          <small className="text-red-500">{errors.categories.message}</small>
        )}
      </div>
      <div className="flex flex-col w-1/5">
        <label htmlFor="date" className="text-primary font-secondary">
          When
        </label>
        <DatePicker
          id="date"
          variant="bordered"
          className="outline-none text-tertiary"
          defaultValue={today(getLocalTimeZone())}
          dateInputClassNames={{ inputWrapper: "rounded-md" }}
          classNames={{
            selectorButton: "order-first",
          }}
          onChange={(e: CalendarDate) => setValue("date", e.toString())}
        />
        {errors.date && (
          <small className="text-red-500">{errors.date.message}</small>
        )}
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
          {...register("guests")}
        />
        {errors.guests && (
          <small className="text-red-500">{errors.guests.message}</small>
        )}
      </div>
      <button className="bg-secondary rounded-md text-white h-10 px-4">
        Search
      </button>
    </form>
  );
}
