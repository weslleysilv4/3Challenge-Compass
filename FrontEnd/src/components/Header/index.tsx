import {
  faGoogle,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header() {
  return (
    <header className="">
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-2 text-xs text-primary">
            <div className="py-2">
              <a href="tel: +(000)999-898-99">(000)999-898-999</a>
              <span> | </span>
              <a href="mailto:info@trisog.com">info@trisog.com</a>
            </div>
            <div className="flex w-32 justify-end items-center">
              <div className="flex w-full justify-evenly">
                <a href="https://www.x.com" target="_blank">
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.x.com"
                  target="_blank"
                  className="text-primary"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://www.x.com" target="_blank">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
              <span> | </span>
              <select className="bg-gray-100" name="currency" id="">
                <option value="usd">USD</option>
                <option value="euro">EURO</option>
                <option value="BRL">BRL</option>
              </select>
            </div>
          </header>
        </div>
      </div>
      <header>
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <nav className="flex w-full bg-red-50 ">
              <ul className="lg:flex flex-1 justify-start md:hidden">
                <li>
                  <a href="#">
                    <img src="../../assets/logo.png" alt="logo" />
                  </a>
                </li>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Tours</a>
                </li>
                <li>
                  <a href="#">Destination</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
            </nav>
            <nav className="">
              <ul className="flex">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Register</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </header>
  );
}

export default Header;
