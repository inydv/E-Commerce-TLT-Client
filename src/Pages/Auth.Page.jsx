// REACT AND REACT ROUTER DOM
import { useRef, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// CUSTOM IMPORTS
import { AuthenticationForm } from "../Components/index";
import RegisterFormConstant from "../Constants/RegisterForm.Constant.json";
import LoginFormConstant from "../Constants/LoginForm.Constant.json";
import ResetPasswordFormConstant from "../Constants/ResetPasswordForm.Constant.json";
import ForgotPasswordFormConstant from "../Constants/ForgotPasswordForm.Constant.json";
import RouteConstant from "../Constants/Routes.Constant.json";
import EnumConstant from "../Constants/Enum.Constant.json";

// AUTH
export default function Auth() {
  // STATES
  const [pathName, setPathName] = useState();

  // USE LOCATION
  const location = useLocation();

  // REFS
  const loginTab = useRef(null);
  const registerTab = useRef(null);
  const switchTab = useRef(null);

  // CUSTOM FUNCTION
  const switchTabs = (tab) => {
    if (tab === EnumConstant.AuthenticationType.Login) {
      switchTab.current.classList.add("translate-x-0");
      switchTab.current.classList.remove("translate-x-full");

      registerTab.current.classList.remove("!translate-x-0");
      loginTab.current.classList.remove("-translate-x-full");
    }
    if (tab === EnumConstant.AuthenticationType.Register) {
      switchTab.current.classList.add("translate-x-full");
      switchTab.current.classList.remove("translate-x-0");

      registerTab.current.classList.add("!translate-x-0");
      loginTab.current.classList.add("-translate-x-full");
    }
  };

  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 70);

    const locationPathName = location.pathname;

    if (locationPathName.includes(RouteConstant.resetPW)) {
      setPathName(RouteConstant.resetPW);
    } else if (locationPathName.includes(RouteConstant.forgotPW)) {
      setPathName(RouteConstant.forgotPW);
    } else {
      setPathName(RouteConstant.Authentication);
    }
  }, [location]);

  // JSX ELEMENT
  return (
    <div className="bg-[url('../src/Assets/auth.jpg')] h-screen bg-no-repeat bg-cover bg-center grid place-items-center">
      <div className="bg-black p-2 overflow-hidden box-border w-[350px] h-[400px]">
        <div className="pt-3">
          <div className="flex">
            <p
              className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
              onClick={() => switchTabs(EnumConstant.AuthenticationType.Login)}
            >
              {pathName === RouteConstant.forgotPW
                ? "FORGOT PASSWORD"
                : pathName === RouteConstant.resetPW
                ? "RESET PASSWORD"
                : "LOGIN"}
            </p>
            {pathName === RouteConstant.Authentication && (
              <p
                className="cursor-pointer hover:text-red-600 transition-all duration-200 ease-linear w-full grid place-items-center text-lg font-medium"
                onClick={() =>
                  switchTabs(EnumConstant.AuthenticationType.Register)
                }
              >
                REGISTER
              </p>
            )}
          </div>
          <button
            className={`bg-customGray h-[3px] ${
              pathName === RouteConstant.Authentication ? "w-[50%]" : "w-full"
            }  border-none transition-all duration-200 ease-linear`}
            ref={switchTab}
          ></button>
        </div>
        {pathName === RouteConstant.resetPW ? (
          <AuthenticationForm form={ResetPasswordFormConstant} type="Reset" />
        ) : pathName === RouteConstant.forgotPW ? (
          <AuthenticationForm
            form={ForgotPasswordFormConstant}
            type={EnumConstant.AuthenticationType.Forgot}
            isLinkShow={true}
            navigateRoute={RouteConstant.Authentication}
            navigateTag="Back To Login?"
          />
        ) : (
          <>
            <AuthenticationForm
              tab={loginTab}
              form={LoginFormConstant}
              type={EnumConstant.AuthenticationType.Login}
              isLinkShow={true}
              navigateRoute={RouteConstant.forgotPW}
              navigateTag="Forgot Password?"
            />
            <AuthenticationForm
              tab={registerTab}
              form={RegisterFormConstant}
              className="-translate-y-full translate-x-full"
              type={EnumConstant.AuthenticationType.Register}
            />
          </>
        )}
      </div>
    </div>
  );
}
