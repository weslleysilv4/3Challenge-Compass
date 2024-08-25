import Header from "@Components/Header";
import FifthSection from "./FifthSection";
import Footer from "./Footer";
import FourthSection from "./FourthSection";
import Hero from "./Hero";
import SecondSection from "./SecondSection";
import SixthSection from "./SixthSection";
import TirthSection from "./TirthSection";

function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <SecondSection />
      <TirthSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <Footer />
    </div>
  );
}

export default Home;
