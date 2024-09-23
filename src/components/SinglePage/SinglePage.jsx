// import { useEffect } from "react";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { MdPadding } from "react-icons/md";
import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

var i = 0;
const SinglePage = () => {
  const [data, setData] = useState([]);
  const currentUrl = window.location.href;
  const id = currentUrl.split("singlepage/")[1];

  const getProducts = async () => {
    // dispatch({ type: "SET_LOADING" });
    const URL = `https://api.pujakaitem.com/api/products/${id}`;

    try {
      const res = await axios.get(URL);
      const singleProduct = await res.data;
      console.log(singleProduct);
      setData(singleProduct);
      // console.log(singleProduct.image[0].url);
    } catch (error) {
      console.log(`the red ${error}`);
    }
    return data;
  };
  // console.log(data.image[0].url);

  useEffect(() => {
    getProducts();
  }, []);

  let value = useContext(counterContext);

  function add() {
    value.setCount((prevcount) => Number(prevcount) + 1);
  }

  function minus() {
    value.setCount((prevcount) => Number(prevcount) - 1);
  }

  return (
    <div className=" flex my-4 h-full items-center justify-center">
      <div className="text-center">
        {data ? (
          ""
        ) : (
          <div className="font-thin text-center text-4xl"> Loading...</div>
        )}

        <div className=" flex flex-row items items-center m-auto  xs:flex-col">
          {/* Images List */}
          <div className="image-gallery flex ">
            <div>
              {data?.image && Array.isArray(data.image) ? (
                data.image.map((img, index) => (
                  <figure key={index}>
                    <img
                      className="mb-1 xs:w-[110px] xs:h-[80px]"
                      src={img.url}
                      alt={`Product Image ${index + 1}`}
                      width="130"
                      height="130"
                    />
                  </figure>
                ))
              ) : (
                <p>Loading... Please wait</p>
              )}
            </div>
            <div className="items-center justify-center flex mr-4 ">
              {data?.image && (
                <figure>
                  <img className="ml-4 xs:h-[130px] " src={data.image[0].url} width="200" height="200" />
                </figure>
              )}
            </div>
          </div>
          {/* Product details */}
          <div className="flex flex-row text-start xs:mt-4">
            <div className=" w-[350px] ">
              <h1 className="text-3xl xs:text-5xl xs:mb-2 text-gray-500">{data.name}</h1>
              <p className="text-red-300">
                M.R.P : ₹
                <span className="line-through font-semibold ">
                  {data.price}
                </span>{" "}
              </p>
              <p className="text-orange-700 text-sm font-semibold">
                Deal of the day: ₹{data.price / 50}
              </p>

              <p className="w-72 font-thin text-sm "> {data.description}</p>
              <p>
                Available :{" "}
                <span className="font-semibold">
                  {data.shipping ? "In stock" : "Out of stock"}
                </span>
              </p>
              <p>
                ID : <span className="font-semibold">{data.id}</span>
              </p>
              <p>
                Brand : <span className="font-semibold">{data.company}</span>
              </p>
              <hr style={{ border: "1px solid #000", margin: "10px 0" }} />

              <div>
                {data?.colors && (
                  <p className="flex flex-row gap-2 mb-1">
                    Color:
                    <div
                      style={{ backgroundColor: data.colors[0] }}
                      className="h-[20px] w-[20px] rounded-full"
                    ></div>
                    <div
                      style={{ backgroundColor: data.colors[1] }}
                      className="h-[20px] w-[20px] rounded-full"
                    ></div>
                    <div
                      style={{ backgroundColor: data.colors[2] }}
                      className="h-[20px] w-[20px] rounded-full"
                    ></div>
                  </p>
                )}
              </div>

              <div className=" mt-2 ">Add to cart :</div>

              <button
                className="bg-orange-700 text-lg font-bold text-white px-4 w-14 mr-4"
                onClick={minus}
              >
                -
              </button>
              {value.count}
              <button
                className="bg-orange-700 text-lg font-bold text-white px-4 w-14 ml-4"
                onClick={add}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
