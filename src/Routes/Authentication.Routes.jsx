// REACT AND REACT ROUTER DOM
import { useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

// CUSTOM IMPORT
import { useUser } from "../Context/User.Context";

// WHEN USER IS NOT LOGGEDIN
export default function Authentication() {
  // CONTEXT
  const { user } = useUser();

  // USE NAVIGATE
  const navigate = useNavigate();

  // USE EFFECT
  useEffect(() => {
    if (!user) {
      return;
    }

    navigate("/");
  }, [navigate, user]);

  // JSX ELEMENT
  return <Outlet />;
}
