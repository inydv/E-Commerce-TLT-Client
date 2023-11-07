// REACT ROUTER DOM
import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import RSCoversion from "../Pipes/RSConversion.Pipe";
import RoutesConstant from "../Constants/Routes.Constant.json";

// PRODUCTS CARD
export default function ProductsCard({ item }) {
  // JSX ELEMENT
  return (
    <div className="aspect-square h-full max-h-[344px] max-w-[48%] md:max-w-[344px] overflow-hidden relative group">
      <Link to={RoutesConstant.productDetails + "/" + item._id}>
        <img
          src={item?.images && item?.images[0]?.url}
          alt=""
          className="h-full w-full transition-all duration-200 ease-in-out group-hover:translate-x-[30%] group-hover:opacity-50"
        />
      </Link>
      <div className="absolute top-0 left-0 w-[60%] h-full bg-customBlack transition-all duration-200 ease-in-out origin-left grid place-items-center rotate-180 group-hover:rotate-0">
        <div className="p-5">
          <p className="text-xs sm:text-sm xl:text-lg font-semibold">
            {item.name}
          </p>
          <p className="text-red-700 text-xs sm:text-sm xl:text-lg font-semibold mt-2 mb-3">
            {RSCoversion(item.price)}
          </p>
          <button className="primary-button text-sm md:px-5 md:py-2">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
