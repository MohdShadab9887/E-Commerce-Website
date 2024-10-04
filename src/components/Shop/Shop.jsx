import { React, useContext, useState, useEffect } from "react";
import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";
// import counterContext from '../Context/Context

import { counterContext } from "/src/components/Context/Context.jsx";

function Shop() {
  let value = useContext(counterContext);
  const { isLoading, products } = useProductContext();
  let [sortedData, setsortedData] = useState(products);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setsortedData(products);
  }, [products]);

  if (isLoading) {
    return (
      <div className="font-thin text-center text-[30px]">
        <span> Loading Please Wait...</span>
      </div>
    );
  }

  let sortingData = [...products];
  const order = () => {
    let myVariable = document.getElementById("khan");

    let myValue = myVariable.options[myVariable.selectedIndex].value;

    if (myValue == "a-z") {
      sortingData.sort((a, b) => a.name.localeCompare(b.name));
    } else if (myValue == "z-a") {
      sortingData.sort((a, b) => b.name.localeCompare(a.name));
    } else if (myValue === "Low to High") {
      sortingData.sort((a, b) => a.price - b.price);
    } else if (myValue == "High to Low") {
      sortingData.sort((a, b) => b.price - a.price);
    }
    setsortedData(sortingData);
  };

  const keepText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    console.log(searchText);

    
  };

  return (
    <div>
      <div className="justify-between xs:flex-col xs:h-24 xs:justify-evenly px-10 flex 
       w-5/6
       m-auto rounded h-16 items-center ">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={searchText}
          onChange={keepText}
          className="h-[35px] p-2 w-[250px] border-2 rounded-lg outline-none"
        />
        <form className=" border p-1 mt-0 rounded-md" action="#">
          <label
            className="mr-2 font-semibold text-gray-700 text-sm  border-none"
            htmlFor="khan"
          >
            Order:
          </label>
          <select
            className="border-none outline-none font-thin text-sm min-w-[130px]"
            name="khan"
            id="khan"
            onChange={order}
          >
            <option
              value="Newest-First"
              className=" px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Newest First
            </option>
            <option
              value="a-z"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price ( a-z )
            </option>
            <option
              value="z-a"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price ( z-a )
            </option>
            <option
              value="Low to High"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price: Low to High
            </option>
            <option
              value="High to Low"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Price: High to Low
            </option>
          </select>
        </form>
      </div>

      <div className="flex justify-center">
        {/* <div className="w-1/6 bg-orange-700">
          <p>hello</p>
        </div> */}
         {/* w-4/6 */}
        <div className=" flex flex-wrap justify-center">
          {sortedData.map((products) => {
            return <Product key={products.id} {...products} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Shop;
