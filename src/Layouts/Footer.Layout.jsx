// REACT ICONS
import { FaFacebookSquare } from "@react-icons/all-files/fa/FaFacebookSquare";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaInstagramSquare } from "@react-icons/all-files/fa/FaInstagramSquare";

// CUSTOM IMPORTS
import RoutesConstant from "../Constants/Routes.Constant.json";

// REACT AND REACT ROUTER DOM
import { Link } from "react-router-dom";
import { Children } from "react";

// NAVIGATION LIST
const NavigationConstant = [
  {
    to: RoutesConstant.home,
    name: "Home",
  },
  {
    to: RoutesConstant.shop + "?category=men",
    name: "Men",
  },
  {
    to: RoutesConstant.shop + "?category-women",
    name: "Women",
  },
  {
    to: RoutesConstant.shop,
    name: "Shop",
  },
  {
    to: RoutesConstant.cart,
    name: "Cart",
  },
  {
    to: RoutesConstant.myAccount,
    name: "My Account",
  },
  {
    to: RoutesConstant.about,
    name: "About",
  },
  {
    to: RoutesConstant.contact,
    name: "Contact",
  },
];

// SOCIAL CONSTANT
const SocialConstant = [
  {
    to: "https://www.facebook.com/Nitin9900",
    icon: <FaFacebookSquare size={25} />,
  },
  {
    to: "https://instagram.com/i_nydv?igshid=YmMyMTA2M2Y=",
    icon: <FaInstagramSquare size={25} />,
  },
  {
    to: "https://www.linkedin.com/in/lokesh-yadav-31318a225/",
    icon: <FaLinkedin size={25} />,
  },
];

// FOOTER
export default function Footer() {
  // JSX ELEMENT
  return (
    <div className="bg-black min-h-footer p-5 sm:p-10">
      <h1 className="font-semibold text-2xl mb-5 sm:mb-10 sm:text-4xl">
        THE <span className="text-red-600">LITTLE</span> THINGS
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <p className="md:max-w-[400px] sm:col-span-full md:col-auto text-base sm:text-lg">
          Who said good and cool cloths have to expensive? We bring newer,
          cooler and more youth oriented designs everyday. Yes! Everyday you get
          a new design to explore and buy.
        </p>
        <div className="md:justify-self-center">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">
            USEFUL LINKS
          </h2>
          <ul className="grid grid-cols-2 gap-x-8">
            {Children.toArray(
              NavigationConstant?.map(({ to, name }) => (
                <li>
                  <Link className="text-base sm:text-lg" to={to}>
                    {name}
                  </Link>
                </li>
              ))
            )}
          </ul>
        </div>
        <div className="md:justify-self-end">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">ADDRESS</h2>
          <p className="block mb-4 text-base sm:text-lg">
            826 Kapashera New Delhi, 110037
          </p>
          <a
            className="block text-base sm:text-lg"
            href="mailto:im.nydv@gmail.com"
          >
            Email: im.nydv@gmail.com
          </a>
          <a className="block text-base sm:text-lg mb-5" href="tel:7303405787">
            Tel: 7303405787
          </a>
          <div className="inline-flex gap-5">
            {Children.toArray(
              SocialConstant?.map(({ icon, to }) => (
                <a href={to} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
