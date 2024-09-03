import React, { useEffect, useState } from "react";
import Header from "@Components/Header";
import Hero from "./Hero";
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Input,
  Pagination,
  Slider,
} from "@nextui-org/react";
import Card from "@Components/Card";
import Footer from "../Home/Footer";
import { useTourDataByParams } from "@Hooks/useTourData";
import { useNavigate, useSearchParams } from "react-router-dom";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAllCategoriesData } from "@Hooks/useCategoriesData";
import { debounce } from "lodash";

function TourPackage() {
  const [search, setSearch] = useSearchParams();
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [sliderValue, setSliderValue] = useState<number | number[]>(1000);
  const { data: tourData } = useTourDataByParams(search);
  const { data: categorieData } = useAllCategoriesData();

  useEffect(() => {
    document.title = "Tour Package | Trisog";
    if (!search.get("take")) {
      search.set("take", "9");
      setSearch(search, { replace: true });
    }

    if (!search.get("skip")) {
      search.set("skip", "1");
      setSearch(search, { replace: true });
    }
  }, []);

  const onSearchChange = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    if (text.length === 0) {
      search.delete("destination");
      setSearch(search, {
        replace: true,
      });
    } else {
      search.set("destination", text);
      setSearch(search, {
        replace: true,
      });
    }
  }, 500);

  const onSliderChange = (value: number | number[]) => {
    setSliderValue(value);
  };
  const onSubmit = () => {
    if (sliderValue === 0) {
      search.delete("price");
    } else {
      search.set("price", sliderValue.toString());
    }
    setSearch(search, { replace: true });
  };
  const handleCardClick = (id: string) => {
    navigate(`/tours/${id}`);
  };
  const onCheckBoxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const updatedCategories = e.target.checked
      ? [...selectedCategories, value]
      : selectedCategories.filter((category) => category !== value);

    setSelectedCategories(updatedCategories);

    if (updatedCategories.length > 0) {
      search.set("categories", updatedCategories.join(","));
    } else {
      search.delete("categories");
    }

    setSearch(search, { replace: true });
  };

  const onRatingChange = (e: string[]) => {
    const value = e;
    if (value.length > 0) {
      search.set("rating", value.map((v) => v).join(","));
    } else {
      search.delete("rating");
    }
    setSearch(search, { replace: true });
  };

  const onCountryChange = (e: string[]) => {
    const value = e;
    if (value.length === 0) {
      search.delete("country");
    } else {
      search.set("country", value.map((v) => v).join(","));
    }
    setSearch(search, { replace: true });
  };
  const onPageChange = (page: number) => {
    search.set("page", page.toString());
    setSearch(search, { replace: true });
  };
  const groupedByContinent = tourData?.tours.reduce((acc, tour) => {
    if (!acc[tour.continent]) {
      acc[tour.continent] = new Set();
    }
    acc[tour.continent].add(tour.city);
    return acc;
  }, {} as Record<string, Set<string>>);
  return (
    <>
      <Header />
      <Hero />
      <section>
        <div className="container mx-auto">
          <main className="w-full h-[2008px] flex flex-col items-start justify-center gap-5">
            <div className="flex w-full flex-row gap-10">
              <aside className="min-w-[264px] h-[1694px] flex flex-col gap-5">
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">Search</h6>
                  <Input
                    type="text"
                    placeholder="Type anything..."
                    variant="flat"
                    radius="none"
                    color="default"
                    onChange={onSearchChange}
                    endContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
                  />
                </div>
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">Filter By</h6>
                  <div className="flex flex-col gap-2 w-full max-w-md">
                    <Slider
                      size="sm"
                      step={5}
                      formatOptions={{ style: "currency", currency: "USD" }}
                      color="secondary"
                      maxValue={5000}
                      onChange={onSliderChange}
                      minValue={0}
                      defaultValue={sliderValue}
                      className="max-w-md"
                    />
                    <div className="flex justify-between">
                      <p>${sliderValue}.00</p>
                      <p className="font-bold">$ 1500.00</p>
                    </div>
                  </div>
                  <Button color="secondary" className="mt-2" onClick={onSubmit}>
                    Submit
                  </Button>
                </div>
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">Categories</h6>
                  <CheckboxGroup label="Select a category" color="secondary">
                    {categorieData?.map((category) => (
                      <Checkbox
                        key={category.id}
                        value={category.id.toString()}
                        onChange={onCheckBoxChange}
                      >
                        {category.name}
                      </Checkbox>
                    ))}
                  </CheckboxGroup>
                </div>
                <div className="p-7 bg-[#F7F8FA]">
                  <h6 className="text-primary font-bold text-lg">
                    Destinations
                  </h6>
                  <div className="flex flex-col gap-4 mt-4">
                    {groupedByContinent &&
                      Object.keys(groupedByContinent).map((continent) => (
                        <CheckboxGroup
                          key={continent}
                          label={continent}
                          classNames={{
                            label: "text-primary text-md font-bold",
                          }}
                          onChange={onCountryChange}
                          color="secondary"
                        >
                          {[...groupedByContinent[continent]].map((city) => (
                            <Checkbox key={city} value={city}>
                              {city}
                            </Checkbox>
                          ))}
                        </CheckboxGroup>
                      ))}
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
                      onChange={onRatingChange}
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
              <main className="w-full">
                <section className="grid grid-cols-3 gap-10 mt-6">
                  {tourData && tourData?.totalTours > 0 ? (
                    tourData?.tours.map((tour) => (
                      <Card
                        key={tour.id}
                        image={tour.image}
                        city={tour.city}
                        country={tour.country.name}
                        title={tour.name}
                        rating={tour.initialRatingAverage}
                        reviewsCount={tour.reviews.length}
                        duration={tour.duration}
                        price={tour.price}
                        onClick={() => handleCardClick(tour.id)}
                      />
                    ))
                  ) : (
                    <div className="col-span-3 mx-auto w-full">
                      <h1 className="text-center text-primary font-bold text-2xl">
                        No tours found..
                      </h1>
                    </div>
                  )}
                  <div className="col-span-3 mx-auto">
                    <Pagination
                      showControls
                      total={tourData?.totalPages || 0}
                      initialPage={Number(search.get("page") || 1)}
                      radius="full"
                      variant="light"
                      color="secondary"
                      onChange={onPageChange}
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
