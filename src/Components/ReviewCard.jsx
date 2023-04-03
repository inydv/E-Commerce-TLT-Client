import Rating from "@mui/material/Rating";

export default function ReviewCard({ item }) {
  return (
    <div className="flex flex-col items-center border border-gray-700 rounded-xl p-3 md:p-5">
      <img
        src={item.img}
        alt=""
        className="rounded-full h-16 md:h-28 w-16 md:w-28"
      />
      <p className="py-1 md:py-2">{item.name}</p>
      <Rating value={item.rating} precision={0.5} readOnly />
      <p className="pt-1 md:pt-3 w-[200px] md:w-[400px] text-sm md:text-base">{item.comment}</p>
    </div>
  );
}
