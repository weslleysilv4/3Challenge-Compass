import {
  faGoogle,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="">
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-1 text-xs text-primary">
            <div className="">
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
                  href="https://www.google.com.br/"
                  target="_blank"
                  className="text-primary"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a href="https://br.pinterest.com/" target="_blank">
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
          <div className="flex justify-between items-center py-6">
            <div className="flex justify-between items-center w-[42rem] ">
              <div className="mr-8">
                <NavLink to="/">
                  <Logo />
                </NavLink>
              </div>
              <nav className="flex w-full h-full items-center">
                <ul className="lg:flex flex-1 justify-between text-primary  md:hidden">
                  <li className="hover:text-secondary">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">About</a>
                  </li>
                  <li className="hover:text-secondary">
                    <NavLink to="/tours">Tours</NavLink>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">Destination</a>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">Blog</a>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">Pages</a>
                  </li>
                  <li className="hover:text-secondary">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
            <nav className="w-36">
              <ul className="flex items-center justify-between text-primary ">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
                <li>
                  <a href="#" className="font-bold text-sm">
                    <FontAwesomeIcon icon={faUser} /> Login / Signup
                  </a>
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
