import { MdDashboard } from "react-icons/md";
import { BsFillPersonFill, BsFillBagCheckFill } from "react-icons/bs";
import { MdContactSupport } from "react-icons/md";
import { FaTshirt } from "react-icons/fa";
import { Children, useState } from "react";
import RouteConfig from "../Constants/Routes.Constant.json";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { useNavigate } from "react-router-dom";
import SpeedDial from "@mui/material/SpeedDial";
import { HiMenuAlt2 } from "react-icons/hi";

export default function Sidebar() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const handleSpeedDial = () => {
    setOpen(!open);
  };

  const SidebarItems = [
    {
      name: "Dashboard",
      icon: <MdDashboard size={25} />,
      func: () => navigate(RouteConfig.dashboard),
    },
    {
      name: "User",
      icon: <BsFillPersonFill size={25} />,
      func: () => navigate(RouteConfig.adminUser),
    },
    {
      name: "Product",
      icon: <FaTshirt size={25} />,
      func: () => navigate(RouteConfig.myOadminProductrders),
    },
    {
      name: "Order",
      icon: <BsFillBagCheckFill size={25} />,
      func: () => navigate(RouteConfig.adminOrder),
    },
    {
      name: "Contact",
      icon: <MdContactSupport size={25} />,
      func: () => navigate(RouteConfig.adminContact),
    },
  ];

  return (
    <div className="fixed top-16 right-10">
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        FabProps={{ style: { backgroundColor: "black", zIndex: "10" } }}
        icon={<HiMenuAlt2 color="white" size={25} />}
        onClick={() => handleSpeedDial()}
        direction="left"
        open={open}
      >
        {Children.toArray(
          SidebarItems.map((item) => (
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
    </div>
  );
}
