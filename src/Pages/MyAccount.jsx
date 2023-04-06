import Photo from "../Assets/men/pullovers.jpg";
import { BsFillPencilFill } from "react-icons/bs";

export default function MyAccount() {
  return (
    <div className="px-5 sm:p-5">
      <div className="max-w-[1400px] mx-auto">
        <div className="h-[50px] sm:h-[100px] xl:h-[150px] bg-gradient-to-r from-[#060606] to-[#030303] rounded-tl-full rounded-br-full blur-sm brightness-150"></div>
        <div className="max-w-[1000px] mx-auto">
          <div className="flex items-center justify-between -translate-y-3 sm:-translate-y-10">
            <div className="flex items-center">
              <div className="relative">
                <img
                  src={Photo}
                  alt=""
                  className="rounded-full h-[50px] sm:h-[150px] w-[50px] sm:w-[150px] border-2 border-white mr-3 sm:mr-5"
                />
                <BsFillPencilFill className="absolute bottom-0 right-2 sm:bottom-5 sm:right-4 bg-white rounded-full p-1 sm:p-2 edit-icon cursor-pointer text-lg sm:text-4xl" />
              </div>
              <div>
                <h1 className="font-semibold text-base sm:text-3xl">Profile</h1>
                <p className="text-xs sm:text-base">
                  Update your photo and personal details.
                </p>
              </div>
            </div>
            <div>
              <button className="bg-button px-2 sm:px-5 py-1 sm:py-2 font-semibold text-xs sm:text-base">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        <div className="max-w-[650px] mx-auto mt-4 sm:mt-0">
          <div className="grid grid-cols-2">
            <h6 className="font-semibold text-sm sm:text-lg">Username</h6>
            <input
              type="text"
              className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base"
              placeholder="Lokesh Yadav"
              required
              autoComplete="username"
            />
          </div>
          <div className="grid grid-cols-2 mt-2 sm:mt-4">
            <h6 className="font-semibold text-sm sm:text-lg">Email</h6>
            <input
              type="email"
              className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base"
              placeholder="lokesh@gmail.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="grid grid-cols-2 mt-2 sm:mt-4">
            <h6 className="font-semibold text-sm sm:text-lg">Phone</h6>
            <input
              type="number"
              className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base"
              min={10}
              max={10}
              placeholder="1234567890"
              required
              autoComplete="phone"
            />
          </div>
          <div className="grid grid-cols-2 mt-2 sm:mt-4 items-center">
            <h6 className="font-semibold text-sm sm:text-lg">Gender</h6>
            <div>
              <input type="radio" className=" mr-2" id="Male" checked={true} />
              <label htmlFor="Male" className="mr-5 text-sm sm:text-base">
                Male
              </label>
              <input
                type="radio"
                className="mr-2"
                id="Female"
                checked={false}
              />
              <label htmlFor="Female" className="mr-5 text-sm sm:text-base">
                Female
              </label>
              <input
                type="radio"
                className="mr-2"
                id="Others"
                checked={false}
              />
              <label htmlFor="Female" className="text-sm sm:text-base">
                Others
              </label>
            </div>
          </div>
          <div className="grid grid-cols-2 mt-2 sm:mt-4">
            <div>
              <h6 className="font-semibold text-sm sm:text-lg">
                Change Password
              </h6>
              <p className="text-xs ml-2 sm:ml-5 mt-1 sm:mt-2 font-semibold">
                **
                <span className="text-red-700 cursor-pointer"> Click Me </span>
                To Change Password **
              </p>
            </div>
            <div className="flex flex-col">
              <input
                type="text"
                className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base"
                placeholder="Current Password"
                disabled={true}
              />
              <input
                type="text"
                className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base mt-2 sm:mt-4"
                placeholder="New Password"
                disabled={true}
              />
              <input
                type="text"
                className="max-w-[300px] rounded-sm py-1 px-2 sm:px-4 outline-none text-black text-sm sm:text-base mt-2 sm:mt-4"
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
