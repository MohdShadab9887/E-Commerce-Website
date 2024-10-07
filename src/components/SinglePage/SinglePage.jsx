import React, { useEffect, useState, useContext } from "react";
import { useProductContext } from "../Context/Context";
import axios from "axios";
import { TbTruckDelivery, TbReplaceFilled } from "react-icons/tb";
import { MdOutlineSecurity } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { counterContext } from "/src/components/Context/Context.jsx";

const SinglePage = () => {
  const { isLoading, formatToINR, cart, setCart } = useProductContext();

  const [data, setData] = useState([]);
  const currentUrl = window.location.href;
  const id = currentUrl.split("singlepage/")[1];

  // Fetch product details
  const getProducts = async () => {
    const URL = `https://api.pujakaitem.com/api/products/${id}`;
    try {
      const res = await axios.get(URL);
      const singleProduct = res.data;
      setData(singleProduct);
    } catch (error) {
      console.log(`Error: ${error}`);
    }
  };

  useEffect(() => {
    getProducts();
  }, [id]);

  const value = useContext(counterContext);

  function add() {
    value.setCount((prevCount) => Number(prevCount) + 1);
  }

  function minus() {
    value.setCount((prevCount) => Number(prevCount) - 1);
  }

  const [currImg, setCurrImg] = useState(
    data?.image ? data.image[0].url : null,
  );

  if (isLoading) {
    return (
      <div className="text-center text-[30px] font-thin">
        <span>Loading, Please Wait...</span>
      </div>
    );
  }

  // Function to add product to the cart
  const addToCart = () => {
    if (value.count >= 1) {
      const product = {
        id: data.id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantity: value.count,
        company: data.company,
      };
      setCart((prevCart) => [...prevCart, product]);
    } else {
      <div>Add at least 1 product</div>;
    }
  };
  // if (data) {
  //   console.log(data)
  // }
  return (
    <div className="my-4 flex h-full items-center justify-center">
      <div className="text-center">
        <div className="m-auto flex flex-row items-center xs:flex-col">
          {/* Images List */}
          <div className="image-gallery flex">
            <div>
              {data?.image && Array.isArray(data.image) ? (
                data.image.map((img, index) => (
                  <figure key={index}>
                    <img
                      className="mb-1 xs:h-[80px] xs:w-[110px]"
                      src={img.url}
                      alt={`Product Image ${index + 1}`}
                      width="130"
                      height="130"
                      onClick={() => setCurrImg(img.url)}
                    />
                  </figure>
                ))
              ) : (
                <div>
                  <span>Loading images, Please Wait...</span>
                </div>
              )}
            </div>
            <div className="mr-4 flex items-center justify-center">
              {data?.image && (
                <figure>
                  <img
                    className="ml-4 xs:h-[130px]"
                    src={currImg ? currImg : data.image[0].url}
                    width="200"
                    height="200"
                  />
                </figure>
              )}
            </div>
          </div>
          {/* Product details */}
          <div className="flex flex-row text-start xs:mt-4">
            <div className="w-[350px]">
              <h1 className="mb-2 text-3xl text-gray-500 xs:mb-2 xs:text-5xl">
                {data.name}
              </h1>

              <p className="text-red-300">
                M.R.P :
                <span className="font-semibold line-through">
                  {formatToINR(data.price / 10 + 2500)}
                </span>
              </p>
              <p className="text-sm font-semibold text-orange-600">
                Deal of the day: {formatToINR(data.price / 10)}
              </p>

              <p className="w-72 text-sm font-thin"> {data.description}</p>

              <div className="my-2 mr-4 flex justify-between border-b-2 pb-2">
                <div className="flex w-fit flex-col justify-center">
                  <TbTruckDelivery className="m-auto" size="20px" />
                  <p className="text-xs font-thin">Free Delivery</p>
                </div>

                <div className="flex w-fit flex-col items-center justify-center">
                  <TbReplaceFilled size="20px" />
                  <p className="text-xs font-thin">7 Days Replacement</p>
                </div>

                <div className="flex w-fit flex-col items-center justify-center">
                  <MdOutlineSecurity size="20px" />
                  <p className="text-xs font-thin">2 Year Warranty</p>
                </div>
              </div>
              <p>
                Available :{" "}
                <span className="font-semibold">
                  {data.stock ? (
                    <span className="text-green-600">In stock</span>
                  ) : (
                    <span className="text-red-600">Currently unavailable.</span>
                  )}
                </span>
              </p>

              <p>
                {data.stock && (
                  <span className="text-red-600">
                    Only {data.stock} left in stock
                  </span>
                )}
              </p>

              <p>
                ID : <span className="font-semibold">{data.id}</span>
              </p>
              <p>
                Brand : <span className="font-semibold">{data.company}</span>
              </p>
              <hr style={{ border: "1px solid #000", margin: "10px 0" }} />

              <div className="mt-2">Add to cart :</div>

              <button
                className="mr-4 w-14 bg-orange-600 px-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-orange-400"
                onClick={minus}
                disabled={value.count <= 1}
              >
                -
              </button>
              {value.count}
              <button
                className="ml-4 w-14 bg-orange-600 px-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-orange-400"
                onClick={add}
                disabled={value.count === data.stock || data.stock < 1}
              >
                +
              </button>
              <div>
                <NavLink to="/cart">
                  <button
                    className="mt-2 bg-orange-600 p-1 px-4 text-lg font-bold text-white disabled:cursor-not-allowed disabled:bg-orange-400 disabled:line-through"
                    onClick={addToCart}
                    disabled={value.count < 1}
                  >
                    ADD TO CART
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
