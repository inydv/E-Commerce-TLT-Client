import { Children } from "react";
import { ProductsCategoriesCard } from "../Shared/index";

export default function ProductsCategories({ type, data }) {
  return (
    <div className="px-5 py-2 md:py-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-center gap-x-5">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="flex-shrink text-center font-semibold text-xl md:text-3xl">
            {type} CATEGORIES
          </span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>
        <div className="flex flex-wrap gap-2 lg:gap-4 pt-5 justify-center items-center">
          {Children.toArray(
            data?.map((item) => <ProductsCategoriesCard item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
