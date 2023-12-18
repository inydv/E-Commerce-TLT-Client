// REACT
import { useState } from "react";

// CUSTOM IMPORTS
import RSCoversion from "../Pipes/RSConversion.Pipe";
import UpdateCart from "../Pipes/Cart.Pipe";
import Images from "../Assets/index";

// CART TABLE
export default function CartTable({ data }) {
  // STATE
  const [quantity, setQuantity] = useState(data?.quantity);

  // CUSTOM FUNCTION
  const handleQty = (type) => {
    if (type === "increase" && quantity < data?.product?.quantity) {
      UpdateCart({ ...data, quantity: quantity + 1 });
      setQuantity(quantity + 1);
    } else if (type === "decrease" && quantity > 1) {
      UpdateCart({ ...data, quantity: quantity - 1 });
      setQuantity(quantity - 1);
    }
  };

  // JSX ELEMENT
  return (
    <tr>
      <td className="border border-gray-500 p-2">
        <div className="grid place-content-center">
          <img
            src={data?.product?.images && data?.product?.images[0]?.url}
            alt="Product Image"
            className="h-20 w-20"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Images["NoImageAvailable"];
            }}
          />
        </div>
      </td>
      <td className="border border-gray-500 py-2 px-4">
        <h6 className="line-clamp text-sm sm:text-base">
          {data?.product?.name}
        </h6>
        <div className="flex items-center my-2">
          <div className="flex">
            <button
              className="primary-button"
              onClick={() => handleQty("decrease")}
            >
              -
            </button>
            <input
              type="number"
              className="w-[25px] sm:w-[50px] outline-none text-black text-sm sm:text-base px-1 text-center font-semibold"
              readOnly={true}
              value={quantity}
            />
            <button
              className="primary-button"
              onClick={() => handleQty("increase")}
            >
              +
            </button>
          </div>

          <p className="text-sm sm:text-base font-bold px-2">X</p>
          <p className="text-sm sm:text-base">
            {RSCoversion(data?.product?.price)}
          </p>
        </div>
        {quantity <= data?.product?.quantity ? (
          <p className="text-sm sm:text-base font-semibold text-green-500">
            In Stock
          </p>
        ) : (
          <p className="text-sm sm:text-base font-semibold text-red-700">
            Out Of Stock
          </p>
        )}
      </td>
      <td className="border border-gray-500 p-2">
        <p className="text-center line-clamp">
          {RSCoversion(data?.product?.price * quantity)}
        </p>
      </td>
      <td className="border border-gray-500 p-2">
        <div className="grid place-content-center">
          <button
            className="primary-button"
            onClick={() => UpdateCart({ ...data }, true)}
          >
            X
          </button>
        </div>
      </td>
    </tr>
  );
}
