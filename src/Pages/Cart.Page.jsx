// REACT
import { Children, useEffect, useState } from "react";

// CUSTOM IMPORTS
import { CartTable, ProceedNextBox, NotAvailable } from "../Components/index";
import header from "../Constants/TableHeader.json";

// CART
export default function Cart() {
  // STATE
  const [cartList, setCartList] = useState([]);

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    const setState = () => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setCartList(cart);
    };

    window.addEventListener("storage", () => {
      setState();
    });

    setState();

    return () => window.removeEventListener("storage", setState());
  }, []);

  // JSX ELEMENT
  return (
    <div className="page-padding">
      <div className="rounded mb-5">
        <div className="p-2">
          <table className="w-full">
            <thead>
              <tr>
                {Children.toArray(
                  header?.cart?.map((name) => (
                    <th className="td-border p-2">{name}</th>
                  ))
                )}
              </tr>
            </thead>
            <tbody>
              {cartList?.length > 0 ? (
                Children.toArray(
                  cartList?.map((item) => <CartTable data={item} />)
                )
              ) : (
                <tr>
                  <td colSpan="100%" className="td-border px-5 py-10">
                    <NotAvailable />
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <div className="flex justify-end">
        <ProceedNextBox cart={cartList} />
      </div>
    </div>
  );
}
