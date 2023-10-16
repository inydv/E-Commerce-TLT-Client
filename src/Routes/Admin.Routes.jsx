import { useUser } from "../Context/User.Context";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { Sidebar } from "../Layouts/index";

export default function Admin() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user?.role === "Admin") {
      return;
    }

    navigate("/");
  }, [user]);

  return (
    <>
      <Sidebar />
      <Outlet />
    </>
  );
}
