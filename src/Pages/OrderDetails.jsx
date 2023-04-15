import { OrderDetailCard } from "../Components/index";
import { CartTable } from "../Shared/index";

export default function OrderDetails() {
  return (
    <div className="px-5">
      <div className="max-w-[1400px] mx-auto">
        <OrderDetailCard />
        <CartTable openForCart={false} />
      </div>
    </div>
  );
}
