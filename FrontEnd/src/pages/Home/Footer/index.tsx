import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@Components/Logo";
import {
  faLinkedin,
  faSquareFacebook,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import EmailSubscription from "@Components/EmailSubscription";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto">
        <main className="h-[446px] flex items-center justify-center">
          <main className="h-[242px] flex items-center justify-center gap-20 ">
            <aside className="text-white w-1/4 l h-full flex flex-col gap-5 border-r-2">
              <Logo variant="secondary" />
              <span className="font-secondary text-white">Need any help?</span>
              <h6 className="font-bold text-lg">
                Call Us:{" "}
                <a href="tel:+88812345678" className="text-secondary">
                  (888)1234 5678
                </a>
              </h6>
              <span className="font-light">
                Love Street, Muscat, Oman exaample@trisog.com
              </span>
              <div className="flex gap-5">
                <a
                  href="http://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faSquareFacebook} />
                </a>
                <a
                  href="http://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="http://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </div>
            </aside>
            <aside className="text-white w-2/4 h-full flex items-center gap-10 border-r-2">
              <div className="h-[178px] flex flex-col gap-5 flex-wrap justify-center">
                <h6 className="font-secondary">Company</h6>
                <ul className="flex flex-col gap-2">
                  <li>
                    <a href="#" className="hover:text-secondary">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                      Contact US
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                      Travel Guides
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-secondary">
                      Data Policy
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col flex-wrap justify-center h-[178px] w-[232px] gap-5">
                <h6 className="font-secondary">Top Destination</h6>
                <div className="flex flex-row gap-5">
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Las Vegas
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        New York City
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        San Francisco
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Hawaii
                      </a>
                    </li>
                  </ul>
                  <ul className="flex flex-col gap-2">
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Tokyo
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Sydney
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Melbourne
                      </a>
                    </li>
                    <li>
                      <a href="#" className="hover:text-secondary">
                        Dubai
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            <aside className="text-white w-1/4 h-full justify-center items-start flex flex-col gap-5">
              <h6 className="font-secondary">Sign up Newsletter</h6>
              <EmailSubscription />
              <span className="font-light text-tertiary">
                2023 Trisog All Right Reserved
              </span>
            </aside>
          </main>
        </main>
      </div>
    </footer>
  );
}

export default Footer;
