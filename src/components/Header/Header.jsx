import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import HamNav from "../HamNav/HamNav";
import { useProductContext } from "../Context/Context";
import Cart from "../Cart/Cart";
import { useState, useEffect } from "react";

export default function Header({ count, setCount }) {
  const { isLoading, formatToINR, cart, setCart, total } = useProductContext();
  const [cartTotal, setCartTotal] = useState(0);

  // useEffect(() => {
    
  //   setCartTotal(total);
    
  // }, [cartTotal])
  

  const onHamClick = () => {
    <div className="h-screen w-screen bg-black">
      <Link
        to="/LogIn"
        className="mr-2 rounded-lg px-4 py-2 text-sm font-bold text-orange-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
      >
        Log in
      </Link>
    </div>;
  };

  return (
    <header className="sticky top-0 z-50 shadow">
      <nav className="border-gray-200 bg-white px-4 py-2.5 lg:px-6">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12"
              alt="Logo"
            />
          </Link>

          <div className="hidden text-orange-700 xs:block">
            <button onClick={onHamClick}>
              <RxHamburgerMenu size="1.5em" />
            </button>
          </div>

          <div className="flex items-center lg:order-2 xs:hidden">
            <Link
              to="/LogIn"
              className="mr-2 rounded-lg px-4 py-2 text-sm font-bold text-orange-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
            >
              Log in
            </Link>
            <Link
              to="/cart"
              className="text-whitefocus:ring-4 relative mr-2 rounded-lg border-black px-4 text-sm font-medium text-orange-700 focus:outline-none focus:ring-orange-300 lg:px-5 lg:py-2.5"
            >
              <FaCartShopping size="1.5em" />
              <div className="absolute -top-2 right-0 h-4 w-4 rounded-full bg-white text-center font-bold text-orange-700 sm:-top-2 sm:right-1 md:-top-2 md:right-1 lg:right-2 lg:top-[0]">
              {total? total:""}
              </div>
            </Link>
          </div>
          <div
            className="hidden w-full items-center justify-between lg:order-1 lg:flex lg:w-auto"
            id="mobile-menu-2"
          >
            <ul className="mt-4 flex flex-col font-medium lg:mt-0 lg:flex-row lg:space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/shop"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
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
                    `block py-2 pl-3 pr-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `block py-2 pl-3 pr-4 duration-200 ${
                      isActive ? "text-orange-700" : "text-slate-700"
                    } border-b border-gray-100 hover:bg-gray-50 hover:text-orange-700 lg:border-0 lg:p-0 lg:hover:bg-transparent`
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
