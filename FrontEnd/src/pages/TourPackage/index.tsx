import React, { useEffect, useRef, useState } from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import SearchBox from "./Aside/Search";
import SliderFilter from "./Aside/SlideFilter";
import {
  Checkbox,
  CheckboxGroup,
  Pagination,
  Select,
  SelectItem,
} from "@nextui-org/react";
import SortButton from "../../components/SortButton";
import Card from "../../components/Card";
import Footer from "../Home/Footer";
import { TourProps, TourResponse } from "@Types/Tour";
import axios from "axios";

function TourPackage() {
  const [tours, setTours] = useState<TourProps[]>([]);
  const [response, setResponse] = useState<TourResponse>();
  const [search, setSearch] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await axios.get<TourResponse>(
          `${import.meta.env.VITE_API_BASE_URL}/tours`
        );
        setResponse(response.data);
        setTours(response.data.tours);
      } catch (error) {
        console.error("Error fetching tours:", error);
      }
    };
    fetchTours();
    document.title = "Tour Package";
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <section>
        <div className="container mx-auto">
          <main className="w-full h-[2008px] flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row gap-10">
              <aside className="w-[271px] h-[1694px] flex flex-col gap-5">
                <SearchBox
                  ref={searchInputRef}
                  placeholder="Type anything..."
                  onChange={setSearch}
                  value={search}
                />
                <SliderFilter />
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">Categories</h6>
                  <CheckboxGroup label="Select a category" color="secondary">
                    <Checkbox value="adventure">Adventure</Checkbox>
                    <Checkbox value="beaches">Beaches</Checkbox>
                    <Checkbox value="city-tours">City Tours</Checkbox>
                    <Checkbox value="food">Food</Checkbox>
                    <Checkbox value="hiking">Hiking</Checkbox>
                    <Checkbox value="honeymoon">Honeymoon</Checkbox>
                    <Checkbox value="museum-tours">Museum Tours</Checkbox>
                  </CheckboxGroup>
                </div>
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">
                    Destinations
                  </h6>
                  <div className="flex flex-col gap-4 mt-4">
                    <CheckboxGroup
                      label="Africa"
                      classNames={{
                        label: "text-primary text-md font-bold",
                      }}
                      color="secondary"
                    >
                      <Checkbox value="marroco">Marroco</Checkbox>
                      <Checkbox value="tanzania">Tanzania</Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup
                      label="Americas"
                      classNames={{
                        label: "text-primary text-md font-bold",
                      }}
                      color="secondary"
                    >
                      <Checkbox value="argentina">Argentina</Checkbox>
                      <Checkbox value="canada">Canada</Checkbox>
                      <Checkbox value="colombia">Colombia</Checkbox>
                      <Checkbox value="costa-rica">Costa Rica</Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup
                      label="Asia"
                      classNames={{
                        label: "text-primary text-md font-bold",
                      }}
                      color="secondary"
                    >
                      <Checkbox value="cambodia">Cambodia</Checkbox>
                      <Checkbox value="japan">Japan</Checkbox>
                      <Checkbox value="nepal">Nepal</Checkbox>
                      <Checkbox value="thailand">Thailand</Checkbox>
                      <Checkbox value="vietnam">Viet Nam</Checkbox>
                    </CheckboxGroup>
                    <CheckboxGroup
                      label="Europe"
                      classNames={{
                        label: "text-primary text-md font-bold",
                      }}
                      color="secondary"
                    >
                      <Checkbox value="france">France</Checkbox>
                      <Checkbox value="greece">Greece</Checkbox>
                    </CheckboxGroup>
                  </div>
                </div>
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">Reviews</h6>
                  <div className="flex flex-col gap-2 mt-4">
                    <CheckboxGroup
                      classNames={{
                        label: "text-primary text-md font-bold",
                      }}
                      color="secondary"
                    >
                      <Checkbox value="5">5 Stars</Checkbox>
                      <Checkbox value="4">4 Stars & Up</Checkbox>
                      <Checkbox value="3">3 Stars & Up</Checkbox>
                      <Checkbox value="2">2 Stars & Up</Checkbox>
                      <Checkbox value="1">1 Stars & Up</Checkbox>
                    </CheckboxGroup>
                  </div>
                </div>
              </aside>
              <main>
                <div className="flex flex-row justify-between items-center">
                  <span>{response?.totalTours} Tours</span>
                  <div className="flex flex-row items-center gap-2">
                    <span>Sort By</span>
                    <SortButton />
                    <Select
                      color="secondary"
                      className="w-[200px]"
                      placeholder="Filter by"
                      variant="bordered"
                      aria-label="Select the filter option"
                    >
                      <SelectItem key={"title"} value={"title"}>
                        Title
                      </SelectItem>
                      <SelectItem key={"price"} value={"price"}>
                        Price
                      </SelectItem>
                      <SelectItem key={"rating"} value={"rating"}>
                        Rating
                      </SelectItem>
                    </Select>
                  </div>
                </div>
                <section className="grid grid-cols-3 gap-10 mt-6">
                  {tours.map((tour) => (
                    <Card
                      key={tour.id}
                      image={tour.image}
                      city={tour.city}
                      country={tour.country}
                      title={tour.name}
                      rating={tour.initialRatingAverage}
                      reviewsCount={tour.reviews.length}
                      duration={tour.duration}
                      price={tour.price}
                    />
                  ))}
                  <div className="col-span-3 mx-auto">
                    <Pagination
                      showControls
                      total={response?.totalPages || 1}
                      initialPage={1}
                      radius="full"
                      variant="light"
                      color="secondary"
                    />
                  </div>
                </section>
              </main>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default TourPackage;
