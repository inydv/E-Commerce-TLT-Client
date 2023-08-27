import { CartTable } from "../Shared/index";
import { ShippingForm } from "../Components/index";

export default function Shipping() {
  return (
    <div className="px-5 grid lg:grid-cols-2 gap-2">
      <div className="border-button border-2 rounded">
        <CartTable openForCart={false} />
      </div>
      <div>
        <ShippingForm />
      </div>
    </div>
  );
}
