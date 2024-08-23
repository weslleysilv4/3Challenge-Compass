import React from "react";
import Titles from "../../../components/Titles";
import CardGuides from "../../../components/CardGuides";

function FifthSection() {
  return (
    <section>
      <div className="container mx-auto">
        <main className="h-[696px] flex flex-col items-center justify-center gap-10">
          <Titles title="Updates" position="center" />
          <h3 className="text-primary font-bold text-5xl">
            Latest Travel Guide
          </h3>
          <section className="grid grid-cols-2 grid-rows-2 gap-10 ">
            <CardGuides
              title="The Impact of Covid-19 on travel & tourism industry"
              date="July 13, 2023"
              author="Admin"
            />
            <CardGuides
              title="The Impact of Covid-19 on travel & tourism industry"
              date="July 13, 2023"
              author="Admin"
            />
            <CardGuides
              title="The Impact of Covid-19 on travel & tourism industry"
              date="July 13, 2023"
              author="Admin"
            />
            <CardGuides
              title="The Impact of Covid-19 on travel & tourism industry"
              date="July 13, 2023"
              author="Admin"
            />
          </section>
        </main>
      </div>
    </section>
  );
}

export default FifthSection;
