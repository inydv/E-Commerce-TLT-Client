import { Children } from "react";
import { AboutItems } from "../Constants/AboutItems";

export default function About() {
  return (
    <div className="p-5">
      <h1 className="font-bold text-4xl">ABOUT</h1>
      {Children.toArray(
        AboutItems?.map((item) => (
          <>
            <h3 className="font-semibold text-lg pb-2 pt-10">{item.title}</h3>
            <p className="text-base">{item.content}</p>
            <p className="text-base">{item.content2}</p>
          </>
        ))
      )}
    </div>
  );
}
