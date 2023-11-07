// REACT ICONS
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { HiUser, HiPhone } from "react-icons/hi";

// REACT AND REACT ROUTER DOM
import { Children, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

// CUSTOM IMPORTS
import {
  REGISTERUSER,
  LOGINUSER,
  FORGOTPASSWORD,
  RESETPASSWORD,
} from "../Services/index";
import { useUser } from "../Context/User.Context";
import RouteConstant from "../Constants/Routes.Constant.json";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// AUTHENTICATION FORM
export default function AuthenticationForm({
  tab,
  form,
  className,
  type,
  isLinkShow,
  navigateRoute,
  navigateTag,
}) {
  // STATE
  const [formData, setFormData] = useState({});

  // CONTEXT
  const { setUser } = useUser();

  // USE NAVIGATE AND USE PARAMS
  const navigate = useNavigate();
  const { token } = useParams();

  // CUSTOM FUNCTIONS
  const handleInput = (e) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (type === "Register") {
      const { data } = await REGISTERUSER(formData);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, ToastConstant.success);
        setFormData({});
      }
    } else if (type === "Login") {
      const { data } = await LOGINUSER(formData);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, ToastConstant.success);
        setUser(data.DATA);
        navigate(RouteConstant.home);
      }
    } else if (type === "Forgot") {
      const { data } = await FORGOTPASSWORD(formData);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, ToastConstant.success);
        navigate(RouteConstant.Authentication);
      }
    } else {
      const { data } = await RESETPASSWORD(formData, token);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, ToastConstant.success);
        navigate(RouteConstant.Authentication);
      }
    }
  };

  // JSX ELEMENT
  return (
    <form
      className={`transition-all duration-200 ease-linear grid place-items-center h-[80%] ${className}`}
      ref={tab}
      onSubmit={(e) => handleSubmit(e)}
    >
      <ul>
        {Children.toArray(
          form?.map(({ icon, type, className, placeholder, name }) => (
            <li className="flex items-center justify-between mb-2">
              {icon === "HiUser" ? (
                <HiUser size={25} />
              ) : icon === "HiPhone" ? (
                <HiPhone size={25} />
              ) : icon === "MdEmail" ? (
                <MdEmail size={25} />
              ) : icon === "IoMdLock" ? (
                <IoMdLock size={25} />
              ) : (
                ""
              )}
              <input
                type={type}
                className={className}
                placeholder={placeholder}
                required={true}
                name={name}
                value={formData[name] || ""}
                onChange={(e) => handleInput(e)}
              />
            </li>
          ))
        )}
        {isLinkShow && (
          <div className="text-end my-5">
            <Link
              className="hover:text-red-600 transition-all duration-200 ease-linear"
              to={navigateRoute}
            >
              {navigateTag}
            </Link>
          </div>
        )}
        <button
          type="submit"
          className="bg-button text-base font-semibold py-2 px-5 float-right"
        >
          {type}
        </button>
      </ul>
    </form>
  );
}
