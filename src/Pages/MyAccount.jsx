import Photo from "../Assets/men/pullovers.jpg";
import { BsFillPencilFill } from "react-icons/bs";

export default function MyAccount() {
  return (
    <div className="p-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="hidden xl:block xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex xl:items-center justify-between flex-col md:flex-row xl:-translate-y-10">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={Photo}
                  alt=""
                  className="rounded-full h-[80px] xl:h-[150px] w-[80px] xl:w-[150px] border-2 border-white mr-5"
                />
                <BsFillPencilFill className="absolute right-2 bottom-0 sm:right-5 bg-white rounded-full p-1 xl:p-2 edit-icon cursor-pointer text-2xl xl:text-4xl" />
              </div>
              <div>
                <h1 className="font-semibold text-2xl xl:text-3xl">Profile</h1>
                <p className="text-base">
                  Update your photo and personal details.
                </p>
              </div>
            </div>
            <div className="mt-4 xl:mt-0 flex justify-end md:block">
              <button className="bg-button px-4 py-2 font-semibold text-base">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
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
              <input
                type="radio"
                className="mr-2"
                id="Female"
                checked={false}
              />
              <label htmlFor="Female" className="mr-5 text-base">
                Female
              </label>
              <input
                type="radio"
                className="mr-2"
                id="Others"
                checked={false}
              />
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
      </div>
    </div>
  );
}
