// MUI
import Rating from "@mui/material/Rating";

// CUSTOM IMPORTS
import RSCoversion from "../Pipes/RSConversion.Pipe";
import UpdateCart from "../Pipes/Cart.Pipe";

// PRODUCT DETAILS
export default function ProductDetails({ item }) {
  // JSX ELEMENT
  return (
    <section>
      <h2 className="font-semibold text-2xl lg:text-4xl">{item?.name}</h2>
      <p className="text-base lg:text-xl mt-4">Product #{item?._id}</p>
      <Rating
        value={item?.ratings || 0}
        precision={0.5}
        className="mt-4"
        readOnly
      />
      <h1 className="font-semibold text-lg lg:text-xl mt-4">
        {RSCoversion(item?.price)}
      </h1>
      <h1 className="underline text-xl font-semibold mt-4">
        Product Description
      </h1>
      <p className="text-base lg:text-lg mt-2">{item?.description}</p>
      <p className="text-base lg:text-lg mt-4">
        <span className="font-semibold">Quantity: </span>
        {item?.quantity}
      </p>
      <button
        className="primary-button mt-4"
        onClick={() => UpdateCart({ product: item, quantity: 1 })}
      >
        ADD TO CART
      </button>
    </section>
  );
}
