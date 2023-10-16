import { Banner, Carousel, Categories, NewsLetter } from "../Components/index";
import { ProductsCategoriesAndProducts } from "../Shared/index";
import MenItems from "../Constants/MenProductsCategoriesItems.Constant.json";
import WomenItems from "../Constants/WomenProductsCategoriesItems.Constant.json";
import { GETPRODUCTS } from "../Services/index";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState();

  useEffect(() => {
    (async function () {
      const { data } = await GETPRODUCTS({});
      if (data && data.SUCCESS) {
        setProducts(data.DATA);
      }
    })();
  }, []);

  return (
    <>
      <Carousel />
      <Categories />
      <div className="px-5 py-2 md:py-5">
        <div className="max-w-[1400px] mx-auto">
          <ProductsCategoriesAndProducts
            type="MENS"
            data={MenItems}
            isHeading={true}
          />
          <div className="mt-5">
            <ProductsCategoriesAndProducts
              type="WOMENS"
              data={WomenItems}
              isHeading={true}
            />
          </div>
        </div>
      </div>
      <Banner />
      <div className="px-5 py-2 md:py-5">
        <div className="max-w-[1400px] mx-auto">
          <ProductsCategoriesAndProducts data={products} isHeading={false} />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
