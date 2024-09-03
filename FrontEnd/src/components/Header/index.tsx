import {
  faGoogle,
  faPinterest,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Logo";
import { Link, NavLink } from "react-router-dom";
import UserProfile from "@Components/UserProfile";
import { AuthContext } from "@Contexts/Auth";
import { useContext } from "react";
import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { SignOut } from "@phosphor-icons/react";
import { logout } from "@Services/firebaseLogins";

function Header() {
  const { user } = useContext(AuthContext);

  return (
    <header className="">
      <div className="bg-gray-100">
        <div className="container mx-auto">
          <header className="flex justify-between items-center py-1 text-xs text-primary">
            <nav>
              <a href="tel: +(000)999-898-99">(000)999-898-999</a>
              <span> | </span>
              <a href="mailto:info@trisog.com">info@trisog.com</a>
            </nav>
            <div className="flex w-32 justify-end items-center">
              <div className="flex w-full justify-evenly">
                <a
                  href="https://www.x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faXTwitter} />
                </a>
                <a
                  href="https://www.google.com.br/"
                  target="_blank"
                  className="text-primary"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faGoogle} />
                </a>
                <a
                  href="https://br.pinterest.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
                    <NavLink to="/destination">Destination</NavLink>
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
              <ul className="flex items-center justify-between text-primary gap-2 ">
                <li>
                  <a href="#">
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </a>
                </li>
                <li>
                  {user ? (
                    <Dropdown>
                      <DropdownTrigger>
                        <Button variant="light">
                          <UserProfile />
                        </Button>
                      </DropdownTrigger>
                      <DropdownMenu aria-label="Static Actions">
                        <DropdownItem
                          key="logout"
                          className="flex flex-row"
                          color="default"
                          onClick={() => logout()}
                        >
                          <span className="flex gap-2">
                            <SignOut size={18} />
                            Logout
                          </span>
                        </DropdownItem>
                      </DropdownMenu>
                    </Dropdown>
                  ) : (
                    <Link to="/login" className="font-bold text-sm">
                      <FontAwesomeIcon icon={faUser} /> Login / Signup
                    </Link>
                  )}
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
