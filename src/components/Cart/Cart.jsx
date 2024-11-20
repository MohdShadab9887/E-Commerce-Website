import { useLocation } from "react-router-dom";
import { useProductContext } from "../Context/Context";
import { MdDeleteForever } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";

const Cart = () => {
  const { isLoading, formatToINR, cart, total, totalPrice, removeFromCart } =
    useProductContext();

  if (isLoading) {
    return (
      <div className="text-center text-[30px] font-thin">
        <span> Loading Please Wait...</span>
      </div>
    );
  }
  // console.log(cart)

  return (
    <div className="flex flex-col items-center">
      <div className="m-auto my-2 w-[90%] text-center font-semibold text-orange-600">
        <span>
          Total {total ? total : ""}
          {cart.length <= 1 ? " product is" : " products are"} in your CART
        </span>
      </div>

      {cart?.length > 0 ? (
        cart.map((item) => (
          <div
            key={item.id}
            className="m-auto my-1 flex w-[95%] items-center justify-between gap-2 border p-1"
          >
            <div className="flex w-1/2 gap-5 xs:gap-2">
              <img
                className="h-[50px] w-[75px]"
                src={item.image[0].url}
                alt={item.name}
              />
              <div>
                <h1 className="font-semibold text-orange-600">{item.name}</h1>
                <h1 className="font-semibold">{item.company}</h1>
              </div>
            </div>
            <div className="flex w-1/2 justify-between">
              <span>Qty: {item.quantity}</span>
              <p className="font-serif text-sm font-bold">
                {formatToINR(item.price)}
              </p>
              <span
                onClick={() => removeFromCart(item.id)}
                className="p-1 text-orange-600"
              >
                <MdDeleteForever size={30} />
              </span>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart</p>
      )}

      <div className="flex font-semibold">
        Subtotal ({total}
        {total <= 1 ? " item" : " items"}):{" "}
        <span className="font-bold">{formatToINR(totalPrice)}</span>
      </div>

      <button>
        <Link
          className="my-4 inline-flex items-center rounded-md bg-orange-700 px-6 py-2 font-medium text-white hover:opacity-75"
          to="/shop"
        >
          Continue Shopping
        </Link>
      </button>
    </div>
  );
};

export default Cart;

// import React, { useContext } from "react";
// import { useProductContext } from "../Context/Context";
// import { Link } from "react-router-dom";

// const Cart = () => {
//   const  { cart, setCart, formatToINR } = useProductContext();

//   // Function to remove an item from the cart
//   const removeFromCart = (id) => {
//     setCart((prevCart) => prevCart.filter((item) => item.id !== id));
//   };

//   // Function to update the quantity of an item in the cart
//   const updateQuantity = (id, newQuantity) => {
//     setCart((prevCart) =>
//       prevCart.map((item) =>
//         item.id === id ? { ...item, quantity: newQuantity } : item
//       )
//     );
//   };

//   // Calculate the total price of items in the cart
//   const totalPrice = cart?.reduce(
//     (total, item) => total + item.price * item.quantity,
//     0
//   );

//   if (cart.length === 0) {
//     return (
//       <div className="text-center">
//         <h2 className="text-3xl font-semibold">Your Cart is Empty</h2>
//         <Link to="/">
//           <button className="mt-4 bg-orange-700 p-2 px-4 text-lg font-bold text-white">
//             Continue Shopping
//           </button>
//         </Link>
//       </div>
//     );
//   }

//   // console.log(item)

//   return (
//     <div className="cart-container p-4">
//       <h2 className="text-3xl font-semibold mb-4">Your Cart</h2>
//       <div className="cart-items">
//         {cart?.map((item) => (
//           <div
//             key={item.id}
//             className="cart-item flex items-center justify-between mb-4"
//           >
//             <div className="cart-item-info flex items-center">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="h-20 w-20 mr-4"
//               />
//               <div>
//                 <h3 className="text-lg font-bold">{item.name}</h3>
//                 <p className="text-sm text-gray-500">
//                   {formatToINR(item.price)} x {item.quantity}
//                 </p>
//                 <p className="text-sm font-semibold">
//                   Total: {formatToINR(item.price * item.quantity)}
//                 </p>
//               </div>
//             </div>
//             <div className="cart-item-actions flex items-center">
//               <button
//                 className="w-8 bg-gray-300 p-2"
//                 onClick={() =>
//                   updateQuantity(item.id, Math.max(1, item.quantity - 1))
//                 }
//               >
//                 -
//               </button>
//               <span className="mx-2">{item.quantity}</span>
//               <button
//                 className="w-8 bg-gray-300 p-2"
//                 onClick={() => updateQuantity(item.id, item.quantity + 1)}
//               >
//                 +
//               </button>
//               <button
//                 className="ml-4 bg-red-500 p-2 px-4 text-white"
//                 onClick={() => removeFromCart(item.id)}
//               >
//                 Remove
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="cart-summary mt-4">
//         <h3 className="text-xl font-semibold">
//           Total Price: {formatToINR(totalPrice)}
//         </h3>
//         <button className="mt-4 bg-green-500 p-2 px-4 text-lg font-bold text-white">
//           Proceed to Checkout
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Cart;
