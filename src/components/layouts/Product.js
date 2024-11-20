import Image from "next/image";
import Product from "./Product";
import Header from '@/components/layouts/Header';

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Kami Memproduksi Karet, Tali dan Corong",
      description:
        "Proses laminasi berkualitas tinggi untuk kebutuhan kain dan busa.",
      image: "/img/rajut1.jpg", // Sesuaikan dengan jalur gambar Anda
    },
    {
      id: 2,
      name: "Pemotongan Corong",
      description:
        "Pemotongan corong dengan presisi untuk kebutuhan perlengkapan industri.",
      image: "/img/rajut2.jpg",
    },
    {
      id: 3,
      name: "Mesin Laminasi Modern",
      description:
        "Didukung mesin terbaru untuk hasil yang lebih presisi dan cepat.",
      image: "/img/rajut3.jpg",
    },
    {
      id: 4,
      name: "Packing Rapi",
      description:
        "Pengemasan yang rapi untuk memastikan produk sampai dalam kondisi terbaik.",
      image: "/img/rajut4.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16" id="products">
      <div><Header /></div>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-semibold text-gray-800">Produk Kami</h2>
          <p className="mt-4 text-lg text-gray-600">
            Kami menyediakan berbagai layanan laminasi dengan standar kualitas
            terbaik untuk mendukung kebutuhan industri Anda.
          </p>
        </div>

        {/* Grid Produk */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-lg rounded-lg overflow-hidden">
              {/* Gambar Produk */}
              <Image
                src={product.image}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-56 object-cover"
              />
              {/* Deskripsi Produk */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {product.name}
                </h3>
                <p className="mt-4 text-gray-600">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
