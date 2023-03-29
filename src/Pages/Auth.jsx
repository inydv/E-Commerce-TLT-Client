import { useRef, useEffect } from "react";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { HiUser, HiPhone } from "react-icons/hi";

export default function Auth() {
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switchTab = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 70);
  }, []);

  const switchTabs = (tab) => {
    if (tab === "login") {
      switchTab.current.classList.add("translate-x-0");
      switchTab.current.classList.remove("translate-x-full");

      registerTab.current.classList.remove("translate-x-0");
      registerTab.current.classList.remove("-translate-y-full");
      loginTab.current.classList.remove("-translate-x-full");
    }
    if (tab === "register") {
      switchTab.current.classList.add("translate-x-full");
      switchTab.current.classList.remove("translate-x-0");

      registerTab.current.classList.add("translate-x-0");
      registerTab.current.classList.add("-translate-y-full");
      loginTab.current.classList.add("-translate-x-full");
    }
  };

  return (
    <div className="bg-[url('src/Assets/auth.jpeg')] h-screen bg-no-repeat bg-cover bg-center grid place-items-center">
      <div className="bg-black p-2 overflow-hidden box-border w-[350px] h-[400px]">
        <div className="pt-3">
          <div className="flex">
            <p
              className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
              onClick={() => switchTabs("login")}
            >
              LOGIN
            </p>
            <p
              className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
              onClick={() => switchTabs("register")}
            >
              REGISTER
            </p>
          </div>
          <button
            className="bg-button h-[3px] w-[50%] border-none transition-all duration-200 ease-linear"
            ref={switchTab}
          ></button>
        </div>
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
            <button className="bg-button text-base font-semibold py-2 px-4 float-right">
              Login
            </button>
          </div>
        </form>
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
      </div>
    </div>
  );
}
