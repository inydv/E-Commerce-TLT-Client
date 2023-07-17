import { Banner, Carousel, Categories, NewsLetter } from "../Components/index";
import { ProductsCategoriesAndProducts } from "../Shared/index";
import { MenItems, WomenItems } from "../Constants/ProductsCategoriesItems";
import { TempItems } from "../Constants/Temp";

export default function Home() {
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
          <ProductsCategoriesAndProducts data={TempItems} isHeading={false} />
        </div>
      </div>
      <NewsLetter />
    </>
  );
}
