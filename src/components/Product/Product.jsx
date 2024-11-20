import React from "react";
import { useProductContext } from "../Context/Context";
import { NavLink } from "react-router-dom";
import { motion } from "motion/react"
import { CiSearch } from "react-icons/ci";

function Product(curElem) {
  const { isLoading, formatToINR } = useProductContext();

  const { id, image, name, price } = curElem;

  if (isLoading) {
    return (
      <div className="text-center text-[30px] font-thin">
        <span> Loading Please Wait...</span>
      </div>
    );
  }

  function mouseOn(){
    // alert("hello")
    image && <span className="h-[150px] bg-red-600 absolute z-[1000]"> hellio </span>
  }
  return (
    <div>

      <NavLink to={`/singlepage/${id}`}>
        <div className="m-[10px] w-[230px] rounded-xl  border border-slate-300 p-2 shadow-md transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl xs:w-[180px]">
        
          <figure onMouseOver={mouseOn} className="overflow-hidden rounded-xl ">
            <img className="m-auto h-[150px] hover:scale-110 transition-all" src={image} alt="" />
          </figure>

          <div className="mx-2 flex flex-row justify-between">
            <div className="hover:underline capitalize"> {name}</div>
            <div className="text-cyan-600"> {formatToINR(price / 10)}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default Product;
