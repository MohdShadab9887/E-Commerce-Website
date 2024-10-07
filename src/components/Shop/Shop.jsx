import { React, useContext, useState, useEffect } from "react";
import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";
import { counterContext } from "/src/components/Context/Context.jsx";

function Shop() {
  let value = useContext(counterContext);
  const { isLoading, products } = useProductContext();
  let [sortedData, setsortedData] = useState(products);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setsortedData(products);
  }, [products]);

  useEffect(() => {
    const filteredData = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase()),
    );
    setsortedData(filteredData);
  }, [products, searchText]);

  if (isLoading) {
    return (
      <div className="text-center text-[30px] font-thin">
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

  const handleSearchText = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="m-auto flex h-16 w-5/6 items-center justify-between rounded px-10 xs:h-24 xs:flex-col xs:justify-evenly">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchText}
          className="h-[35px] w-[250px] rounded-lg border-2 p-2 outline-none"
        />
        <form className="mt-0 rounded-md border p-1" action="#">
          <label
            className="mr-2 border-none text-sm font-semibold"
            htmlFor="khan"
          >
            Order:
          </label>
          <select
            className="min-w-[130px] border-none text-sm font-thin outline-none"
            name="khan"
            id="khan"
            onChange={order}
          >
            <option
              value="Newest-First"
              className="px-4 py-2 text-sm text-gray-700"
            >
              Newest First
            </option>
            <option
              value="a-z"
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Price ( a-z )
            </option>
            <option
              value="z-a"
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Price ( z-a )
            </option>
            <option
              value="Low to High"
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Price: Low to High
            </option>
            <option
              value="High to Low"
              className="block px-4 py-2 text-sm text-gray-700"
            >
              Price: High to Low
            </option>
          </select>
        </form>
      </div>

      <div className="flex justify-center">
        <div className="flex flex-wrap justify-center">
          {sortedData.length > 0 ? (
            sortedData.map((product) => {
              return <Product key={product.id} {...product} />;
            })
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Shop;
