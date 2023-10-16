import Rating from "@mui/material/Rating";
import { useUser } from "../Context/User.Context";
import toast from "react-hot-toast";
import toastConfig from "../Constants/Toast.Constant.json";
import { DELETEPRODUCTREVIEW } from "../Services/index";

export default function ReviewCard({ productId, item, fetchProductDetail }) {
  const { user } = useUser();

  const handleDelete = async (reviewId) => {
    const { data } = await DELETEPRODUCTREVIEW(productId, reviewId);

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, toastConfig.success);
      fetchProductDetail();
    }
  };

  return (
    <div className="flex flex-col items-center border border-gray-700 rounded-xl p-3 md:p-5">
      <img
        src={item?.user?.avatar?.url || "/src/Assets/user-icon.png"}
        alt=""
        className="rounded-full h-16 md:h-28 w-16 md:w-28"
      />
      <p className="py-1 md:py-2">{item?.user?.username}</p>
      <Rating value={item?.rating} precision={0.5} readOnly />
      <p className="py-1 md:py-3 w-[200px] md:w-[400px] text-sm md:text-base">
        {item?.comment}
      </p>
      {user?._id === item?.user?._id ? (
        <button
          className="bg-button py-2 px-5 text-base font-semibold self-end"
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
