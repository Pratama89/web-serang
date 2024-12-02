"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation"; // Import usePathname

export default function Header() {
  const [navbar, setNavbar] = useState(false);
  const [color, setColor] = useState(false);
  const pathname = usePathname(); // Mendapatkan path saat ini

  // Fungsi untuk mengubah warna navbar saat di scroll
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true); // Set background menjadi putih dan teks gelap setelah scroll
    } else {
      setColor(false); // Tetap transparan di atas halaman
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", changeColor);
      return () => window.removeEventListener("scroll", changeColor);
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        color ? "bg-white text-gray-800 shadow-md" : "bg-transparent text-white"
      }`}>
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center ">
        {/* Logo dengan Teks */}
        <Link href={"/"} className="flex items-center space-x-2 ">
          <Image
            src="/Icon Mutiara serang.png"
            alt="Logo"
            width={40}
            height={40}
            priority
            className="cursor-pointer py-2"
          />
          <span
            className={`text-xl font-semibold ${
              color ? "text-gray-800" : "text-white"
            }`}>
            CV. MUTIARA ELASTICONDO
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-4 items-center justify-center font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Produk" },
            { href: "/about", label: "Tentang" },
            { href: "/divisi", label: "Divisi" },
            { href: "/kontak", label: "Kontak" },
            { href: "/galeri", label: "Galeri" },
          ].map((menu) => (
            <li
              key={menu.href}
              className={`group transition-all duration-300 ease-in-out ${
                pathname === menu.href
                  ? "bg-[#ff4b4b] text-white"
                  : "hover:bg-[#ff4b4b] hover:text-white"
              }`}>
              <Link
                href={menu.href}
                className={`block py-2 px-6 ${
                  color && pathname !== menu.href ? "text-gray-800" : "text-white"
                }`}>
                {menu.label}
              </Link>
            </li>
          ))}
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
          } fixed top-0 left-0 w-full h-full bg-white p-8 space-y-6 text-center font-medium md:hidden`}>
          {[
            { href: "/", label: "Home" },
            { href: "/products", label: "Produk" },
            { href: "/about", label: "Tentang" },
            { href: "/divisi", label: "Divisi" },
            { href: "/kontak", label: "Kontak" },
            { href: "/galeri", label: "Galeri" },
          ].map((menu) => (
            <li
              key={menu.href}
              className={`transition hover:underline ${
                pathname === menu.href ? "text-[#ff4b4b]" : "hover:text-[#800000]"
              }`}>
              <Link href={menu.href} onClick={() => setNavbar(false)}>
                {menu.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
