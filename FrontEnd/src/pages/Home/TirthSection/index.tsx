import React from "react";
import Titles from "@Components/Titles";

function TirthSection() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto">
        <section className="flex flex-col h-[772px] gap-6 items-center justify-center ">
          <Titles title="Destination" position="center" />
          <h1 className="text-primary font-bold text-4xl mb-10">
            Top Attractions Destinations
          </h1>
          <main className="grid grid-rows-2 grid-cols-8 gap-8">
            <figure className="col-span-2 relative overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
            <figure className="col-span-2 relative overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
            <figure className="col-span-2 relative overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
            <figure className="col-span-2 row-span-2 relative overflow-hidden shadow-lg ">
              <img
                className="w-full h-full object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
            <figure className="col-span-3 relative overflow-hidden shadow-lg ">
              <img
                className="w-full h-48 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
            <figure className="col-span-3 relative overflow-hidden shadow-lg">
              <img
                className="w-full h-48 object-cover"
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2Fcapa.png?alt=media&token=6cbbae71-fd81-43c5-84a9-13941ba49a4e"
                alt="Destination"
              />
              <figcaption className="absolute bottom-0 left-0 p-4 text-white">
                <p>Teste</p>
                <h3 className="font-bold">Testee</h3>
              </figcaption>
            </figure>
          </main>
        </section>
      </div>
    </section>
  );
}

export default TirthSection;
