import React from "react";
import Hero from "./Hero";
import Header from "@Components/Header";
import Footer from "@Pages/Home/Footer";
import { useDestinationData } from "@Hooks/useDestinationData";

export default function Destination() {
  const { data } = useDestinationData();
  return (
    <div>
      <Header />
      <Hero />
      <section>
        <div className="container mx-auto">
          <main className="h-[1121px] w-full flex flex-col justify-center items-center">
            <div className="flex flex-col gap-6">
              <main className="grid grid-rows-2 grid-cols-8 gap-8">
                {data?.[0] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[0].image}
                      alt={data[0].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[0].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[0].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[1] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[1].image}
                      alt={data[1].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[1].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[1].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[2] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[2].image}
                      alt={data[2].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[2].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[2].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[3] && (
                  <figure className="col-span-2 row-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-full object-cover"
                      src={data[3].image}
                      alt={data[3].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[4].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[4].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[4] && (
                  <figure className="col-span-3 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[4].image}
                      alt={data[4].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[4].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[4].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[5] && (
                  <figure className="col-span-3 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[5].image}
                      alt={data[5].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[5].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[5].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
              </main>
              <main className="grid grid-rows-2 grid-cols-8 gap-8">
                {data?.[6] && (
                  <figure className="col-span-2 row-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[6].image}
                      alt={data[6].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[6].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[6].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[7] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[7].image}
                      alt={data[7].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[7].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[7].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[8] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[8].image}
                      alt={data[8].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[8].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[8].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[9] && (
                  <figure className="col-span-2 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[9].image}
                      alt={data[9].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[9].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[9].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[10] && (
                  <figure className="col-span-3 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[10].image}
                      alt={data[10].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[10].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[10].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
                {data?.[11] && (
                  <figure className="col-span-3 relative overflow-hidden shadow-lg">
                    <img
                      className="w-full h-48 object-cover"
                      src={data[11].image}
                      alt={data[11].title}
                    />
                    <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                      <p className="text-xs">
                        {data[11].population.toLocaleString()}
                      </p>
                      <h3 className="font-bold font-secondary text-2xl">
                        {data[11].title}
                      </h3>
                    </figcaption>
                  </figure>
                )}
              </main>
            </div>
          </main>
        </div>
      </section>
      <Footer />
    </div>
  );
}
