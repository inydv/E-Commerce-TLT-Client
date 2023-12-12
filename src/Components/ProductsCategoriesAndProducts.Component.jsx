// REACT
import { Children } from "react";

// CUSTOM IMPORT
import { ProductsCategoriesCard, ProductsCard } from "./index";

// PRODUCTS CATEGORIES AND PRODUCTS
export default function ProductsCategoriesAndProducts({
  type,
  data,
  isHeading = false,
}) {
  // JSX ELEMENT
  return (
    <>
      {isHeading ? (
        <div className="flex items-center gap-x-5 py-5 sm:py-10">
          <div className="heading-line"></div>
          <span className="heading">{type} CATEGORIES</span>
          <div className="heading-line"></div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-wrap gap-2 justify-center items-center">
        {isHeading
          ? Children.toArray(
              data?.map((item) => <ProductsCategoriesCard item={item} />)
            )
          : Children.toArray(data?.map((item) => <ProductsCard item={item} />))}
      </div>
    </>
  );
}
