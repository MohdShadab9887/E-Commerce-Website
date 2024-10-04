import React, { useState } from "react";
import { Link } from "react-router-dom";

function LogIn() {
  // State for form inputs
  const [identifier, setIdentifier] = useState(""); // For email or mobile number
  const [password, setPassword] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { identifier, password });
    // Add logic to handle login (e.g., API call)
  };

  return (
    <div className="flex items-center justify-center bg-gray-100 py-4">
      <div className="w-full max-w-md space-y-6 rounded-lg bg-white p-8 shadow-md">
        <h2 className="text-center text-2xl font-bold text-orange-700">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email or Mobile Number Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email or Mobile Number
            </label>
            <input
              type="text"
              placeholder="Enter your email or mobile number"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-orange-700 focus:outline-none"
              required
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded border border-gray-300 p-2 focus:border-orange-700 focus:outline-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full rounded bg-orange-700 px-4 py-2 text-white hover:bg-orange-800 focus:outline-none focus:ring focus:ring-orange-500 focus:ring-opacity-50"
            >
              Login
            </button>
          </div>
        </form>

        <ul>
          <li>
            <p>Havn't an account ?</p>
            <Link className="font-bold text-orange-700" to="/SignUp">
              Sign-Up
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LogIn;
