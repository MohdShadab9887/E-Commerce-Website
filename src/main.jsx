import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Home/Home.jsx";
import Shop from "../src/components/Shop/Shop.jsx";
import About from "../src/components/About/About.jsx";
import Contact from "../src/components/Contact/Contact.jsx";
import LogIn from "./components/LogIn/LogIn.jsx";
import Cart from "./components/Cart/Cart.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";
import Error from "./components/Error/Error.jsx";
import SinglePage from "./components/SinglePage/SinglePage.jsx";


const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/shop", element: <Shop /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/LogIn", element: <LogIn /> },
      { path: "/cart", element: <Cart /> },
      { path: "/signup", element: <SignUp /> },
      { path: "*", element: <Error /> },
      { path: "/singlepage/:id", element: <SinglePage /> },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <RouterProvider router={router} />
  // </StrictMode>
);
