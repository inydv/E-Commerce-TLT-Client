import { useEffect } from "react";
import { useUser } from "../Context/User.Context";
import { useNavigate, Outlet } from "react-router-dom";

export default function Authentication() {
  const navigate = useNavigate();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      return;
    }

    navigate("/");
  }, [user]);

  return <Outlet />;
}
