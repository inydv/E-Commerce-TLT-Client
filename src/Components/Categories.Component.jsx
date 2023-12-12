// REACT AND REACT ROUTER DOM
import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import RoutesConstant from "../Constants/Routes.Constant.json";
import { Children } from "react";

// CATEGORY CONSTANT
const CategoryConstant = [
  {
    to: RoutesConstant.shop + "?category=men",
    src: "/src/Assets/mensCollection.jpg",
    name: "Men",
  },
  {
    to: RoutesConstant.shop + "?category=women",
    src: "/src/Assets/womenCollection.jpg",
    name: "Women",
  },
];

// CATEGORIES
export default function Categories() {
  // JSX ELEMENT
  return (
    <div className="px-5 pt-5 sm:px-10">
      <div className="max-w-[1400px] mx-auto flex gap-x-2">
        {Children.toArray(
          CategoryConstant?.map(({ name, src, to }) => (
            <Link className="flex-1 group overflow-hidden relative" to={to}>
              <img
                src={src}
                alt="Category Image"
                className="aspect-square h-full w-full max-h-[400px] filter transition-all duration-200 ease-in-out group-hover:grayscale group-hover:blur-sm"
              />
              <p className="text-xl md:text-5xl font-semibold text-center backdrop-filter backdrop-blur-lg bg-opacity-0 p-2 transition-all duration-200 ease-in-out absolute bottom-0 w-full translate-y-[-1000px] group-hover:translate-y-0">
                {name}
              </p>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
