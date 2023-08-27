export default function ProceedNextBox() {
  return (
    <div className="bg-button w-full sm:w-min sm:min-w-[400px] xl:w-full xl:min-w-full float-right p-5">
      <div className="flex justify-between mb-3 xl:mb-5">
        <h1 className="font-semibold text-base pr-2 xl:text-lg">Sub Total</h1>
        <p className="text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-between mb-3 xl:mb-5">
        <h1 className="font-semibold text-base pr-2 xl:text-lg">
          Shipping Charges
        </h1>
        <p className="text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-between mb-5 xl:mb-10">
        <h1 className="font-semibold text-base pr-2 xl:text-lg">Gross Total</h1>
        <p className="text-green-500 text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-end">
        <button className="font-semibold text-base py-2 px-4 bg-black">
          Checkout
        </button>
      </div>
    </div>
  );
}
