import { CartTable, ProceedNextBox } from "../Components/index";

export default function Cart() {
  return (
    <div className="p-5 grid md:grid-cols-4 gap-2 lg:gap-5">
      <div className="order-2 md:order-1 md:col-span-3">
        <table className="w-full border border-button">
          <thead>
            <tr className="bg-button">
              <th className="p-2 text-base xl:text-lg">Product</th>
              <th className="p-2 text-base xl:text-lg">Quantity</th>
              <th className="p-2 text-base xl:text-lg">Total</th>
              <th className="p-2"></th>
            </tr>
          </thead>
          <CartTable />
        </table>
      </div>
      <div className="order-1 md:order-2 md:col-span-1">
        <ProceedNextBox name="Checkout" />
      </div>
    </div>
  );
}
