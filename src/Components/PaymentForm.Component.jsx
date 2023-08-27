export default function PaymentForm({ focus, blur }) {
  return (
    <div className="form-container grid gap-x-3 max-w-[400px] grid-rows-[80px_80px_80px] pt-5">
      <div className="field-container">
        <label className="text-sm font-semibold">Name</label>
        <input
          className="w-full rounded-sm py-1 px-4 outline-none text-black text-base"
          maxLength="20"
          type="text"
          placeholder="LOKESH YADAV"
        />
      </div>
      <div className="field-container">
        <label className="text-sm font-semibold">Card Number</label>
        <span className="cursor-pointer float-right text-xs font-semibold bg-button rounded py-1 px-2 mb-1">
          Generate
        </span>
        <input
          className="w-full rounded-sm py-1 px-4 outline-none text-black text-base"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="1234 5678 9012"
        />
      </div>
      <div className="field-container">
        <label className="text-sm font-semibold">Expiration (MM/YY)</label>
        <input
          className="w-full rounded-sm py-1 px-4 outline-none text-black text-base"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="02/30"
        />
      </div>
      <div className="field-container">
        <label className="text-sm font-semibold">Security Code</label>
        <input
          className="w-full rounded-sm py-1 px-4 outline-none text-black text-base"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          placeholder="123"
          onFocus={() => focus()}
          onBlur={() => blur()}
        />
      </div>
      <div className="field-container">
        {/* <button className="bg-button py-2 px-5 font-semibold w-full">
          Submit
        </button> */}
        <button className="bg-button rounded-full w-9 h-9 block absolute border-t-white border-t-4 left-[calc(50%-25px)] btn-spinner"></button>
      </div>
    </div>
  );
}
