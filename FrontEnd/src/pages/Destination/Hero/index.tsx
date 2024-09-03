import React from "react";
import Search from "@Components/Search";
import { NavLink } from "react-router-dom";

function Hero() {
  return (
    <section className="bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FTourPackage-header.png?alt=media&token=8e4cacd7-21ba-4500-848e-c12145db6e8b')]">
      <div className="container mx-auto">
        <main className="w-full h-[280px] relative flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-bold text-white">Destination</h1>
          <ul>
            <li>
              <NavLink to="/" className="font-bold text-white">
                Home /
              </NavLink>{" "}
              <NavLink to="#" className="font-bold text-secondary">
                Destination
              </NavLink>
            </li>
          </ul>
          <Search />
        </main>
      </div>
    </section>
  );
}

export default Hero;
