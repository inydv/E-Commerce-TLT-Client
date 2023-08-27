export default function ShippingForm() {
  return (
    <form className="border-button border-2 p-5 rounded">
      <fieldset className="flex justify-between">
        <legend className="font-semibold">Name *</legend>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="Lokesh"
            autoFocus
            required
            autoComplete="first-name"
          />
          <div className="text-sm">First Name</div>
        </div>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="Yadav"
            required
            autoComplete="last-name"
          />
          <div className="text-sm">Last Name</div>
        </div>
      </fieldset>

      <fieldset className="flex justify-between mt-5">
        <legend className="font-semibold">Contact *</legend>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="im.nydv@gmail.com"
            autoFocus
            required
            autoComplete="email"
          />
          <div className="text-sm">Email</div>
        </div>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="7303405787"
            required
            autoComplete="phone"
          />
          <div className="text-sm">Phone</div>
        </div>
      </fieldset>

      <fieldset className="flex justify-between mt-5">
        <legend className="font-semibold">Address *</legend>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="House No. 826"
            autoFocus
            required
            autoComplete="address-1"
          />
          <div className="text-sm">Adress Line 1</div>
        </div>
        <div className="w-[45%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="Street No. 9"
            required
            autoComplete="address-2"
          />
          <div className="text-sm">Address Line 2</div>
        </div>
      </fieldset>

      <fieldset className="flex justify-between mt-2">
        <div className="w-[30%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="Kapasher"
            autoFocus
            required
            autoComplete="city"
          />
          <div className="text-sm">City</div>
        </div>
        <div className="w-[30%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="New Delhi"
            autoFocus
            required
            autoComplete="state"
          />
          <div className="text-sm">State</div>
        </div>
        <div className="w-[30%]">
          <input
            type="text"
            className="w-full text-black outline-none px-4 py-2 rounded-sm my-1 text-base"
            placeholder="110037"
            required
            autoComplete="pincode"
          />
          <div className="text-sm">Pincode</div>
        </div>
      </fieldset>

      <div className="mt-10 flex justify-end">
        <button
          className="bg-button py-2 px-5 text-base font-semibold"
          type="submit"
        >
          Payment
        </button>
      </div>
    </form>
  );
}
