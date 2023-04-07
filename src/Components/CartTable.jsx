import { Children } from "react";
import { TempItems4 } from "../Constants/Temp";

export default function CartTable() {
  return (
    <tbody>
      {Children.toArray(
        TempItems4?.map((item) => (
          <tr>
            <td className="p-2 flex items-center justify-center">
              <img
                src={item.img}
                className="h-[80px] xl:h-[100px] w-[80px] xl:w-[100px] sm:mr-2 md:mr-5"
                alt=""
              />
              <div className="hidden sm:block">
                <h6 className="line-clamp text-sm xl:text-base mb-1 xl:mb-2">
                  {item.name}
                </h6>
                <p className="text-base">{item.price}</p>
              </div>
            </td>
            <td className="p-1 w-[100px]">
              <div className="flex justify-center">
                <button className="bg-button text-lg md:text-2xl font-semibold px-2">
                  -
                </button>
                <input
                  type="number"
                  className="w-[30px] md:w-[50px] outline-none text-black text-xs md:text-base px-1 md:px-2 text-center font-semibold"
                  readOnly={true}
                />
                <button className="bg-button text-lg md:text-2xl font-semibold px-2">
                  +
                </button>
              </div>
            </td>
            <td className="p-1 w-[100px] md:w-[100px]">
              <p className="text-center text-base">{item.price}</p>
            </td>
            <td className="p-1 w-[50px] md:w-[70px]">
              <div className="flex justify-center items-center">
                <button className="text-sm md:text-xl font-semibold bg-button p-2 md:p-2 rounded">
                  X
                </button>
              </div>
            </td>
          </tr>
        ))
      )}
    </tbody>
  );
}
