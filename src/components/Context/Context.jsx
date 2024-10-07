import {
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";
import axios from "axios";
import reducer from "../ProductReducer/ProductReducer";
import { useAuth0 } from "@auth0/auth0-react";

// Creating contexts
const counterContext = createContext();
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const getLocalCartData = () => {
  const newCartData = localStorage.getItem("MKstorage");
  return newCartData ? JSON.parse(newCartData) : [];
};

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

// Provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cart, setCart] = useState(getLocalCartData());

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const product = await res.data;
      dispatch({ type: "SET_SINGLE_DATA", payload: product });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  useEffect(() => {
    getProducts(API);
  }, []);

  useEffect(() => {
    localStorage.setItem("MKstorage", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    document.title = "E-Commerce Website";
  }, []);

  const formatToINR = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      minimumFractionDigits: 2,
    }).format(amount / 10);
  };

  const total = cart.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const { loginWithRedirect } = useAuth0();
  const { logout } = useAuth0();
  const { user, isAuthenticated, isLoading } = useAuth0();

  // const [profile, setProfile] = useState([])

  // if (user) {
  //   setProfile(user)
  // }

  return (
    <AppContext.Provider
      value={{
        ...state,
        formatToINR,
        cart,
        setCart,
        total,
        totalPrice,
        removeFromCart,
        loginWithRedirect,
        logout,
        isAuthenticated,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, counterContext, useProductContext };
