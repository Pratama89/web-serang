import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY saat pengguna menggulir halaman
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className="relative bg-white flex items-center justify-center h-[100vh] w-full overflow-hidden"
      id="home"
    >
      {/* Background Parallax */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat z-0"
        style={{
          backgroundImage: "url('/img/coveringbenang.JPG')", // Pastikan file ini berada di folder public
          backgroundPosition: `center ${scrollY * 0.3}px`, // Pergerakan paralaks dinamis
          backgroundSize: "cover",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug">
          <span className="text-primary">CV. Mutiara</span> Elasticindo
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          Kami menghadirkan solusi tekstil elastis terbaik untuk mendukung berbagai industri.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Tombol Layanan */}
          <Link href="/products" target="_blank">
            <button className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition">
              Jelajahi Produk Kami
            </button>
          </Link>
          {/* Tombol Kontak */}
          <Link href="/kontak" target="_blank">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
              Hubungi Kami untuk Penawaran
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
