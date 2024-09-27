import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Product(curElem) {
  
  // let [Idd, setIdd] = useState("");
  // const getid = (e) => {
    //   setIdd(id);
    //   return Idd;
    const { id, image, name, price } = curElem;


    const formatToINR = (amount) => {
      return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2, // For showing two decimal places
      }).format(amount);
    };
    

return (
  <NavLink to={`/singlepage/${id}`}>
    <div
      // onClick={getid}
      className=" w-[240px] m-[10px]  xs:w-[180px]  border-slate-300   p-1 border "
    >
      <figure>
        <img className="h-[150px] " src={image} alt="" />
      </figure>

      <div
        className="flex flex-row 
      
      justify-between mx-2  "
      >
        <div> {name}</div>
        <div className="text-cyan-600"> {formatToINR(price/100)}</div>
      </div>
    </div>
  </NavLink>
);
}
export default Product;
