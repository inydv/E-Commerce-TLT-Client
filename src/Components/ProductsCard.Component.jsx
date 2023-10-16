import { Link } from "react-router-dom";
import RSCoversion from "../Pipes/RSConversion.Pipe";
import Routes from "../Constants/Routes.Constant.json";

export default function ProductsCard({ item }) {
  return (
    <div className="h-[200px] w-[160px] sm:h-[300px] sm:w-[240px] xl:h-[400px] xl:w-[320px] overflow-hidden relative group">
      <Link to={Routes.productDetails + "/" + item._id}>
        <img
          src={item?.images && item?.images[0]?.url}
          alt=""
          className="h-full w-full transition-all duration-200 ease-in-out group-hover:translate-x-[30%] group-hover:opacity-50"
        />
      </Link>
      <div className="absolute top-0 left-0 w-[60%] h-full bg-[#060606] transition-all duration-200 ease-in-out origin-left grid place-items-center rotate-180 group-hover:rotate-0">
        <div className="p-1">
          <p className="text-xs sm:text-sm xl:text-lg font-semibold">
            {item.name}
          </p>
          <p className="text-red-600 text-xs sm:text-sm xl:text-lg font-semibold mt-1 mb-2">
            {RSCoversion(item.price)}
          </p>
          <button className="bg-button py-1 px-2 xl:py-2 xl:px-4 text-[10px] sm:text-xs xl:text-base font-semibold">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}
