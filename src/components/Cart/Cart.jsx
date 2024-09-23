import { React, useContext } from "react";
// import counterContext from "../Context/Context";
import { AppContext, AppProvider, counterContext } from '/src/components/Context/Context.jsx';


function Cart() {
  let value = useContext(counterContext);

  function add() {
    value.setCount(prevcount => Number(prevcount) + 1)
  }

  function minus() {
    value.setCount(prevcount => Number(prevcount) - 1)
  }

  return ( 
  <div className="flex flex-col items-center gap-4 my-4">
    <div >
      I am Cart.
      
    </div>
    <div>

    <button className="bg-orange-700 text-lg font-bold text-white px-4 w-14 mx-4" onClick={minus}>
        -
      </button>
      {value.count}
      <button className="bg-orange-700 text-lg font-bold text-white px-4 w-14 mx-4" onClick={add}>
        +
      </button>
    </div>
    </div>
  );
}

export default Cart;
