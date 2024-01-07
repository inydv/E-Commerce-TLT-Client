// CUSTOM IMPORTS
import Images from "../Assets/index";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// BANNER
export default function Banner() {
  // JSX ELEMENT
  return (
    <div className="py-1 my-5 lg:py-0">
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
            <div className="h-[50%] flex gap-1 mt-1">
              <LazyLoadImage
                src={Images["banner2"]}
                alt="Banner Image"
                className="h-[100%]"
                effect="blur"
              />
              <LazyLoadImage
                src={Images["banner3"]}
                alt="Banner Image"
                className="h-[100%]"
                effect="blur"
              />
            </div>
            <div className="h-[50%] flex gap-1 mt-1">
              <LazyLoadImage
                src={Images["banner4"]}
                alt="Banner Image"
                className="h-[100%]"
                effect="blur"
              />
              <LazyLoadImage
                src={Images["banner5"]}
                alt="Banner Image"
                className="h-[100%]"
                effect="blur"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="text-center p-6 sm:p-12 lg:p-28 bg-customGray border-radius">
            <h1 className="font-semibold text-sm sm:text-xl lg:text-4xl">
              TRENDIEST STYLES AT A STEAL!
            </h1>
            <h2 className="font-semibold py-2 lg:py-5 text-xs sm:text-base lg:text-2xl">
              50-80% OFF
            </h2>
            <h3 className="font-semibold text-xs sm:text-lg lg:text-3xl">
              12,000+ Styles | 15,000+ Brands
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
