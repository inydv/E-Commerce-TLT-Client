import { useUser } from "../Context/User.Context";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Admin() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user?.role === "ADMIN") {
      return;
    }

    navigate("/");
  }, [user]);

  return <Outlet />;
}
