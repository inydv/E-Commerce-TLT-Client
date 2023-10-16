import { MdAccountCircle, MdDashboard } from "react-icons/md";
import { IoIosCart, IoMdExit } from "react-icons/io";
import Badge from "@mui/material/Badge";
import RouteConfig from "../Constants/Routes.Constant.json";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../Context/User.Context";
import { Children, useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import SpeedDial from "@mui/material/SpeedDial";
import toast from "react-hot-toast";
import toastConfig from "../Constants/Toast.Constant.json";
import { LOGOUTUSER } from "../Services/index";
import { BsFillPersonFill, BsFillBagCheckFill } from "react-icons/bs";
import SpeedDialAction from "@mui/material/SpeedDialAction";

export default function Header() {
  const navigate = useNavigate();

  const { user } = useUser();

  const [open, setOpen] = useState(false);

  const handleSpeedDial = () => {
    setOpen(!open);
  };

  const option = [
    {
      icon: <IoMdExit size={20} />,
      name: user ? "Logout" : "Login",
      func: user
        ? () => logoutUser()
        : () => navigate(RouteConfig.Authentication),
    },
  ];

  if (user) {
    option.unshift({
      icon: <BsFillBagCheckFill size={20} />,
      name: "My Orders",
      func: () => navigate(RouteConfig.myOrders),
    });
    option.unshift({
      icon: <BsFillPersonFill size={20} />,
      name: "Profile",
      func: () => navigate(RouteConfig.myAccount),
    });

    if (user.role === "Admin") {
      option.unshift({
        icon: <MdDashboard size={20} />,
        name: "Dashboard",
        func: () => navigate(RouteConfig.dashboard),
      });
    }
  }

  const logoutUser = async () => {
    const { data } = await LOGOUTUSER();

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, toastConfig.success);
      navigate(RouteConfig.Authentication);
    }
  };

  return (
    <div className="h-[70px] bg-black px-5">
      <div className="grid grid-cols-3 h-full items-center">
        <h1 className="font-semibold text-4xl line-through">
          T<span className="text-red-700">L</span>T
        </h1>
        <ul className="justify-self-center inline-flex sm:text-lg">
          <li>
            <Link to={RouteConfig.home}>Home</Link>
          </li>
          <li className="mx-3 sm:mx-8">
            <Link to={RouteConfig.shop + "?category=men"}>Men</Link>
          </li>
          <li>
            <Link to={RouteConfig.shop + "?category-women"}>Women</Link>
          </li>
        </ul>
        <div className="justify-self-end relative">
          <SpeedDial
            ariaLabel="SpeedDial tooltip example"
            FabProps={{ style: { backgroundColor: "black", zIndex: "10" } }}
            icon={<MdAccountCircle color="white" size={25} />}
            onClick={() => handleSpeedDial()}
            direction="down"
            open={open}
          >
            {Children.toArray(
              option.map((item) => (
                <SpeedDialAction
                  FabProps={{
                    style: { backgroundColor: "black", zIndex: "10" },
                  }}
                  icon={item.icon}
                  tooltipTitle={item.name}
                  onClick={item.func}
                />
              ))
            )}
          </SpeedDial>
          <Badge badgeContent={4} color="error">
            <Link to={RouteConfig.cart}>
              <IoIosCart color="white" size={25} />
            </Link>
          </Badge>
        </div>
      </div>
      <Backdrop open={open} />
    </div>
  );
}
