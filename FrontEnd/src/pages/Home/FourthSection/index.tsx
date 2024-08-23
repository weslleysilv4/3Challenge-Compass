import Titles from "../../../components/Titles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Quote from "../../../components/Quote";
import Slider from "react-slick";

function FourthSection() {
  return (
    <section className="bg-[#F7F8FA]">
      <div className="container mx-auto">
        <main className="h-[601px] flex items-center justify-center gap-40">
          <aside>
            <figure>
              <img
                src="https://firebasestorage.googleapis.com/v0/b/challenge-compass-d71cc.appspot.com/o/images%2FPhotoDump.png?alt=media&token=ad38c77f-a536-4731-a0a2-f0850588c0fa"
                alt=""
              />
            </figure>
          </aside>
          <aside className="flex flex-col items-center">
            <Titles title="Testimonials" position="center" />
            <h2 className="text-primary font-bold text-4xl">
              What Travelers Say
            </h2>
            <FontAwesomeIcon
              icon={faQuoteRight}
              className="text-4xl text-secondary mt-14"
            />
            <div className="w-[482px]">
              <Slider
                infinite={false}
                dots
                dotsClass="slick-dots slick-thumb"
                arrows={false}
                speed={500}
                slidesToShow={1}
              >
                <Quote
                  quote="The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."
                  author="Molie Rosa"
                  occupation="Photographer"
                />
                <Quote
                  quote="The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."
                  author="Molie Rosa"
                  occupation="Photographer"
                />
                <Quote
                  quote="The UI designs he crafted are top-notch, and the design system he integrated allows for straight forward fixes and bulk updates throughout almost every area of the app."
                  author="Molie Rosa"
                  occupation="Photographer"
                />
              </Slider>
            </div>
          </aside>
        </main>
      </div>
    </section>
  );
}

export default FourthSection;
