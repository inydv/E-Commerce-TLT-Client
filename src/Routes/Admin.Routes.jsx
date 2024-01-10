// REACT AND REACT ROUTER DOM
import { useEffect } from "react";
import { useNavigate, Outlet, useLocation } from "react-router-dom";

// CUSTOM IMPORTS
import { useUser } from "../Context/User.Context";
import { Sidebar } from "../Layouts/index";
import EnumConstant from "../Constants/Enum.Constant.json";

// WHEN USER IS ADMIN
export default function Admin() {
  // CONTEXT
  const { user } = useUser();

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE LOCATION
  const { pathname } = useLocation();

  // USE EFFECT
  useEffect(() => {
    if (user?.role === EnumConstant.UserRole.Admin) {
      return;
    } else if (user?.role === EnumConstant.UserRole.Seller) {
      if (pathname.includes(EnumConstant.Patname.Product)) {
        return;
      }
    }

    navigate("/");
  }, [navigate, pathname, user]);

  // RJSX ELEMENT
  return (
    <section className="page-padding">
      <Sidebar />
      <Outlet />
    </section>
  );
}
