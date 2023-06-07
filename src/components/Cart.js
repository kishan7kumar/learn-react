import React from "react";
import { useDispatch, useSelector } from "react-redux";
import FoodItemCart from "./FoodItemCart";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); //NOTE: here only subscribe to slice which is needed not the entire store or else the component will rerender when anything in the store changes this causes performance issues
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="p-5 w-2/4 h-full flex flex-col">
      <div className="flex justify-between mb-5">
        <h1 className="text-2xl font-semibold text-blue-600  ">
          Cart ({cartItems.length} items)
        </h1>
        <button
          onClick={() => handleClearCart()}
          className="bg-red-500 text-white px-3 py-1 text-sm hover:bg-red-600 rounded-md"
        >
          Clear All
        </button>
      </div>

      <div className="grow min-h-0 overflow-y-auto">
        {cartItems.map((item) => (
          <FoodItemCart key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
