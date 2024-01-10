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

// CUSTOM COMPONENT
const Heading = ({ heading }) => (
  <div className="flex items-center gap-x-5 py-5 sm:py-10">
    <div className="heading-line"></div>
    <span className="heading">{heading}</span>
    <div className="heading-line"></div>
  </div>
);

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
      <div className="page-padding">
        <div className="page-width">
          <Heading heading={"MENS CATEGORIES"} />
          <div className="flex flex-wrap gap-2 justify-center items-center">
            {Children.toArray(
              MenConstant?.map((item) => <ProductsCategoriesCard item={item} />)
            )}
          </div>
          <Heading heading={"WOMENS CATEGORIES"} />
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
      <div className="page-padding">
        <div className="page-width">
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
