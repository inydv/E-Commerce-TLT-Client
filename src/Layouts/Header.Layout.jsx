// REACT ICONS
import { MdAccountCircle, MdDashboard } from "react-icons/md";
import { IoIosCart, IoMdExit } from "react-icons/io";
import { BsFillPersonFill, BsFillBagCheckFill } from "react-icons/bs";
import { HiMenuAlt2 } from "react-icons/hi";

// MUI
import Badge from "@mui/material/Badge";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDial from "@mui/material/SpeedDial";
import Backdrop from "@mui/material/Backdrop";

// TOASTER
import toast from "react-hot-toast";
import ToastConstant from "../Constants/Toast.Constant.json";

// REACT AND REACT ROUTER DOM
import { Link, useNavigate } from "react-router-dom";
import { Children, useEffect, useState } from "react";

// CUSTOM IMPORTS
import RouteConstant from "../Constants/Routes.Constant.json";
import { useUser } from "../Context/User.Context";
import { LOGOUTUSER } from "../Services/index";
import { SideDrawer } from "../Shared/index";

// NAVIGATION CONSTANT
const NavigationConstant = [
  {
    to: RouteConstant.home,
    name: "Home",
  },
  {
    to: RouteConstant.shop + "?category=men",
    name: "Men",
  },
  {
    to: RouteConstant.shop + "?category-women",
    name: "Women",
  },
];

// NAVIGATION LIST
const NavigationList = () => (
  <ul className="justify-self-center inline-flex flex-col sm:flex-row gap-5 text-lg">
    {Children.toArray(
      NavigationConstant?.map(({ to, name }) => (
        <li className="border-b-2 border-b-customGray p-2 pb-5 sm:p-0 sm:border-none">
          <Link to={to}>{name}</Link>
        </li>
      ))
    )}
  </ul>
);

// HEADER
export default function Header() {
  // STATES
  const [cartLength, setCartLength] = useState(0);
  const [open, setOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // USE NAVIGATE
  const navigate = useNavigate();

  // CONTEXT
  const { user } = useUser();

  // CUSTOM FUNCTION
  const handleSpeedDial = () => {
    setOpen(!open);
  };

  const logoutUser = async () => {
    const { data } = await LOGOUTUSER();

    if (data && data.SUCCESS) {
      toast.success(data?.MESSAGE, ToastConstant.success);
      navigate(RouteConstant.Authentication);
    }
  };

  // DROPDOWN OPTIONS
  const option = [
    {
      icon: <IoMdExit size={20} />,
      name: user ? "Logout" : "Login",
      func: user
        ? () => logoutUser()
        : () => navigate(RouteConstant.Authentication),
    },
  ];

  if (user) {
    option.unshift({
      icon: <BsFillBagCheckFill size={20} />,
      name: "My Orders",
      func: () => {
        navigate(RouteConstant.myOrders);
        setIsDrawerOpen(false);
      },
    });
    option.unshift({
      icon: <BsFillPersonFill size={20} />,
      name: "Profile",
      func: () => {
        navigate(RouteConstant.myAccount);
        setIsDrawerOpen(false);
      },
    });

    if (user.role === "Admin") {
      option.unshift({
        icon: <MdDashboard size={20} />,
        name: "Dashboard",
        func: () => {
          navigate(RouteConstant.dashboard);
          setIsDrawerOpen(false);
        },
      });
    }
  }

  // USE EFFECT
  useEffect(() => {
    const getCartLength = () => {
      const cart = JSON.parse(localStorage.getItem("cart"));
      setCartLength(cart?.length);
    };

    window.addEventListener("storage", () => {
      getCartLength();
    });

    getCartLength();

    return () => window.removeEventListener("storage", getCartLength());
  }, []);

  // JSX ELEMENT
  return (
    <div className="h-header bg-black px-5 sm:px-10">
      <div className="flex justify-between h-full items-center">
        <HiMenuAlt2
          color="white"
          size={25}
          className="block sm:hidden"
          onClick={() => setIsDrawerOpen(true)}
        />
        <h1 className="font-semibold text-4xl w-fit line-through text-center">
          T<span className="text-red-700">L</span>T
        </h1>
        <div className="hidden sm:block">
          <NavigationList />
        </div>
        <div className="flex justify-end gap-2 sm:gap-5 relative top-[120px]">
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
          <Badge badgeContent={cartLength} color="error">
            <Link to={RouteConstant.cart}>
              <IoIosCart color="white" size={25} />
            </Link>
          </Badge>
        </div>
      </div>
      <Backdrop open={open} />
      <SideDrawer
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        content={<NavigationList />}
      />
    </div>
  );
}
