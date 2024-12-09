"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProductHero() {
  const pathname = usePathname(); // Mendapatkan pathname saat ini
  const [animate, setAnimate] = useState(false); // Kontrol animasi

  let pageTitle = "";
  let backgroundImage = "";

  // Menentukan nama halaman dan gambar berdasarkan pathname
  switch (pathname) {
    case "/products":
      pageTitle = "PRODUKSI";
      backgroundImage = "/img/rajut4.JPG";
      break;
    case "/about":
      pageTitle = "TENTANG";
      backgroundImage = "/factory4.JPG";
      break;
    case "/divisi":
      pageTitle = "DIVISI";
      backgroundImage = "/img/rajut2.JPG";
      break;
    case "/kontak":
      pageTitle = "KONTAK";
      backgroundImage = "/img/rajut5.JPG";
      break;
    case "/galeri":
      pageTitle = "GALERI";
      backgroundImage = "/img/rajut4.JPG";
      break;
    case "/products/tali":
      pageTitle = "TALI BRA";
      backgroundImage = "/img/tali1.png";
      break;
    case "/products/karet":
      pageTitle = "KARET BRA";
      backgroundImage = "/img/karet1.png";
      break;
    case "/products/corong":
      pageTitle = "CORONG BRA";
      backgroundImage = "/img/corong1.png";
      break;
    case "/products/korset":
      pageTitle = "KORSET";
      backgroundImage = "/img/rajut4.JPG";
      break;
    default:
      pageTitle = "Halaman Tidak Dikenal";
      backgroundImage = "/img/default-bg.JPG";
      break;
  }

  // Menjalankan animasi setiap kali pathname berubah
  useEffect(() => {
    setAnimate(true);
    const timer = setTimeout(() => setAnimate(false), 3000); // Animasi berlangsung 3 detik
    return () => clearTimeout(timer); // Bersihkan timeout
  }, [pathname]);

  return (
    <section className="relative bg-white h-[100vh] overflow-hidden">
      {/* Background Image dengan kontrol animasi */}
      <div className="absolute inset-0 z-0 bg-black">
        <Image
          src={backgroundImage}
          alt="Product Hero Background"
          fill
          className={`fixed object-cover ${animate ? "animate-fade-in" : ""}`}
          priority
        />
      </div>

      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black bg-opacity-20 z-10"></div>

      {/* Konten */}
      <div className="absolute bottom-8 left-8 z-20 px-4 sm:px-6 lg:px-8">
        <h1 className="text-2xl md:text-4xl font-bold bg-red-600 text-white px-6 py-4 relative text-shadow-lg">
          {pageTitle}
          {/* Border dalam kotak */}
          <div className="absolute inset-0 border-2 border-dashed m-2 border-white"></div>
        </h1>
      </div>
    </section>
  );
}
