export default function MyAccountLowerCard() {
  return (
    <div className="max-w-[650px] mx-auto mt-5">
      <div className="xl:grid xl:grid-cols-2">
        <h6 className="font-semibold text-lg">Username</h6>
        <input
          type="text"
          className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-1 xl:mt-0"
          placeholder="Lokesh Yadav"
          required
          autoComplete="username"
        />
      </div>
      <div className="xl:grid xl:grid-cols-2 mt-4">
        <h6 className="font-semibold text-lg">Email</h6>
        <input
          type="email"
          className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-1 xl:mt-0"
          placeholder="lokesh@gmail.com"
          required
          autoComplete="email"
        />
      </div>
      <div className="xl:grid xl:grid-cols-2 mt-4">
        <h6 className="font-semibold text-lg">Phone</h6>
        <input
          type="number"
          className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-1 xl:mt-0"
          min={10}
          max={10}
          placeholder="1234567890"
          required
          autoComplete="phone"
        />
      </div>
      <div className="xl:grid xl:grid-cols-2 mt-4 items-center">
        <h6 className="font-semibold text-lg">Gender</h6>
        <div>
          <input type="radio" className="mr-2" id="Male" checked={true} />
          <label htmlFor="Male" className="mr-5 text-base">
            Male
          </label>
          <input type="radio" className="mr-2" id="Female" checked={false} />
          <label htmlFor="Female" className="mr-5 text-base">
            Female
          </label>
          <input type="radio" className="mr-2" id="Others" checked={false} />
          <label htmlFor="Female" className="text-base">
            Others
          </label>
        </div>
      </div>
      <div className="xl:grid xl:grid-cols-2 mt-4">
        <div>
          <h6 className="font-semibold text-lg">Change Password</h6>
          <p className="text-xs ml-5 mt-1 xl:mt-2 font-semibold">
            **
            <span className="text-red-700 cursor-pointer"> Click Me </span>
            To Change Password **
          </p>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-4 xl:mt-0"
            placeholder="Current Password"
            disabled={true}
          />
          <input
            type="text"
            className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-4"
            placeholder="New Password"
            disabled={true}
          />
          <input
            type="text"
            className="w-full xl:max-w-[300px] rounded-sm py-2 px-4 outline-none text-black text-base mt-4"
            placeholder="Confirm Password"
            disabled={true}
          />
        </div>
      </div>
    </div>
  );
}
