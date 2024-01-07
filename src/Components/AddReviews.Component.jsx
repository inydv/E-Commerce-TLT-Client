// REACT AND REACT ROUTER DOM
import { useState } from "react";
import { useParams } from "react-router-dom";

// MUI
import Rating from "@mui/material/Rating";

// CUSTOM IMPORTS
import { ADDORUPDATEPRODUCTREVIEW } from "../Services/index";
import { useUser } from "../Context/User.Context";
import Images from "../Assets/index";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// ADD REVIEW
export default function AddReviews({ fetchProductDetail }) {
  // STATES
  const [iswrite, setIsWrite] = useState(false);
  const [formData, setFormData] = useState({
    rating: 2.5,
    comment: "",
  });

  // CONTEXT
  const { user } = useUser();

  // USE PARAMS
  const { productId } = useParams();

  // CUSTOM FUNCTIONS
  const handleInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async () => {
    const { data } = await ADDORUPDATEPRODUCTREVIEW(productId, formData);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      setFormData({
        rating: 2.5,
        comment: "",
      });
      setIsWrite(false);
      fetchProductDetail();
    }
  };

  // JSX ELEMENT
  return (
    <>
      {iswrite ? (
        <div className="flex flex-col items-center border border-gray-700 rounded-xl p-5">
          <LazyLoadImage
            src={user?.avatar?.url || Images["userIcon"]}
            alt="User Image"
            className="rounded-full h-16 md:h-28 w-16 md:w-28 mx-auto"
            effect="blur"
            onError={({ currentTarget }) => {
              currentTarget.onerror = null;
              currentTarget.src = NoImageAvailable;
            }}
          />
          <p className="py-2"></p>
          <Rating
            value={+formData?.rating}
            precision={0.5}
            max={5}
            name="rating"
            onChange={(e) => handleInput(e)}
          />
          <textarea
            className="mt-3 w-[200px] md:w-[300px] outline-none rounded-sm p-2 md:p-3 text-sm md:text-base h-auto bg-black border border-gray-700"
            rows={3}
            placeholder="Write Your Review Here With length 100 To 200..."
            minLength={100}
            maxLength={200}
            required
            name="comment"
            onChange={(e) => handleInput(e)}
          ></textarea>
          <button
            className="mt-3 primary-button"
            onClick={() => handleSubmit()}
          >
            Review
          </button>
        </div>
      ) : (
        <div className="flex border border-gray-700 rounded-xl p-2 md:p-5">
          <div className="w-[200px] md:w-[300px] h-full grid place-items-center">
            <button className="primary-button" onClick={() => setIsWrite(true)}>
              Review
            </button>
          </div>
        </div>
      )}
    </>
  );
}
