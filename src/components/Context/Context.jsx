import {
  createContext,
  useEffect,
  useReducer,
  useState,
  useContext,
} from "react";
import axios from "axios";
import reducer from "../ProductReducer/ProductReducer";

// Creating contexts
const counterContext = createContext();
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

// Provider component
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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
  

  const getSingleProduct = async (url)=>{
    dispatch({ type: "SET_LOADING" });

    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_SINGLE_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  }

  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

// Correct export: Named export instead of default
export { AppContext, AppProvider, counterContext, useProductContext };
