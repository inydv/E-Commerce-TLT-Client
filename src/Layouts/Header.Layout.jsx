// REACT ICONS
import { MdAccountCircle } from "@react-icons/all-files/md/MdAccountCircle";
import { MdDashboard } from "@react-icons/all-files/md/MdDashboard";
import { IoIosCart } from "@react-icons/all-files/io/IoIosCart";
import { IoMdExit } from "@react-icons/all-files/io/IoMdExit";
import { IoBag } from "@react-icons/all-files/io5/IoBag";
import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
import { HiMenuAlt2 } from "@react-icons/all-files/hi/HiMenuAlt2";

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
import { Children, useCallback, useEffect, useMemo, useState } from "react";

// CUSTOM IMPORTS
import RouteConstant from "../Constants/Routes.Constant.json";
import EnumConstant from "../Constants/Enum.Constant.json";
import { useUser } from "../Context/User.Context";
import { LOGOUTUSER } from "../Services/index";
import { SideDrawer } from "../Shared/index";

// CONSTANT
const NAVIGATION_CONSTANT = [
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

// CUSTOM COMPONENT
const NavigationList = () => (
  <ul className="justify-self-center inline-flex flex-col sm:flex-row gap-5 text-lg">
    {Children.toArray(
      NAVIGATION_CONSTANT?.map(({ to, name }) => (
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
  const { user, setUser } = useUser();

  // CUSTOM FUNCTION
  const handleSpeedDial = () => {
    setOpen(!open);
  };

  const logoutUser = useCallback(async () => {
    const { data } = await LOGOUTUSER();

    if (data && data.SUCCESS) {
      setUser(null);
      toast.success(data?.MESSAGE, ToastConstant.success);
      navigate(RouteConstant.Authentication);
    }
  }, [navigate, setUser]);

  // DROPDOWN OPTIONS
  const option = useMemo(
    () => [
      {
        icon: <IoMdExit size={20} />,
        name: user ? "Logout" : "Login",
        func: user
          ? () => logoutUser()
          : () => navigate(RouteConstant.Authentication),
      },
    ],
    [logoutUser, navigate, user]
  );

  useEffect(() => {
    if (user) {
      option.unshift({
        icon: <IoBag size={20} />,
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

      if (
        user.role === EnumConstant.UserRole.Admin ||
        user.role === EnumConstant.UserRole.Seller
      ) {
        option.unshift({
          icon: <MdDashboard size={20} />,
          name: "Dashboard",
          func: () => {
            if (user.role === EnumConstant.UserRole.Admin) {
              navigate(RouteConstant.dashboard);
            } else {
              navigate(RouteConstant.adminProduct);
            }
            setIsDrawerOpen(false);
          },
        });
      }
    }
  }, [navigate, option, user]);

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
    <header className="bg-black page-padding sticky top-0 left-0 z-40">
      <div className="flex justify-between h-full items-center">
        <HiMenuAlt2
          color="white"
          size={25}
          className="block sm:hidden"
          onClick={() => setIsDrawerOpen(true)}
        />
        <h1 className="font-semibold text-4xl w-fit line-through text-center">
          T<span className="text-red-600">L</span>T
        </h1>
        <div className="hidden sm:block">
          <NavigationList />
        </div>
        <div className="flex justify-end gap-2 sm:gap-5 relative top-0 items-center">
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
            <Link to={RouteConstant.cart} aria-label="cart">
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
    </header>
  );
}
