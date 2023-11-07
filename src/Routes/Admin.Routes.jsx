// REACT AND REACT ROUTER DOM
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// CUSTOM IMPORTS
import { useUser } from "../Context/User.Context";
import { Sidebar } from "../Layouts/index";

// WHEN USER IS ADMIN
export default function Admin() {
  // CONTEXT
  const { user } = useUser();

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {
    if (user?.role === "Admin") {
      return;
    }

    navigate("/");
  }, [navigate, user]);

  // RJSX ELEMENT
  return (
    <div className="p-5 sm:px-10">
      <Sidebar />
      <Outlet />
    </div>
  );
}
