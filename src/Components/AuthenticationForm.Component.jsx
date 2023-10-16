import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { HiUser, HiPhone } from "react-icons/hi";
import { Children, useState } from "react";
import {
  REGISTERUSER,
  LOGINUSER,
  FORGOTPASSWORD,
  RESETPASSWORD,
} from "../Services/index";
import toast from "react-hot-toast";
import toastConfig from "../Constants/Toast.Constant.json";
import { useUser } from "../Context/User.Context";
import { Link, useNavigate, useParams } from "react-router-dom";
import RouteConfig from "../Constants/Routes.Constant.json";

export default function AuthenticationForm({
  tab,
  form,
  className,
  type,
  isLinkShow,
  navigateRoute,
  navigateTag,
}) {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({});
  const { setUser } = useUser();

  const { token } = useParams();

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
        toast.success(data?.MESSAGE, toastConfig.success);
        setFormData({});
      }
    } else if (type === "Login") {
      const { data } = await LOGINUSER(formData);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, toastConfig.success);
        setUser(data.DATA);
        navigate(RouteConfig.home);
      }
    } else if (type === "Forgot") {
      const { data } = await FORGOTPASSWORD(formData);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, toastConfig.success);
        navigate(RouteConfig.Authentication);
      }
    } else {
      const { data } = await RESETPASSWORD(formData, token);
      if (data && data.SUCCESS) {
        toast.success(data?.MESSAGE, toastConfig.success);
        navigate(RouteConfig.Authentication);
      }
    }
  };

  return (
    <form
      className={`transition-all duration-200 ease-linear grid place-items-center h-[80%] ${className}`}
      ref={tab}
      onSubmit={(e) => handleSubmit(e)}
    >
      <ul>
        {Children.toArray(
          form?.map(
            ({
              icon,
              type,
              className,
              placeholder,
              isRequired,
              autoComplete,
              name,
            }) => (
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
                  required={isRequired}
                  autoComplete={autoComplete}
                  name={name}
                  value={formData[name] || ""}
                  onChange={(e) => handleInput(e)}
                />
              </li>
            )
          )
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
