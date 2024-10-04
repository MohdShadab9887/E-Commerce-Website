import React from "react";
import { useProductContext } from "../Context/Context";
import { NavLink } from "react-router-dom";

function Product(curElem) {
  const { isLoading, products, featureProducts, formatToINR } =
    useProductContext();

  const { id, image, name, price } = curElem;

  if (isLoading) {
    return (
      <div className="font-thin text-center text-[30px]">
        <span> Loading Please Wait...</span>
      </div>
    );
  }

  return (
    <div>
      <div></div>

      <NavLink to={`/singlepage/${id}`}>
        <div className=" w-[230px] m-[10px] xs:w-[180px]  hover:scale-105 hover:bg-gray-50 hover:shadow-xl shadow-md transition-all  overflow-hidden border-slate-300   p-1 border ">
          <figure >
            <img className="h-[150px] m-auto" src={image} alt="" />
          </figure>

          <div
            className="flex flex-row 
      
      justify-between mx-2  "
          >
            <div className="hover:underline"> {name}</div>
            <div className="text-cyan-600"> {formatToINR(price / 100)}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default Product;
