import { Banner, Carousel, Categories } from "../Components/index";
import { ProductsCategories } from "../Components/index";
import { MenItems, WomenItems } from "../Constants/ProductsCategoriesItems";

export default function Home() {
  return (
    <>
      <Carousel />
      <Categories />
      <ProductsCategories type="MENS" data={MenItems} />
      <ProductsCategories type="WOMENS" data={WomenItems} />
      <Banner />
    </>
  );
}
