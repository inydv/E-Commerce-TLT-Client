import { Children } from "react";
import Carousel from "react-material-ui-carousel";
import { AddReviews, ProductDetails, ReviewCard } from "../Components/index";
import { TempItems2, TempItems3 } from "../Constants/Temp";

export default function Detail() {
  return (
    <div className="px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="md:grid md:grid-cols-2">
          <Carousel>
            {Children.toArray(
              TempItems2?.images?.map((item) => (
                <img
                  src={item}
                  alt=""
                  className="h-[400px] sm:h-[500px] lg:h-[700px] w-full"
                />
              ))
            )}
          </Carousel>
          <div className="my-3 md:my-5 md:p-5 flex items-center">
            <ProductDetails item={TempItems2} />
          </div>
        </div>

        <div className="flex items-center gap-x-5 md:pt-10 pb-3 md:pb-5">
          <div className="flex-grow h-px bg-gray-700"></div>
          <span className="flex-shrink text-center font-semibold text-xl md:text-4xl">
            Reviews
          </span>
          <div className="flex-grow h-px bg-gray-700"></div>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2 md:pb-5">
          <AddReviews />
          {Children.toArray(
            TempItems3?.map((item) => <ReviewCard item={item} />)
          )}
        </div>
      </div>
    </div>
  );
}
