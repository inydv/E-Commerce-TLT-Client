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
    <section className="page-padding">
      <h1 className="page-title">ABOUT</h1>
      {Children.toArray(
        AboutItemsConstant?.map((item) => (
          <>
            <h3 className="font-semibold text-lg pb-2">{item.title}</h3>
            <p className="text-base">{item.content}</p>
            <p className="text-base">{item.content2}</p>
          </>
        ))
      )}
    </section>
  );
}
