import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";
import { Carousel } from "flowbite-react";

export default function Hero() {
  return (
    <section
      className="relative bg-white flex items-center justify-center h-screen w-full overflow-hidden"
      id="home">
      {/* Background Image */}
      <Image
        src="/laminating-hero.jpg"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl font-bold leading-snug">
          <span className="text-primary">CV. Mutiara</span> Elasticondo
        </h1>
        <p className="mt-4 text-lg">
        Berdiri di garis depan industri tekstil, kami berkomitmen untuk memberikan produk yang tahan lama, inovatif, dan dapat diandalkan untuk setiap kebutuhan Anda
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Tombol Layanan */}
          <Link href="https://wa.link/h7ywr2" target="_blank">
          <button className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
          Jelajahi Produk Kami
          </button>
          </Link>
          {/* Tombol Kontak */}
          <Link href="https://wa.link/h7ywr2" target="_blank">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
            Hubungi Kami untuk Penawaran
            </button>
          </Link>
        </div>
      </div>     
    </section>
  );
}
