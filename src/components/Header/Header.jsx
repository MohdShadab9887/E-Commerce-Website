import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import HamNav from "../HamNav/HamNav";

export default function Header({ count, setCount }) {
  const onHamClick = () => {
    <div className="h-screen w-screen bg-black">
      <Link
        to="/LogIn"
        className=" font-bold hover:bg-gray-50 text-orange-700 focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
      >
        Log in
      </Link>
    </div>;
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="text-orange-700  xs:block hidden">
            <button onClick={onHamClick}>
              <RxHamburgerMenu size="1.5em" />
            </button>
          </div>

          <div className="flex xs:hidden items-center lg:order-2">
            <Link
              to="/LogIn"
              className=" font-bold hover:bg-gray-50 text-orange-700 focus:ring-4 focus:ring-gray-300  rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/cart"
              className="text-whitefocus:ring-4 relative text-orange-700 border-black focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5  lg:py-2.5 mr-2 focus:outline-none"
            >
              <FaCartShopping size="1.5em" />
              <div className="bg-white text-center text-orange-700  h-4 w-4 rounded-full absolute lg:right-2 lg:top-[0] md:-top-2 md:right-1 sm:-top-2  right-0 -top-2 sm:right-1 font-bold">
                {count}
              </div>
            </Link>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li>
                <NavLink
                  // to="/about"
                  to="/kdfgml"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Contact-Us
                </NavLink>
              </li>

              {/* <li>
                                <NavLink
                                to="github"
                                    className={({isActive}) =>
                                        `block py-2 pr-4 pl-3 duration-200 ${isActive?"text-orange-700":"text-slate-700"} border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    GitHub
                                </NavLink>
                            </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
