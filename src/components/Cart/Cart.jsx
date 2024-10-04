import { React, useContext } from "react";
// import counterContext from "../Context/Context";
import {
  AppContext,
  AppProvider,
  counterContext,
} from "/src/components/Context/Context.jsx";

function Cart() {
  let value = useContext(counterContext);

  function add() {
    value.setCount((prevcount) => Number(prevcount) + 1);
  }

  function minus() {
    value.setCount((prevcount) => Number(prevcount) - 1);
  }

  return (
    <div className="my-4 flex flex-col items-center gap-4">
      <div>I am Cart.</div>
      <div>
        <button
          className="mx-4 w-14 bg-orange-700 px-4 text-lg font-bold text-white"
          onClick={minus}
        >
          -
        </button>
        {value.count}
        <button
          className="mx-4 w-14 bg-orange-700 px-4 text-lg font-bold text-white"
          onClick={add}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Cart;
