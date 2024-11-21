import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Kami Memproduksi Karet, Tali dan Corong",
      description:
        "Proses laminasi berkualitas tinggi untuk kebutuhan kain dan busa.",
      image: "/img/rajut1.JPG", // Sesuaikan dengan jalur gambar Anda
    },
    {
      id: 2,
      name: "Pemotongan Corong",
      description:
        "Pemotongan corong dengan presisi untuk kebutuhan perlengkapan industri.",
      image: "/img/rajut2.JPG",
    },
    {
      id: 3,
      name: "Mesin Laminasi Modern",
      description:
        "Didukung mesin terbaru untuk hasil yang lebih presisi dan cepat.",
      image: "/img/rajut3.JPG",
    },
    {
      id: 4,
      name: "Packing Rapi",
      description:
        "Pengemasan yang rapi untuk memastikan produk sampai dalam kondisi terbaik.",
      image: "/img/rajut4.JPG",
    },
  ];

  return (
    <section id="products" className="py-12">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">Produk Kami</h2>
        <p className="mt-2 text-lg text-gray-600">
          Kami menyediakan layanan berkualitas untuk kebutuhan industri Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={400}
              height={300}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-4 text-gray-600">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
