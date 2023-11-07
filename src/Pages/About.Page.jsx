// REACT
import { Children, useEffect } from "react";

// CUSTOM IMPORT
import AboutItemsConstant from "../Constants/AboutItems.Constant.json";

// ABOUT
export default function About() {
  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return (
    <div className="px-5 py-5 sm:px-10">
      <h1 className="font-semibold text-2xl sm:text-4xl">ABOUT</h1>
      {Children.toArray(
        AboutItemsConstant?.map((item) => (
          <>
            <h3 className="font-semibold text-lg pb-2 pt-5 sm:pt-10">
              {item.title}
            </h3>
            <p className="text-base">{item.content}</p>
            <p className="text-base">{item.content2}</p>
          </>
        ))
      )}
    </div>
  );
}
