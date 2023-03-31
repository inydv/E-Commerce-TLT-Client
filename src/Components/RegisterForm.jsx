import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { HiUser, HiPhone } from "react-icons/hi";

export default function RegisterForm({ registerTab }) {
  return (
    <form
      className="transition-all duration-200 ease-linear grid place-items-center h-[80%]"
      ref={registerTab}
    >
      <div>
        <div className="flex items-center justify-between">
          <HiUser size={25} />
          <input
            type="text"
            className="w-[80%] ml-5 rounded-sm py-1 px-4 outline-none text-black text-base"
            placeholder="Lokesh Yadav"
            required
            autoFocus
            autoComplete="username"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <HiPhone size={25} />
          <input
            type="number"
            min={10}
            max={10}
            className="w-[80%] ml-5 rounded-sm py-1 px-4 outline-none text-black text-base"
            placeholder="1234567890"
            required
            autoFocus
            autoComplete="phone"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <MdEmail size={25} />
          <input
            type="email"
            className="w-[80%] ml-5 rounded-sm py-1 px-4 outline-none text-black text-base"
            placeholder="lokesh@gmail.com"
            required
            autoFocus
            autoComplete="email"
          />
        </div>
        <div className="flex items-center justify-between my-2">
          <IoMdLock size={25} />
          <input
            type="password"
            className="w-[80%] ml-5 rounded-sm py-1 px-4 outline-none text-black text-base"
            placeholder="Password"
            required
            autoComplete="current-password"
          />
        </div>
        <button className="bg-button text-base font-semibold py-2 px-4 float-right">
          Register
        </button>
      </div>
    </form>
  );
}
