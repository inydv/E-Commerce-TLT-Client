// REACT
import { useEffect } from "react";

// CUSTOM IMPORT
import { OrderDetailCard } from "../Components/index";

// ORDER DETAIL
export default function OrderDetails() {
  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return (
    <div className="px-5">
      <div className="max-w-[1400px] mx-auto">
        <OrderDetailCard />
      </div>
    </div>
  );
}
