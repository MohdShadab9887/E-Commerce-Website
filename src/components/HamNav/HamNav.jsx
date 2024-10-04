import React from "react";
import { Link } from "react-router-dom";

function HamNav() {
  return (
    <div>
      <div className="flex h-screen w-screen items-center justify-center">
        <Link
          to="/LogIn"
          className="mr-2 rounded-lg px-4 py-2 text-sm font-bold text-orange-700 hover:bg-gray-50 focus:outline-none focus:ring-4 focus:ring-gray-300 lg:px-5 lg:py-2.5"
        >
          Log in
        </Link>
      </div>
    </div>
  );
}

export default HamNav;
