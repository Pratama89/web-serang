// app/produk/korset/page.js
import Image from "next/image";
import Link from "next/link";

export default function Corong() {
  const images = [
    { src: "/img/corong/corong1.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong2.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong3.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong4.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong5.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong6.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong7.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong8.jpeg", alt: "Corong Model 1" },
  ];

  const otherProducts = [
    { name: "Karet", link: "/products/karet" },
    { name: "Tali", link: "/products/tali" },
    { name: "Corong", link: "/products/corong" },
    { name: "Korset", link: "/products/korset" },
  ];

  return (
    <div className="container mx-auto p-6 my-16 flex flex-wrap lg:flex-nowrap gap-6">
      {/* Sidebar: Pilihan Produk */}
      <aside className="w-full lg:w-1/4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">Produk Lainnya</h2>
        <ul className="space-y-2">
          {otherProducts.map((product, index) => (
            <li key={index} className="text-lg">
              <Link href={product.link} className="text-red-500 hover:underline">
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content: Gambar Korset */}
      <main className="w-full lg:w-3/4">
        <h1 className="text-4xl font-semibold text-center mb-6">Corong</h1>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
          ))}
        </div>

        {/* Description Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            Koleksi lengkap korset berkualitas tinggi kami hadir untuk memberikan kenyamanan 
            dan desain terbaik. Tersedia dalam berbagai model dan ukuran.
          </p>
        </div>
      </main>
    </div>
  );
}
