import { useRef, useEffect } from "react";
import { ForgotPasswordForm, LoginForm, RegisterForm, ResetPasswordForm } from "../Components/index";

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
        <LoginForm loginTab={loginTab} />
        <RegisterForm registerTab={registerTab} />
        <ForgotPasswordForm />
        <ResetPasswordForm />
      </div>
    </div>
  );
}
