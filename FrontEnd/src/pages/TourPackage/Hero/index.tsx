import React from "react";
import Form from "../../../components/Form";

function Hero() {
  return (
    <section className="bg-cover bg-[url('https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FTourPackage-header.png?alt=media&token=8e4cacd7-21ba-4500-848e-c12145db6e8b')]">
      <div className="container mx-auto">
        <main className="w-full h-[280px] relative flex flex-col items-center justify-center gap-5">
          <h1 className="text-5xl font-bold text-white">Tour Package</h1>
          <ul>
            <li>
              <a href="#" className="font-bold text-white">
                Home /
              </a>{" "}
              <a href="#" className="font-bold text-secondary">
                Tour Package
              </a>
            </li>
          </ul>
          <Form />
        </main>
      </div>
    </section>
  );
}

export default Hero;
