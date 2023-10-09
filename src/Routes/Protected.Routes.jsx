import { useUser } from "../Context/User.Context";
import { useNavigate, Outlet } from "react-router-dom";
import { useEffect } from "react";

export default function Protected() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (user) {
      return;
    }

    navigate("/");
  }, [user]);

  return <Outlet />;
}
