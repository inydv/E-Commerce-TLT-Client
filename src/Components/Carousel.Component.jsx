// REACT AND REACT ROUTER DOM
import { useState, useEffect, Children } from "react";
import { Link } from "react-router-dom";

// REACT ICONS
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

// CUSTOM IMPORTS
import CarouselItemsConstant from "../Constants/CarouselItems.Constant.json";
import Images from "../Assets/index";

// CAROUSEL
export default function Carousel() {
  // STATE
  const [slideIndex, setSlideIndex] = useState(0);

  // USE EFFECT
  useEffect(() => {
    const time = setTimeout(() => {
      slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => clearInterval(time);
  });

  // JSX ELEMENT
  return (
    <div className="flex overflow-hidden relative">
      <AiFillLeftCircle
        size={25}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto left-2"
        onClick={() => {
          slideIndex === 0 ? setSlideIndex(2) : setSlideIndex(slideIndex - 1);
        }}
      />
      <div
        className="flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translate(${slideIndex * -100}vw)` }}
      >
        {Children.toArray(
          CarouselItemsConstant?.map((item) => (
            <div className="grid gap-5 grid-cols-2 items-center w-screen px-10 sm:px-14 bg-customBlack max-h-banner">
              <div className="grid items-end justify-center max-h-banner h-full">
                <img
                  src={Images[item.img]}
                  alt="Carousel Image"
                  className="max-h-banner"
                />
              </div>
              <div>
                <h1 className="font-semibold text-base sm:text-xl md:text-4xl mb-3 md::mb-5">
                  {item.title}
                </h1>
                <p className="hidden sm:block text-base md:text-xl mb-5 md:mb-10">
                  {item.desc}
                </p>
                <Link
                  className="primary-button !text-xs sm:!text-base md:px-6 md:py-4"
                  to={item.link}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <AiFillRightCircle
        size={25}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2"
        onClick={() => {
          slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
        }}
      />
    </div>
  );
}
