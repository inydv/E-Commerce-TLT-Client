// REACT AND REACT ROUTER DOM
import { useState } from "react";
import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import RSCoversion from "../Pipes/RSConversion.Pipe";
import UpdateCart from "../Pipes/Cart.Pipe";
import Images from "../Assets/index";
import RoutesConstant from "../Constants/Routes.Constant.json";

// REACT ICONS
import { AiFillDelete } from "@react-icons/all-files/ai/AiFillDelete";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// CART TABLE
export default function CartTable({ data }) {
  // STATE
  const [quantity, setQuantity] = useState(data?.quantity || 0);

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
          <LazyLoadImage
            src={data?.product?.images && data?.product?.images[0]?.url}
            alt="Product Image"
            className="h-20 w-20"
            effect="blur"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = Images["NoImageAvailable"];
            }}
          />
        </div>
      </td>
      <td className="border border-gray-500 py-2 px-4">
        <h6 className="line-clamp text-sm sm:text-base">
          <Link to={RoutesConstant.productDetails + "/" + data?.product?._id}>
            {data?.product?.name}
          </Link>
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
          <p className="text-sm sm:text-base font-semibold text-green-600">
            In Stock
          </p>
        ) : (
          <p className="text-sm sm:text-base font-semibold text-red-600">
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
          <AiFillDelete
            size={20}
            className="cursor-pointer P-2"
            onClick={() => UpdateCart({ ...data }, true)}
          />
        </div>
      </td>
    </tr>
  );
}
