// CUSTOM IMPORTS
import Images from "../Assets/index";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

const BannerChild = ({ img1, img2 }) => (
  <div className="h-[50%] flex gap-1 mt-1">
    <LazyLoadImage
      src={Images[img1]}
      alt="Banner Image"
      className="h-[100%]"
      effect="blur"
    />
    <LazyLoadImage
      src={Images[img2]}
      alt="Banner Image"
      className="h-[100%]"
      effect="blur"
    />
  </div>
);

// BANNER
export default function Banner() {
  // JSX ELEMENT
  return (
    <section className="py-1 my-5 lg:py-0">
      <div className="bg-customBlack grid grid-cols-2 place-items-center px-5">
        <div className="h-[200px] sm:h-[380px] lg:h-[600px]">
          <div className="h-[49%]">
            <LazyLoadImage
              src={Images["banner1"]}
              alt="Banner Image"
              className="h-[100%]"
              effect="blur"
            />
          </div>
          <div className="h-[49%]">
            <BannerChild img1={"banner2"} img2={"banner3"} />
            <BannerChild img1={"banner4"} img2={"banner5"} />
          </div>
        </div>
        <div>
          <div className="text-center p-6 sm:p-12 lg:p-28 bg-customGray border-radius">
            <h1 className="font-semibold text-sm sm:text-xl lg:text-4xl">
              SHOP SMART
            </h1>
            <h3 className="font-semibold text-xs sm:text-lg lg:text-3xl pt-2 lg:pt-5">
              Unleash The Thrift - Your Style
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
