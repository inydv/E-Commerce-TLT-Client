// REACT AND REACT ROUTER DOM
import { useEffect } from "react";
import { Link } from "react-router-dom";

// CUSTOM IMPORT
import RouteConstant from "../Constants/Routes.Constant.json";

// NOT FOUND
export default function NotFound() {
  // USE EFFECT
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // JSX ELEMENT
  return (
    <>
      <div className="flex justify-center bg-white">
        <img src="/src/Assets/notFound.gif" alt="Not Found GIF" />
      </div>
      <div className="grid justify-center p-5">
        <h1 className="text-center text-xl sm:text-2xl font-semibold">
          Look Like You are lost
        </h1>
        <h3 className="text-center text-base sm:text-xl font-semibold pt-2 pb-4">
          The Page You are Looking For Not Available!
        </h3>
        <div className="flex justify-center">
          <Link to={RouteConstant.home} className="primary-button w-fit">
            Go To Home
          </Link>
        </div>
      </div>
    </>
  );
}
