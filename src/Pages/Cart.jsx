import { Children } from "react";
import { TempItems4 } from "../Constants/Temp";

export default function Cart() {
  return (
    <div className="px-5 md:p-5 grid md:grid-cols-4 gap-5">
      <div className="order-2 md:order-1 md:col-span-3">
        <table className="w-full border border-gray-700">
          <thead>
            <tr className="bg-button">
              <th className="p-2 text-sm xl:text-base">Product</th>
              <th className="p-2 text-sm xl:text-base">Quantity</th>
              <th className="p-2 text-sm xl:text-base">Total</th>
              <th className="p-2 text-sm xl:text-base"></th>
            </tr>
          </thead>
          <tbody>
            {Children.toArray(
              TempItems4?.map((item) => (
                <tr>
                  <td className="px-2 py-1 flex items-center">
                    <img
                      src={item.img}
                      className="h-[50px] xl:h-[100px] w-[50px] xl:w-[100px] mr-2 md:mr-5"
                      alt=""
                    />
                    <div>
                      <h6 className="line-clamp text-xs xl:text-base mb-1 xl:mb-2">
                        {item.name}
                      </h6>
                      <p className="text-xs xl:text-base">{item.price}</p>
                    </div>
                  </td>
                  <td className="p-1">
                    <div className="flex">
                      <button className="bg-button text-lg md:text-2xl font-semibold px-1 md:px-2">
                        -
                      </button>
                      <input
                        type="number"
                        className="w-[30px] md:w-[50px] outline-none text-black text-xs md:text-base px-1 md:px-2 text-center font-semibold"
                        readOnly={true}
                      />
                      <button className="bg-button text-lg md:text-2xl font-semibold px-1 md:px-2">
                        +
                      </button>
                    </div>
                  </td>
                  <td className="p-1 md:w-[100px]">
                    <p className="text-center text-sm md:text-base">
                      {item.price}
                    </p>
                  </td>
                  <td className="p-1 md:w-[50px]">
                    <button className="text-sm md:text-xl font-semibold bg-button p-1 md:p-2 rounded">
                      X
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <div className="order-1 md:order-2 md:col-span-1">
        <div className="bg-button p-5">
          <div className="flex justify-between mb-3 xl:mb-5">
            <h1 className="font-semibold text-base xl:text-xl">Sub Total</h1>
            <p>2564</p>
          </div>
          <div className="flex justify-between mb-3 xl:mb-5">
            <h1 className="font-semibold text-base xl:text-xl">
              Shipping Charges
            </h1>
            <p>2564</p>
          </div>
          <div className="flex justify-between mb-5 xl:mb-10">
            <h1 className="font-semibold text-base xl:text-xl">Gross Total</h1>
            <p className="text-green-500">2564</p>
          </div>
          <div className="flex justify-end">
            <button className="font-semibold text-base xl:text-xl py-2 px-5 bg-black">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
