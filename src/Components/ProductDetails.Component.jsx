import Rating from "@mui/material/Rating";
import RSCoversion from "../Pipes/RSConversion.Pipe";

export default function ProductDetails({ item }) {
  return (
    <div>
      <h2 className="font-semibold text-2xl lg:text-4xl">{item?.name}</h2>
      <p className="font-medium text-lg lg:text-xl mt-1 lg:mt-2">
        Product #{item?._id}
      </p>
      <Rating
        value={item?.ratings || 0}
        precision={0.5}
        className="my-2 lg:my-5"
        readOnly
      />
      <h1 className="font-semibold text-lg lg:text-xl">
        {RSCoversion(item?.price)}
      </h1>
      <p
        className="text-base lg:text-lg mt-1 lg:my-2"
        dangerouslySetInnerHTML={{ __html: item?.description }}
      ></p>
      <p className="text-base lg:text-lg">
        <span className="font-semibold">Quantity: </span>
        {item?.quantity}
      </p>
      <button className="bg-button py-2 px-5 my-3 text-base font-semibold">
        ADD TO CART
      </button>
    </div>
  );
}
