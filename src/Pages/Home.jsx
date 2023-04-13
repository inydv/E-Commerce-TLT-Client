import { Banner, Carousel, Categories, NewsLetter } from "../Components/index";
import { ProductsCategoriesAndProducts } from "../Shared/index";
import { MenItems, WomenItems } from "../Constants/ProductsCategoriesItems";
import { TempItems } from "../Constants/Temp";

export default function Home() {
  return (
    <>
      <Carousel />
      <Categories />
      <ProductsCategoriesAndProducts
        type="MENS"
        data={MenItems}
        isHeading={true}
      />
      <ProductsCategoriesAndProducts
        type="WOMENS"
        data={WomenItems}
        isHeading={true}
      />
      <Banner />
      <ProductsCategoriesAndProducts data={TempItems} isHeading={false} />
      <NewsLetter />
    </>
  );
}
