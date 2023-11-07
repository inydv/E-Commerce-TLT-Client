// REACT
import { useEffect } from "react";

// DASHBOARD
export default function Dashboard() {
  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return <div>Dashboard.Page</div>;
}
