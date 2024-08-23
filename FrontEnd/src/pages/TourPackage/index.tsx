import React from "react";
import Header from "../../components/Header";
import Hero from "./Hero";
import SearchBox from "./aside/Search";
import SliderFilter from "./aside/SlideFilter";

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
              </aside>
              <main>
                <section className="grid grid-cols-3 gap-10">
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
                  <article className="w-[360px] h-[500px] bg-red-500"></article>
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
