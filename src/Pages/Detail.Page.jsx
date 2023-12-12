// REACT AND REACT ROUTER DOM
import { Children, useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";

// REACT MATERIAL UI CAROUSEL
import Carousel from "react-material-ui-carousel";

// CUSTOM IMPORTS
import { AddReviews, ProductDetails, ReviewCard } from "../Components/index";
import { GETPRODUCTDETAILS } from "../Services/index";

// DETAIL
export default function Detail() {
  // STATES
  const [productDetail, setProductDetail] = useState();

  // USE PARAMS
  const { productId } = useParams();

  // CUSTOM FUNCTION
  const fetchProductDetail = useCallback(async () => {
    const { data } = await GETPRODUCTDETAILS(productId);
    if (data && data.SUCCESS) {
      setProductDetail(data.DATA);
    }
  }, [productId]);

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchProductDetail();
  }, [fetchProductDetail]);

  // JSX ELEMENT
  return (
    <div className="p-5 sm:px-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="md:grid md:grid-cols-2">
          <Carousel>
            {Children.toArray(
              productDetail?.images?.map((item) => (
                <img
                  src={item?.url}
                  alt="Product Image"
                  className="h-[400px] sm:h-[500px] lg:h-[700px] w-full"
                  onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src = "/src/Assets/NoImageAvailable.jpg";
                  }}
                />
              ))
            )}
          </Carousel>
          <div className="mt-5 md:mt-0 md:p-5 flex items-center">
            <ProductDetails item={productDetail} />
          </div>
        </div>

        <div className="flex items-center gap-x-5 py-5 md:py-10">
          <div className="heading-line"></div>
          <span className="heading">Reviews</span>
          <div className="heading-line"></div>
        </div>

        <div className="flex overflow-x-auto gap-2 pb-2">
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
