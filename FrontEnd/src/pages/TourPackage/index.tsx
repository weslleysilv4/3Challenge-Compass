import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import SearchBox from "./aside/Search";
import SliderFilter from "./aside/SlideFilter";
import { Checkbox, CheckboxGroup, Select, SelectItem } from "@nextui-org/react";
import SortButton from "../../components/SortButton";
import Card from "../../components/Card";

function TourPackage() {
  return (
    <>
      <Header />
      <Hero />
      <section>
        <div className="container mx-auto">
          <main className="w-full h-[2008px] flex flex-col items-center justify-center gap-5">
            <div className="flex flex-row gap-10">
              <aside className="w-[271px] h-[1694px] flex flex-col gap-5">
                <SearchBox />
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
                  <span>16 Tours</span>
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
                </section>
              </main>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}

export default TourPackage;
