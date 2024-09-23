import { React, useContext } from "react";
import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";

// import counterContext from '../Context/Context
import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

function Shop() {
  let value = useContext(counterContext);
  const { isLoading, products, featureProducts } = useProductContext();

  function increment() {
    value.setCount((prevCount) => Number(prevCount) + 1);
    // console.log(value.count);
  }
  // grid 2xl:grid-cols-6 xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 xs:grid-cols-2 

  return (
    <div>
      {/* I am SHOP - {value.count}
      <button
        className="bg-orange-700 text-white px-4 ml-4"
        onClick={increment}
      >
        Click
      </button> */}
      <div className="flex flex-wrap justify-center ">
        {products.map((products) => {
          return <Product key={products.id} {...products} />;
        })}
      </div>
    </div>
  );
}

export default Shop;
