// REACT AND REACT ROUTER DOM
import { useState, Children } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { AiFillLeftCircle } from "@react-icons/all-files/ai/AiFillLeftCircle";
import { AiFillRightCircle } from "@react-icons/all-files/ai/AiFillRightCircle";

// CUSTOM IMPORTS
import ImageBannerConstant from "../Constants/ImageBanner.Constant.json";
import Images from "../Assets/index";

// IMAGE LAZY LOADING
import { LazyLoadImage } from "react-lazy-load-image-component";

// IMAGE BANNER
export default function ImageBanner() {
  // STATE
  const [slideIndex, setSlideIndex] = useState(0);

  // JSX ELEMENT
  return (
    <section className="flex overflow-hidden relative">
      <AiFillLeftCircle
        size={25}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto left-2 bg-black rounded-full"
        onClick={() => {
          slideIndex === 0 ? setSlideIndex(1) : setSlideIndex(slideIndex - 1);
        }}
      />
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translate(${slideIndex * -100}vw)` }}
      >
        {Children.toArray(
          ImageBannerConstant?.map((item) => (
            <Link to={item.link} className="w-screen">
              <LazyLoadImage
                src={Images[item.img]}
                alt="Carousel Image"
                className="max-h-banner mx-auto"
                effect="blur"
              />
            </Link>
          ))
        )}
      </div>
      <AiFillRightCircle
        size={25}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2 bg-black rounded-full"
        onClick={() => {
          slideIndex === 1 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
        }}
      />
    </section>
  );
}
