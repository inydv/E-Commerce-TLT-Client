import { Link } from "react-router-dom";

// CUSTOM IMPORTS
import Images from "../Assets/index";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// PRODUCTS CATEGORIES CARD
export default function ProductsCategoriesCard({ item }) {
  // JSX ELEMENT
  return (
    <article className="aspect-square h-full w-full max-h-[344px] max-w-[48%] md:max-w-[344px] overflow-hidden relative group">
      <LazyLoadImage
        src={Images[item.img]}
        alt="Category Image"
        className="h-full w-full transition-all duration-200 ease-in-out group-hover:scale-125 group-hover:opacity-25"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = Images["NoImageAvailable"];
        }}
      />
      <Link
        to={item.link}
        className="absolute top-0 h-full w-full hidden items-center justify-center group-hover:flex"
      >
        <p className="text-2xl md:text-4xl font-semibold">{item.title}</p>
      </Link>
    </article>
  );
}
