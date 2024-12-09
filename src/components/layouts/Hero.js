import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative bg-white flex items-center justify-center h-[100vh] w-full overflow-hidden"
      id="home"
    >
      {/* Background Image */}
      <Image
        src="/img/coveringbenang.JPG" // Pastikan file berada di folder public
        alt="Hero Background"
        layout="fill"  // Menggunakan layout fill untuk gambar mengisi seluruh area
        objectFit="cover"  // Menjaga agar gambar mengisi area dengan proporsi yang benar
        priority
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-10 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl opacity-0 animate-fade-in">
        <h1 className="text-2xl md:text-5xl font-bold leading-snug animate-slide-in">
          <span className="text-primary">CV. Mutiara</span> Elasticindo
        </h1>
        <p className="mt-4 text-sm md:text-lg">
          Kami menghadirkan solusi tekstil elastis terbaik untuk mendukung berbagai industri. Dengan teknologi modern dan standar kualitas tinggi, kami siap memenuhi kebutuhan Anda.
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
