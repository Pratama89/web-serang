"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState(false);

  // change color sat di scroll
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeColor);
  }

  return (
    <nav
      className={
        color
          ? "header-bg dark:bg-gray-900 fixed top-0 left-0 right-0 z-10 transition duration-300 ease-in-out"
          : "bg-transparent  dark:bg-gray-900 fixed top-0 left-0 right-0 z-10 transition duration-300 ease-in-out"
      }>
      <div className="w-full flex flex-wrap items-center justify-between mx-auto px-4 lg:max-w-7xl md:items-center md:flex md:px-8 ">
        <div className="  flex items-center justify-between py-3  md:py-5 sm:w-full xs:w-full mb:block md:w-1/2">
          {/* Logo */}
          <Link href={"/"}>
            <Image
              src="/logolaminating.png"
              alt="Laminating Logo"
              width={300}
              height={300}
              priority
              className="w-64 h-full "
            />
          </Link>
          {/* Hamburger Menu */}
          <div className="md:hidden ">
            <button
              onClick={() => setNavbar(!navbar)}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
              {navbar ? (
                <Image src={"/close.svg"} alt="close" width={30} height={30} />
              ) : (
                <Image
                  src={"/hamburger-menu.svg"}
                  alt="menu"
                  width={30}
                  height={30}
                />
              )}
            </button>
          </div>
        </div>
        {/* Menu Items */}
        <div
          className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0  md:w-1/2 ${
            navbar ? "block p-12 md:p-0" : "hidden"
          }`}
          id="navbar-default">
          <ul className="h-70 md:h-auto items-center justify-center md:flex lg:justify-end  ">
          <li className="pb-6 text-xl text-white py-2 px-4 text-center border-b-2 md:border-b-0 bg-[rgba(0,0,0,0.4)] hover:text-red-600 hover:font-semibold  rounded-lg md:bg-[rgba(0,0,0,0.4)] md:py-2 md:px-4 dark:text-white">
            <Link href="#home" onClick={() => setNavbar(!navbar)} aria-current="page">
              Home
            </Link>
          </li>
            <li className="pb-6 text-xl text-white py-2 px-4 text-center border-b-2 md:border-b-0 bg-[rgba(0,0,0,0.4)] hover:text-red-600 hover:font-semibold   rounded-lg md:bg-[rgba(0,0,0,0.4)] md:py-2 md:px-4 dark:text-white">
              <Link href="#about" onClick={() => setNavbar(!navbar)}>
                About
              </Link>
            </li>
            <li className=" pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0 bg-primary hover:text-red-600 hover:font-semibold rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-red-500">
              <Link href="#product" onClick={() => setNavbar(!navbar)}>
                Product
              </Link>
            </li>
            <li className=" pb-6 text-xl text-white py-2 px-6 text-center border-b-2 md:border-b-0 bg-primary hover:text-red-600 hover:font-semibold rounded md:bg-transparent md:text-primary md:p-0 dark:text-white md:dark:text-red-500">
              <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
