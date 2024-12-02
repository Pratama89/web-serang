import Image from "next/image";
import ProductHero from "@/components/ProductHero";

export default function Galeri() {
  const fotoProduk = [
    { src: "/img/corong/corong1.jpeg", alt: "Produk 1" },
    { src: "/img/karet/karet2.jpeg", alt: "Produk 2" },
    { src: "/img/tali/tali7.jpeg", alt: "Produk 3" },
    { src: "/img/corong/corong4.jpeg", alt: "Produk 4" },
  ];

  const fotoDivisi = [
    { src: "/img/rajut1.JPG", alt: "Divisi 1" },
    { src: "/img/rajut2.JPG", alt: "Divisi 2" },
    { src: "/img/rajut3.JPG", alt: "Divisi 3" },
    { src: "/img/rajut4.JPG", alt: "Divisi 4" },
  ];

  const fotoProsesProduksi = [
    { src: "/img/produksi1.JPG", alt: "Proses Produksi 1" },
    { src: "/img/produksi2.JPG", alt: "Proses Produksi 2" },
    { src: "/img/produksi3.JPG", alt: "Proses Produksi 3" },
    { src: "/img/produksi4.JPG", alt: "Proses Produksi 4" },
  ];

  return (
    <div className="lg:container mx-auto ">
      {/* Hero Section */}
      <ProductHero />
      <h1 className="text-4xl font-bold text-center text-red-500 mb-10 mt-12">Galeri</h1>

      {/* Foto Produk */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Foto Produk</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fotoProduk.map((foto, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
              <Image
                src={foto.src}
                alt={foto.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Foto Divisi */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Foto Divisi</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fotoDivisi.map((foto, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
              <Image
                src={foto.src}
                alt={foto.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Foto Proses Produksi */}
      <section>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Foto Proses Produksi
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {fotoProsesProduksi.map((foto, index) => (
            <div
              key={index}
              className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition">
              <Image
                src={foto.src}
                alt={foto.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
