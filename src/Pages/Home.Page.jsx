// REACT
import { Children, useEffect, useState } from "react";

// CUSTOM IMPORTS
import {
  Banner,
  Carousel,
  Categories,
  NewsLetter,
  ProductsCard,
  ProductsCategoriesCard,
} from "../Components/index";
import MenConstant from "../Constants/MenProductsCategoriesItems.Constant.json";
import WomenConstant from "../Constants/WomenProductsCategoriesItems.Constant.json";
import { GETPRODUCTS } from "../Services/index";

// HOME
export default function Home() {
  // STATES
  const [products, setProducts] = useState([]);

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    (async function () {
      const { data } = await GETPRODUCTS({});

      if (data && data.SUCCESS) {
        setProducts(data.DATA?.LISTS);
      }
    })();
  }, []);

  // JSX ELEMENT
  return (
    <>
      <Carousel />
      <Categories />
      <div className="px-5 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-x-5 py-5 sm:py-10">
            <div className="heading-line"></div>
            <span className="heading">MENS CATEGORIES</span>
            <div className="heading-line"></div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Children.toArray(
              MenConstant?.map((item) => <ProductsCategoriesCard item={item} />)
            )}
          </div>
          <div className="flex items-center gap-x-5 py-5 sm:py-10">
            <div className="heading-line"></div>
            <span className="heading">WOMENS CATEGORIES</span>
            <div className="heading-line"></div>
          </div>
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Children.toArray(
              WomenConstant?.map((item) => (
                <ProductsCategoriesCard item={item} />
              ))
            )}
          </div>
        </div>
      </div>
      <Banner />
      <div className="px-5 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Children.toArray(
              products?.map((item) => <ProductsCard item={item} />)
            )}
          </div>
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
