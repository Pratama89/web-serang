import Image from "next/image";
import Link from "next/link";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Kami Memproduksi Karet Elastis untuk BH",
      description:
        "Kami memproduksi karet elastis berkualitas tinggi khusus untuk bra (BH), dirancang untuk memberikan kenyamanan, daya tahan, dan fleksibilitas maksimal. Produk kami menggunakan bahan premium dan teknologi terkini, memastikan elastisitas yang optimal serta mendukung desain bra modern yang stylish dan fungsional.",
      media: "/img/pembuatan-karet.mp4",
      type: "video",
      link: "/products/karet",
    },
    {
      id: 2,
      name: "Kami Memproduksi Tali untuk BH",
      description:
        "Kami memproduksi tali berkualitas tinggi untuk bra (BH), dirancang dengan perhatian khusus pada kenyamanan, kekuatan, dan estetika. Tali-tali kami tersedia dalam berbagai ukuran, warna, dan desain untuk mendukung kebutuhan produksi bra yang stylish dan fungsional, sekaligus memastikan daya tahan dan performa terbaik.",
      media: "/img/pembuatan-tali.mp4",
      type: "video",
      link: "/products/tali",
    },
    {
      id: 3,
      name: "Kami memproduksi Corong untuk BH",
      description:
        "Kami memproduksi corong untuk bra (BH) dengan desain yang presisi dan material berkualitas tinggi. Corong kami dirancang untuk memberikan bentuk dan dukungan optimal, memastikan kenyamanan serta daya tahan yang lebih lama. Produk kami ideal untuk digunakan dalam berbagai model bra, mendukung desain yang ergonomis dan fungsional.",
      media: "/img/produksi-corong.mp4",
      type: "video",
      link: "/products/corong",
    },
    {
      id: 4,
      name: "Kami Memproduksi Korset",
      description:
        "Kami memproduksi korset dengan desain yang elegan dan fungsional, menggunakan bahan berkualitas tinggi untuk memberikan dukungan maksimal dan kenyamanan sepanjang hari. Korset kami dirancang untuk membentuk tubuh dengan sempurna, memberikan tampilan yang lebih ramping dan menawan. Tersedia dalam berbagai ukuran dan model, korset kami cocok untuk berbagai kebutuhan, baik untuk pakaian sehari-hari maupun acara khusus.",
      media: "/img/rajut4.JPG",
      type: "image",
      link: "/products/korset",
    },
    
  ];

  return (
    <section id="products" className="py-12 bg-white">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold text-red-500">Produk Kami</h2>
        <p className="mt-2 text-lg text-gray-600">
          Kami Memproduksi Karet, Tali dan Corong untuk kebutuhan konfeksi Anda.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden transition-all hover:scale-105 hover:shadow-xl">
            {/* Media: Gambar atau Video */}
            <div className="relative w-full h-64">
              {product.type === "video" ? (
                <video
                  src={product.media}
                  className="w-full h-full object-cover rounded-t-lg"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              ) : (
                <Image
                  src={product.media}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="w-full h-full"
                />
              )}
            </div>
            {/* Deskripsi Produk */}
            <div className="p-6">
              <h3 className="text-xl font-semibold">{product.name}</h3>
              <p className="mt-4 text-gray-600">{product.description}</p>
              <div className="mt-4">
                <Link href={product.link}>
                  {/* Tidak perlu elemen <a> */}
                  <button className="inline-block bg-red-500 text-white font-semibold py-2 px-6 rounded-full hover:bg-red-600 transition">
                    Lihat Detail
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
