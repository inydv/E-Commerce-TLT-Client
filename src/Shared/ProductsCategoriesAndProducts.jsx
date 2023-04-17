import { Children } from "react";
import { ProductsCategoriesCard, ProductsCard } from "../Components/index";

export default function ProductsCategoriesAndProducts({
  type,
  data,
  isHeading,
}) {
  return (
    <>
      {isHeading ? (
        <div className="flex items-center gap-x-5">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="flex-shrink text-center font-semibold text-xl md:text-3xl">
            {type} CATEGORIES
          </span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-2 lg:gap-4 pt-2 justify-center items-center">
        {isHeading
          ? Children.toArray(
              data?.map((item) => <ProductsCategoriesCard item={item} />)
            )
          : Children.toArray(data?.map((item) => <ProductsCard item={item} />))}
      </div>
    </>
  );
}
