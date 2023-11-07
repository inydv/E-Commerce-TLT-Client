// REACT
import { useEffect, useState } from "react";

// CUSTOM IMPORTS
import {
  Banner,
  Carousel,
  Categories,
  NewsLetter,
  ProductsCategoriesAndProducts,
} from "../Components/index";
import MenConstant from "../Constants/MenProductsCategoriesItems.Constant.json";
import WomenConstant from "../Constants/WomenProductsCategoriesItems.Constant.json";
import { GETPRODUCTS } from "../Services/index";

// HOME
export default function Home() {
  // STATES
  const [products, setProducts] = useState();

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    (async function () {
      const { data } = await GETPRODUCTS({});

      if (data && data.SUCCESS) {
        setProducts(data.DATA);
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
          <ProductsCategoriesAndProducts
            type="MENS"
            data={MenConstant}
            isHeading={true}
          />
          <ProductsCategoriesAndProducts
            type="WOMENS"
            data={WomenConstant}
            isHeading={true}
          />
        </div>
      </div>
      <Banner />
      <div className="px-5 sm:px-10">
        <div className="max-w-[1400px] mx-auto">
          <ProductsCategoriesAndProducts data={products} />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
