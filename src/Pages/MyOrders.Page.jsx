// REACT AND REACT ROUTER DOM
import { useEffect, useState } from "react";

// CUSTOM IMPORTS
import { GETMYORDERS } from "../Services/index";
import header from "../Constants/TableHeader.json";
import { OrderTable } from "../Shared/index";

// MY ORDER
export default function MyOrders() {
  // STATES
  const [orders, setOrders] = useState([]);

  // CUSTOM FUNCTION
  const fetchMyOrders = async () => {
    const { data } = await GETMYORDERS();
    if (data && data.SUCCESS) {
      setOrders(data.DATA);
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);

    fetchMyOrders();
  }, []);

  // JSX ELEMENT
  return (
    <div className="p-5 sm:px-10">
      <div className="overflow-x-auto pb-2">
        <OrderTable header={header.myOrder} orders={orders} />
      </div>
    </div>
  );
}
