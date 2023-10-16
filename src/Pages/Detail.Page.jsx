import { Children, useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { AddReviews, ProductDetails, ReviewCard } from "../Components/index";
import { useParams } from "react-router-dom";
import { GETPRODUCTDETAILS } from "../Services/index";

export default function Detail() {
  const { productId } = useParams();
  const [productDetail, setProductDetail] = useState();

  const fetchProductDetail = async () => {
    const { data } = await GETPRODUCTDETAILS(productId);
    if (data && data.SUCCESS) {
      setProductDetail(data.DATA);
    }
  };

  useEffect(() => {
    fetchProductDetail();
  }, [productId]);

  return (
    <div className="px-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="md:grid md:grid-cols-2">
          <Carousel>
            {Children.toArray(
              productDetail?.images?.map((item) => (
                <img
                  src={item?.url}
                  alt=""
                  className="h-[400px] sm:h-[500px] lg:h-[700px] w-full"
                />
              ))
            )}
          </Carousel>
          <div className="my-3 md:my-5 md:p-5 flex items-center">
            <ProductDetails item={productDetail} />
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
          <AddReviews fetchProductDetail={() => fetchProductDetail()} />
          {Children.toArray(
            productDetail?.reviews?.map((item) => (
              <ReviewCard
                productId={productDetail?._id}
                item={item}
                fetchProductDetail={() => fetchProductDetail()}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}
