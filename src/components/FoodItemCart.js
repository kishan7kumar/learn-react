import React from "react";
import { CDN_URL } from "../utils/constant";

const FoodItemCart = ({ name, imageId, description, price }) => {
  return (
    <div className="flex bg-white p-4 rounded-lg border-gray-300 border w-full mb-3">
      <img className="h-[200px]" src={CDN_URL + imageId}></img>
      <div className="ml-5 flex flex-col">
        <p className="text-xl font-medium">{name}</p>
        <p className="text-gray-500 text-sm mb-5">{description}</p>
        <p className="mt-auto flex justify-between">
          <div className="font-semibold"> Rs. {price / 100}</div>
          <button className="border-red-500 border text-red-500 px-3 py-1 text-sm hover:bg-red-600 rounded-md hover:text-white">
            Remove
          </button>
        </p>
      </div>
    </div>
  );
};

export default FoodItemCart;
