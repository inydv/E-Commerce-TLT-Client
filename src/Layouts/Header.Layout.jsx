import { MdAccountCircle } from "react-icons/md";
import { IoIosCart } from "react-icons/io";
import Badge from "@mui/material/Badge";
import { routes } from "../Constants/Routes.Constant";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="h-[70px] bg-black px-5">
      <div className="max-w-[1400px] grid grid-cols-3 h-full items-center mx-auto">
        <h1 className="font-semibold text-4xl line-through">
          T<span className="text-red-700">L</span>T
        </h1>
        <ul className="justify-self-center inline-flex sm:text-lg">
          <li>
            <Link to={routes.home}>Home</Link>
          </li>
          <li className="mx-3 sm:mx-8">
            <Link to={routes.shop + "?category=men"}>Men</Link>
          </li>
          <li>
            <Link to={routes.shop + "?category-women"}>Women</Link>
          </li>
        </ul>
        <div className="justify-self-end inline-flex">
          <MdAccountCircle color="white" size={25} className="mr-3" />
          <Badge badgeContent={4} color="error">
            <IoIosCart color="white" size={25} />
          </Badge>
        </div>
      </div>
    </div>
  );
}
