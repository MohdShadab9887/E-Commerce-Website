import React, { useEffect, useState, useContext } from "react";
import { useProductContext } from "../Context/Context";
import axios from "axios";
import { MdPadding } from "react-icons/md";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";

import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

const SinglePage = () => {
  const { isLoading, formatToINR, products, featureProducts } =
    useProductContext();

  const [data, setData] = useState([]);
  const currentUrl = window.location.href;
  const id = currentUrl.split("singlepage/")[1];

  const getProducts = async () => {
    const URL = `https://api.pujakaitem.com/api/products/${id}`;

    try {
      const res = await axios.get(URL);
      const singleProduct = await res.data;
      setData(singleProduct);
    } catch (error) {
      console.log(`the red ${error}`);
    }
    return data;
  };

  useEffect(() => {
    getProducts();
  }, [{ id }]);

  let value = useContext(counterContext);

  function add() {
    value.setCount((prevcount) => Number(prevcount) + 1);
  }

  function minus() {
    value.setCount((prevcount) => Number(prevcount) - 1);
  }

  const [currImg, setCurrImg] = useState(
    data?.image ? data.image[0].url : null
  );

  // console.log(data)

  if (isLoading) {
    return (
      <div className="font-thin text-center text-[30px]">
        <span> Loading Please Wait...</span>
      </div>
    );
  }

  return (
    <div className=" flex my-4 h-full items-center justify-center">
      <div className="text-center">

        <div className=" flex flex-row  items-center m-auto  xs:flex-col">
          {/* Images List */}
          <div className="image-gallery flex ">
            <div>
              {data?.image && Array.isArray(data.image)
                ? data.image.map((img, index) => (
                    <figure key={index}>
                      <img
                        className="mb-1 xs:w-[110px] xs:h-[80px]"
                        src={img.url}
                        alt={`Product Image ${index + 1}`}
                        width="130"
                        height="130"
                        onClick={() => setCurrImg(img.url)}
                      />
                    </figure>
                  ))
                : <div >
                <span> Loading images Please Wait...</span>
              </div>}
            </div>
            <div className="items-center justify-center flex mr-4 ">
              {data?.image && (
                <figure>
                  <img
                    className="ml-4 xs:h-[130px] "
                    src={currImg ? currImg : data.image[0].url}
                    width="200"
                    height="200"
                  />
                </figure>
              )}
            </div>
          </div>
          {/* Product details */}
          <div className="flex flex-row text-start xs:mt-4  ">
            <div className=" w-[350px] ">
              <h1 className="text-3xl xs:text-5xl xs:mb-2 mb-2 text-gray-500">
                {data.name}
              </h1>
              {/* <div>
                <span className="text-sky-800">{data.stars} Ratings</span>
              </div> */}

              <p className="text-red-300">
                M.R.P :
                <span className="line-through font-semibold ">
                  {formatToINR(data.price / 10 + 2500)}
                </span>{" "}
              </p>
              <p className="text-orange-700 text-sm font-semibold">
                Deal of the day: {formatToINR(data.price / 10)}
              </p>

              <p className="w-72 font-thin text-sm "> {data.description}</p>

              <div className="flex  my-2 justify-between mr-4 border-b-2 pb-2">
                <div className="flex flex-col justify-center w-fit">
                  <TbTruckDelivery className=" m-auto" size="20px" />
                  <p className="font-thin text-xs">Free Delivery</p>
                </div>

                <div className="flex flex-col items-center justify-center w-fit">
                  <TbReplaceFilled size="20px" />
                  <p className="font-thin text-xs">7 Days Replacement</p>
                </div>

                <div className="flex flex-col items-center justify-center  w-fit">
                  <MdOutlineSecurity size="20px" />
                  <p className="font-thin text-xs">2 Year Warranty</p>
                </div>
              </div>
              <p>
                Available :{" "}
                <span className="font-semibold">
                  {data.shipping ? (
                    <span className="text-green-600">In stock</span>
                  ) : (
                    <span className="text-red-700">Currently unavailable.</span>
                  )}
                </span>
              </p>

              <p>
                {data.shipping ? (
                  <span className="text-red-700">
                    {" "}
                    Only {data.stock} left in stock
                  </span>
                ) : ""}
              </p>

              <p>
                ID : <span className="font-semibold">{data.id}</span>
              </p>
              <p>
                Brand : <span className="font-semibold">{data.company}</span>
              </p>
              <hr style={{ border: "1px solid #000", margin: "10px 0" }} />

              <div>
                {data?.shipping && (
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
