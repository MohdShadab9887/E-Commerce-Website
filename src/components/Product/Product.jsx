import React from "react";
import { useProductContext } from "../Context/Context";
import { NavLink } from "react-router-dom";

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

  return (
    <div>
      <div></div>

      <NavLink to={`/singlepage/${id}`}>
        <div className="m-[10px] w-[230px] overflow-hidden border border-slate-300 p-1 shadow-md transition-all hover:scale-105 hover:bg-gray-50 hover:shadow-xl xs:w-[180px]">
          <figure>
            <img className="m-auto h-[150px]" src={image} alt="" />
          </figure>

          <div className="mx-2 flex flex-row justify-between">
            <div className="hover:underline"> {name}</div>
            <div className="text-cyan-600"> {formatToINR(price/10)}</div>
          </div>
        </div>
      </NavLink>
    </div>
  );
}
export default Product;
