import { Children } from "react";
import { TempItems4 } from "../Constants/Temp";

export default function CartTable() {
  return (
    <>
      {Children.toArray(
        TempItems4?.map((item) => (
          <div className="p-1 sm:p-2 flex justify-between items-center border-b border-button">
            <div className="flex items-center">
              <img
                src={item.img}
                className="h-[70px] w-[70px] sm:h-[120px] sm:w-[120px]"
                alt=""
              />
              <div className="px-2 sm:px-4">
                <h6 className="line-clamp text-sm sm:text-base mb-2">
                  {item.name}
                </h6>
                <div className="flex items-center">
                  <div className="flex">
                    <button className="bg-button text-base sm:text-2xl font-semibold px-2">
                      -
                    </button>
                    <input
                      type="number"
                      className="w-[25px] sm:w-[50px] outline-none text-black text-sm sm:text-base px-1 text-center font-semibold"
                      readOnly={true}
                      value={25}
                    />
                    <button className="bg-button text-base sm:text-2xl font-semibold px-2">
                      +
                    </button>
                  </div>
                  <p className="text-sm sm:text-base font-bold px-2">X</p>
                  <p className="text-sm sm:text-base">{item.price}</p>
                </div>
                <p className="text-sm sm:text-base mt-2 font-semibold text-green-500">In Stock</p>
              </div>
            </div>
            <div className="flex items-center">
              <p className="text-sm sm:text-base pr-2 sm:pr-4">{item.price}</p>
              <button className="text-sm sm:text-base font-semibold bg-button px-2 py-1 rounded">
                X
              </button>
            </div>
          </div>
        ))
      )}
    </>
  );
}
