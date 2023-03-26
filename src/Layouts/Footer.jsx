import React from "react";
import { BsFacebook, BsLinkedin } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="bg-black min-h-[280px] p-5">
      <h1 className="font-semibold text-2xl mb-5 sm:mb-10 sm:text-3xl">
        THE <span className="text-red-600">LITTLE</span> THINGS
      </h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3">
        <p className="md:max-w-[400px] mb-5 sm:mb-10 sm:col-span-full md:col-auto">
          Who said good and cool cloths have to expensive? We bring newer,
          cooler and more youth oriented designs everyday. Yes! Everyday you get
          a new design to explore and buy.
        </p>
        <div className="md:justify-self-center mb-5 sm:mb-10">
          <h2 className="text-lg font-semibold mb-2">USEFULL LINKS</h2>
          <ul className="grid grid-cols-2 gap-x-8">
            <li>Home</li>
            <li>Men</li>
            <li>Women</li>
            <li>Shop</li>
            <li>Cart</li>
            <li>My Account</li>
            <li>About</li>
            <li>Contact</li>
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
  );
}
