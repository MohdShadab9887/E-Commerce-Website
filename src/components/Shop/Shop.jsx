import { React, useContext, useState, useEffect } from "react";
import { useProductContext } from "../Context/Context";
import Product from "../Product/Product";
import { counterContext } from "/src/components/Context/Context.jsx";

function Shop() {
  let value = useContext(counterContext);
  const { isLoading, products } = useProductContext();
  let [sortedData, setsortedData] = useState(products);
  const [searchText, setSearchText] = useState("");

  // Update sortedData when products or searchText change
  useEffect(() => {
    // Filter products based on search text
    const filteredData = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setsortedData(filteredData);
  }, [products, searchText]);

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

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
       <div className="justify-between xs:flex-col xs:h-24 xs:justify-evenly px-10 flex m-auto rounded h-16 items-center ">
        <input
          type="text"
          name="text"
          placeholder="Search"
          value={searchText}
          onChange={handleSearchText}
          className="h-[35px] p-2 w-[250px] border-2 rounded-lg"
        />
        <form className="border p-1 mt-4 rounded-md" action="#">
          <select
            className="border-none"
            name="khan"
            id="khan"
            onChange={order}
          >
            <option value="Newest-First" className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Newest First
            </option>
            <option value="a-z" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Price ( a-z )
            </option>
            <option value="z-a" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Price ( z-a )
            </option>
            <option value="Low to High" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
              Price: Low to High
            </option>
            <option value="High to Low" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
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
