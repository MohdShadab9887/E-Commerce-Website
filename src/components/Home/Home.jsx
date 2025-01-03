import React from "react";
import { Link } from "react-router-dom";
import FeatureProducts from "../FeatureProducts/FeatureProducts";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative mx-2 overflow-hidden rounded-lg text-black sm:mx-16 sm:py-16">
        <div className="relative z-10 mx-auto max-w-screen-xl px-4 pb-20 pt-10 sm:px-6 sm:py-24 lg:px-8">
          <div className="mt-80 max-w-xl space-y-8 text-center sm:ml-auto sm:mt-1 sm:text-right">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Start Shopping
              {/* <span className="hidden sm:block text-4xl">Lorem Ipsum</span> */}
            </h2>

            <Link
              className="inline-flex items-center rounded-lg bg-orange-700 px-6 py-3 font-medium text-white hover:opacity-75"
              to="/shop"
            >
              <svg
                fill="white"
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
              >
                <path d="M1.571 23.664l10.531-10.501 3.712 3.701-12.519 6.941c-.476.264-1.059.26-1.532-.011l-.192-.13zm9.469-11.56l-10.04 10.011v-20.022l10.04 10.011zm6.274-4.137l4.905 2.719c.482.268.781.77.781 1.314s-.299 1.046-.781 1.314l-5.039 2.793-4.015-4.003 4.149-4.137zm-15.854-7.534c.09-.087.191-.163.303-.227.473-.271 1.056-.275 1.532-.011l12.653 7.015-3.846 3.835-10.642-10.612z" />
              </svg>
              &nbsp; Shop Now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 h-full w-full pt-12 sm:my-20 sm:pt-1">
          <img
            className="w-96"
            src="https://images.prismic.io/etvasweb/9f37552b-3a13-4a4c-b1d5-5461a9caf2aa_Remote2.png"
            alt="image1"
          />
        </div>
      </aside>

      <div className="grid place-items-center sm:mt-20">
        <img
          className="w-48 sm:w-96"
          src="https://images.prismic.io/etvasweb/15dc1049-7eb2-4f82-baf8-3ebe59ed4998_Remote1.png"
          alt="image2"
        />
      </div>

      <h1 className="py-10 text-center text-2xl font-medium sm:text-5xl">
        Get Faster Delivery
      </h1>

      <div>
        <FeatureProducts />
      </div>
    </div>
  );
}
