import MenImage from "../Assets/mensCollection.jpg";
import WomenImage from "../Assets/womenCollection.jpg";
import { routes } from "../Constants/Routes.Constant";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="px-5 py-2 md:py-5">
      <div className="max-w-[1400px] mx-auto flex gap-x-5">
        <Link
          className="flex-1 group overflow-hidden"
          to={routes.shop + "?category=men"}
        >
          <img
            src={MenImage}
            alt=""
            className="h-full w-full filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
          />
          <p className="text-xl md:text-5xl font-semibold text-center translate-y-[-1000px] backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out group-hover:translate-y-[-40px] md:group-hover:translate-y-[-60px]">
            Men
          </p>
        </Link>
        <Link
          className="flex-1 group overflow-hidden"
          to={routes.shop + "?category=women"}
        >
          <img
            src={WomenImage}
            alt=""
            className="h-full w-full filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
          />
          <p className="text-xl md:text-5xl font-semibold text-center translate-y-[-1000px] backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out group-hover:translate-y-[-40px] md:group-hover:translate-y-[-60px]">
            Women
          </p>
        </Link>
      </div>
    </div>
  );
}
