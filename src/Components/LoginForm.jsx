import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { routes } from "../Core/Routes";
import { Link } from "react-router-dom";

export default function LoginForm({ loginTab }) {
  return (
    <form
      className="transition-all duration-200 ease-linear grid place-items-center h-[80%]"
      ref={loginTab}
    >
      <div>
        <div className="flex items-center justify-between">
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
        <div className="my-4">
          <Link className="text-end cursor-pointer hover:text-red-700" to={routes.forgotPW}>
            Forgot Password ?
          </Link>
        </div>
        <button className="bg-button text-base font-semibold py-2 px-5 float-right">
          Login
        </button>
      </div>
    </form>
  );
}
