// REACT AND REACT ROUTER DOM
import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import RoutesConstant from "../Constants/Routes.Constant.json";
import { Children } from "react";
import Images from "../Assets/index";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// CONSTANT
const CATEGORY_CONSTANT = [
  {
    to: RoutesConstant.shop + "?category=men",
    src: "mensCollection",
    name: "Men",
  },
  {
    to: RoutesConstant.shop + "?category=women",
    src: "womenCollection",
    name: "Women",
  },
];

// CATEGORIES
export default function Categories() {
  // JSX ELEMENT
  return (
    <article className="page-padding">
      <div className="page-width flex gap-x-2">
        {Children.toArray(
          CATEGORY_CONSTANT?.map(({ name, src, to }) => (
            <Link className="flex-1 group overflow-hidden relative" to={to}>
              <LazyLoadImage
                src={Images[src]}
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
    </article>
  );
}
