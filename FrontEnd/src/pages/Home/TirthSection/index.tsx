import React from "react";
import Titles from "@Components/Titles";
import { useDestinationData } from "@Hooks/useDestinationData";
import { useNavigate } from "react-router-dom";

function TirthSection() {
  const { data } = useDestinationData();
  const navigate = useNavigate();

  const handleCardClick = (id: string) => {
    navigate(`/destination/${id}`);
  };

  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto">
        <section className="flex flex-col h-[772px] gap-6 items-center justify-center">
          <Titles title="Destination" position="center" />
          <h1 className="text-primary font-bold text-4xl mb-10">
            Top Attractions Destinations
          </h1>
          <main className="grid grid-rows-2 grid-cols-8 gap-8">
            {data?.[0] && (
              <figure
                className="col-span-2 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[0].id)}
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={data[0].image}
                  alt={data[0].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[0].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[0].title}
                  </h3>
                </figcaption>
              </figure>
            )}
            {data?.[1] && (
              <figure
                className="col-span-2 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[1].id)}
              >
                <img
                  className="w-full h-48 object-cover object-center "
                  src={data[1].image}
                  alt={data[1].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[1].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[1].title}
                  </h3>
                </figcaption>
              </figure>
            )}
            {data?.[2] && (
              <figure
                className="col-span-2 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[2].id)}
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={data[2].image}
                  alt={data[2].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[2].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[2].title}
                  </h3>
                </figcaption>
              </figure>
            )}
            {data?.[3] && (
              <figure
                className="col-span-2 row-span-2 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[3].id)}
              >
                <img
                  className="w-full h-full object-cover object-center"
                  src={data[3].image}
                  alt={data[3].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[3].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[3].title}
                  </h3>
                </figcaption>
              </figure>
            )}
            {data?.[4] && (
              <figure
                className="col-span-3 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[4].id)}
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={data[4].image}
                  alt={data[4].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[4].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[4].title}
                  </h3>
                </figcaption>
              </figure>
            )}
            {data?.[5] && (
              <figure
                className="col-span-3 relative overflow-hidden shadow-lg cursor-pointer"
                onClick={() => handleCardClick(data?.[5].id)}
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={data[5].image}
                  alt={data[5].title}
                />
                <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                  <p className="text-xs">
                    {data[5].population.toLocaleString()}
                  </p>
                  <h3 className="font-bold font-secondary text-3xl">
                    {data[5].title}
                  </h3>
                </figcaption>
              </figure>
            )}
          </main>
        </section>
      </div>
    </section>
  );
}

export default TirthSection;
