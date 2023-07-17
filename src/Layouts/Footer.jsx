import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { routes } from "../Core/Routes";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black min-h-[280px] p-5">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="font-semibold text-2xl mb-5 sm:mb-10 sm:text-4xl">
          THE <span className="text-red-600">LITTLE</span> THINGS
        </h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3">
          <p className="md:max-w-[400px] mb-5 sm:mb-10 sm:col-span-full md:col-auto">
            Who said good and cool cloths have to expensive? We bring newer,
            cooler and more youth oriented designs everyday. Yes! Everyday you
            get a new design to explore and buy.
          </p>
          <div className="md:justify-self-center mb-5 sm:mb-10">
            <h2 className="text-lg font-semibold mb-2">USEFUL LINKS</h2>
            <ul className="grid grid-cols-2 gap-x-8">
              <li>
                <Link to={routes.home}>Home</Link>
              </li>
              <li>
                <Link to={routes.shop + "?category=men"}>Men</Link>
              </li>
              <li>
                <Link to={routes.shop + "?category=women"}>Women</Link>
              </li>
              <li>
                <Link to={routes.shop}>Shop</Link>
              </li>
              <li>
                <Link to={routes.cart}>Cart</Link>
              </li>
              <li>
                <Link to={routes.myAccount}>My Account</Link>
              </li>
              <li>
                <Link to={routes.about}>About</Link>
              </li>
              <li>
                <Link to={routes.contact}>Contact</Link>
              </li>
            </ul>
          </div>
          <div className="md:justify-self-end">
            <h2 className="text-lg font-semibold mb-2">ADDRESS</h2>
            <p className="block mb-2">826 Kapashera New Delhi, 110037</p>
            <a className="block" href="mailto:im.nydv@gmail.com">
              Email: im.nydv@gmail.com
            </a>
            <a className="block mb-4" href="tel:7303405787">
              Tel: 7303405787
            </a>
            <div className="inline-flex">
              <a
                href="https://www.facebook.com/Nitin9900"
                target="_blank"
                rel="noreferrer"
              >
                <BsFacebook size={20} />
              </a>
              <a
                href="https://instagram.com/i_nydv?igshid=YmMyMTA2M2Y="
                target="_blank"
                rel="noreferrer"
                className="mx-4"
              >
                <FaInstagramSquare size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/lokesh-yadav-31318a225/"
                target="_blank"
                rel="noreferrer"
              >
                <BsLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
