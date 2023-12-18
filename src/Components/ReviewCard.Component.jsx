// MUI
import Rating from "@mui/material/Rating";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// CUSTOM IMPORTS
import { useUser } from "../Context/User.Context";
import { DELETEPRODUCTREVIEW } from "../Services/index";
import Images from "../Assets/index";

export default function ReviewCard({ productId, item, fetchProductDetail }) {
  // CONTEXT
  const { user } = useUser();

  // CUSTOM FUNCTION
  const handleDelete = async (reviewId) => {
    const { data } = await DELETEPRODUCTREVIEW(productId, reviewId);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      fetchProductDetail();
    }
  };

  // JSX ELEMENT
  return (
    <div className="flex flex-col items-center border border-gray-700 rounded-xl p-5">
      <img
        src={item?.user?.avatar?.url || Images["userIcon"]}
        alt="User Image"
        className="rounded-full h-16 md:h-28 w-16 md:w-28"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = Images["NoImageAvailable"];
        }}
      />
      <p className="py-2">{item?.user?.username}</p>
      <Rating value={item?.rating} precision={0.5} readOnly />
      <p className="py-5 w-[200px] md:w-[300px] text-sm md:text-base">
        {item?.comment}
      </p>
      {user?._id === item?.user?._id ? (
        <button
          className="primary-button self-end"
          onClick={() => handleDelete(item?._id)}
        >
          Delete
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
