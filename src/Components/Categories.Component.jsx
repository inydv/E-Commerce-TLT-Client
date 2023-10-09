import Routes from "../Constants/Routes.Constant.json";
import { Link } from "react-router-dom";

export default function Categories() {
  return (
    <div className="px-5 py-2 md:py-5">
      <div className="max-w-[1400px] mx-auto flex gap-x-5">
        <Link
          className="flex-1 group overflow-hidden"
          to={Routes.shop + "?category=men"}
        >
          <img
            src="/src/Assets/mensCollection.jpg"
            alt=""
            className="h-full w-full filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
          />
          <p className="text-xl md:text-5xl font-semibold text-center translate-y-[-1000px] backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out group-hover:translate-y-[-40px] md:group-hover:translate-y-[-60px]">
            Men
          </p>
        </Link>
        <Link
          className="flex-1 group overflow-hidden"
          to={Routes.shop + "?category=women"}
        >
          <img
            src="/src/Assets/womenCollection.jpg"
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
