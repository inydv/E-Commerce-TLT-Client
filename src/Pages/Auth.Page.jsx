import { useRef, useEffect, useState } from "react";
import { AuthenticationForm } from "../Components/index";
import RegisterFormConstant from "../Constants/RegisterForm.Constant.json";
import LoginFormConstant from "../Constants/LoginForm.Constant.json";
import ResetPasswordFormConstant from "../Constants/ResetPasswordForm.Constant.json";
import ForgotPasswordFormConstant from "../Constants/ForgotPasswordForm.Constant.json";
import RouteConfig from "../Constants/Routes.Constant.json";
import { useLocation } from "react-router-dom";

export default function Auth() {
  const location = useLocation();

  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switchTab = useRef(null);

  const [pathName, setPathName] = useState();

  useEffect(() => {
    window.scrollTo(0, 70);

    const locationPathName = location.pathname;

    if (locationPathName.includes(RouteConfig.resetPW)) {
      setPathName(RouteConfig.resetPW);
    } else if (locationPathName.includes(RouteConfig.forgotPW)) {
      setPathName(RouteConfig.forgotPW);
    } else {
      setPathName(RouteConfig.Authentication);
    }
  }, [location]);

  const switchTabs = (tab) => {
    if (tab === "login") {
      switchTab.current.classList.add("translate-x-0");
      switchTab.current.classList.remove("translate-x-full");

      registerTab.current.classList.remove("!translate-x-0");
      loginTab.current.classList.remove("-translate-x-full");
    }
    if (tab === "register") {
      switchTab.current.classList.add("translate-x-full");
      switchTab.current.classList.remove("translate-x-0");

      registerTab.current.classList.add("!translate-x-0");
      loginTab.current.classList.add("-translate-x-full");
    }
  };

  return (
    <div className="bg-[url('../src/Assets/auth.jpg')] h-screen bg-no-repeat bg-cover bg-center grid place-items-center">
      <div className="bg-black p-2 overflow-hidden box-border w-[350px] h-[400px]">
        <div className="pt-3">
          <div className="flex">
            <p
              className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
              onClick={() => switchTabs("login")}
            >
              {pathName === RouteConfig.forgotPW
                ? "FORGOT PASSWORD"
                : pathName === RouteConfig.resetPW
                ? "RESET PASSWORD"
                : "LOGIN"}
            </p>
            {pathName === RouteConfig.Authentication && (
              <p
                className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
                onClick={() => switchTabs("register")}
              >
                REGISTER
              </p>
            )}
          </div>
          <button
            className={`bg-button h-[3px] ${
              pathName === RouteConfig.Authentication ? "w-[50%]" : "w-full"
            }  border-none transition-all duration-200 ease-linear`}
            ref={switchTab}
          ></button>
        </div>
        {pathName === RouteConfig.resetPW ? (
          <AuthenticationForm form={ResetPasswordFormConstant} type="Reset" />
        ) : pathName === RouteConfig.forgotPW ? (
          <AuthenticationForm
            form={ForgotPasswordFormConstant}
            type="Forgot"
            isLinkShow={true}
            navigateRoute={RouteConfig.Authentication}
            navigateTag="Back To Login?"
          />
        ) : (
          <>
            <AuthenticationForm
              tab={loginTab}
              form={LoginFormConstant}
              type="Login"
              isLinkShow={true}
              navigateRoute={RouteConfig.forgotPW}
              navigateTag="Forgot Password?"
            />
            <AuthenticationForm
              tab={registerTab}
              form={RegisterFormConstant}
              className="-translate-y-full translate-x-full"
              type="Register"
            />
          </>
        )}
      </div>
    </div>
  );
}
