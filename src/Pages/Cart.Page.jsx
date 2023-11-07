// REACT
import { Children, useEffect } from "react";

// CUSTOM IMPORTS
import { CartTable, ProceedNextBox, NotAvailable } from "../Components/index";
import UpdateCart from "../Pipes/Cart.Pipe";
import header from "../Constants/TableHeader.json";

// CART
export default function Cart() {
  // CONTEXT
  const [cart] = UpdateCart([]);

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return (
    <div className="p-5 sm:p-10">
      <div className="rounded mb-5">
        <div className="p-2">
          <table className="w-full">
            <thead>
              <tr>
                {Children.toArray(
                  header?.cart?.map((name) => (
                    <th className="border border-gray-500 p-2">{name}</th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {cart?.length > 0 ? (
                Children.toArray(cart?.map((item) => <CartTable data={item} />))
              ) : (
                <NotAvailable title={"Product"} />
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end">
        <ProceedNextBox />
      </div>
    </div>
  );
}
