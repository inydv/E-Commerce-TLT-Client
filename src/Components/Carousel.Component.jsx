import { useState, useEffect, Children } from "react";
import CarouselItems from "../Constants/CarouselItems.Constant.json";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";
import Routes from "../Constants/Routes.Constant.json";
import { Link } from "react-router-dom";

export default function Carousel() {
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const time = setTimeout(() => {
      slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
    }, 5000);
    return () => clearInterval(time);
  });

  return (
    <div className="flex overflow-hidden relative">
      <AiFillLeftCircle
        size={30}
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
          CarouselItems?.map((item) => (
            <div className="grid grid-cols-2 items-center w-screen px-10 bg-[#010101]">
              <img src={item.img} alt="" />
              <div>
                <h1 className="font-semibold text-sm sm:text-lg md:text-2xl lg:text-4xl">
                  {item.title}
                </h1>
                <p className="text-xs sm:text-base my-2 sm:my-5 md:text-lg lg:text-xl">
                  {item.desc}
                </p>
                <Link
                  className="bg-button px-5 py-2 text-sm sm:text-base lg:text-lg lg:py-5 lg:px-10"
                  to={Routes.shop}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
      <AiFillRightCircle
        size={30}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2"
        onClick={() => {
          slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
        }}
      />
    </div>
  );
}
