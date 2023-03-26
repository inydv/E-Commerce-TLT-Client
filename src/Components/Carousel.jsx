import { useState, useEffect, Children } from "react";
import { CarouselItems } from "../Constants/CarouselItems";
import { AiFillLeftCircle, AiFillRightCircle } from "react-icons/ai";

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
        size={50}
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
            <div
              style={{ backgroundColor: `#${item.bg}` }}
              className="grid grid-cols-2 items-center w-screen"
            >
              <img src={item.img} alt="" />
              <div className="max-w-[500px]">
                <h1 className="text-4xl font-semibold">{item.title}</h1>
                <p className="text-2xl my-5">{item.desc}</p>
                <button className="bg-gray-900 px-10 py-5">SHOP NOW</button>
              </div>
            </div>
          ))
        )}
      </div>
      <AiFillRightCircle
        size={50}
        className="absolute top-0 bottom-0 cursor-pointer z-10 m-auto right-2"
        onClick={() => {
          slideIndex === 2 ? setSlideIndex(0) : setSlideIndex(slideIndex + 1);
        }}
      />
    </div>
  );
}
