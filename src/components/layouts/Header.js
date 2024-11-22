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
    <nav className="bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center py-3">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            src="/logomutiaraserang.png"
            alt="Logo"
            width={300}
            height={150}
            priority
            className="cursor-pointer"
          />
        </Link>
        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 items-center justify-center text-gray-700 font-medium">
          <li className="hover:text-blue-600 transition">
            <Link href="/#home">Home</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/products">
              Products
            </Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/about">Tentang</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/devisi">Divisi</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/kontak">Kontak</Link>
          </li>
          <li className="hover:text-blue-600 transition">
            <Link href="/galeri">Galeri</Link>
          </li>
        </ul>
        {/* Hamburger Menu (Mobile) */}
        <button
          onClick={() => setNavbar(!navbar)}
          className="md:hidden p-2 rounded-md bg-gray-200">
          <Image
            src={navbar ? "/close.svg" : "/hamburger-menu.svg"}
            alt="Menu"
            width={30}
            height={30}
          />
        </button>
        {/* Mobile Menu */}
        <ul
          className={`${
            navbar ? "block" : "hidden"
          } fixed top-0 left-0 w-full h-full bg-white p-8 space-y-6 text-center text-gray-700 font-medium md:hidden`}>
          <li>
            <Link href="#home" onClick={() => setNavbar(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setNavbar(false)}>
              Produk
            </Link>
          </li>
          <li>
            <Link href="#product" onClick={() => setNavbar(false)}>
              Tentang
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setNavbar(false)}>
              Devisi
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setNavbar(false)}>
              Kontak
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setNavbar(false)}>
              Galeri
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
