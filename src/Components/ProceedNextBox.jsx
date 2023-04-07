export default function ProceedNextBox({ name }) {
  return (
    <div className="bg-button p-5">
      <div className="flex justify-between mb-3 xl:mb-5">
        <h1 className="font-semibold text-base xl:text-xl">Sub Total</h1>
        <p className="text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-between mb-3 xl:mb-5">
        <h1 className="font-semibold text-base xl:text-xl">Shipping Charges</h1>
        <p className="text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-between mb-5 xl:mb-10">
        <h1 className="font-semibold text-base xl:text-xl">Gross Total</h1>
        <p className="text-green-500 text-base xl:text-lg">2564</p>
      </div>
      <div className="flex justify-end">
        <button className="font-semibold text-base py-2 px-4 bg-black">
          {name}
        </button>
      </div>
    </div>
  );
}
