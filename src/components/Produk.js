import Image from "next/image";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai"; // Import ikon tutup

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Karet Elastis",
      media: "/img/produk (2).JPG",
      type: "image",
      link: "/products/karet",
    },
    {
      id: 2,
      name: "Tali Elastis",
      media: "/img/produk (3).JPG",
      type: "image",
      link: "/products/tali",
    },
    {
      id: 3,
      name: "Pita/Corong Elastis",
      media: "/img/produk (1).JPG",
      type: "image",
      link: "/products/corong",
    },
    {
      id: 4,
      name: "Korset",
      media: "/img/korset (7).jpg",
      type: "image",
      link: "/products/korset",
    },
    {
      id: 5,
      name: "Tali Custom",
      media: "/img/korset (8).jpg",
      type: "image",
      link: "/products/korset",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (media) => {
    setSelectedImage(media);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section className="lg:container max-w-full mx-auto">
      {/* Produk Kami Section */}
      <section id="products" className="py-12 px-2 bg-white max-w-full mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-semibold text-red-500">Produk Kami</h2>
          <p className="mt-2 text-lg text-gray-600">
            Kami Memproduksi Karet, Tali dan Corong untuk kebutuhan konfeksi Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            // Card Produk
            <div className="group" key={product.id}>
              <div
                className="relative overflow-hidden transition-shadow shadow-lg rounded-lg group-hover:translate-y-[-8px] group-hover:shadow-2xl cursor-pointer"
                onClick={() => openModal(product.media)}
              >
                {/* Media: Gambar */}
                <Image
                  src={product.media}
                  alt={product.name}
                  layout="responsive"
                  width={300}
                  height={300}
                  objectFit="cover"
                  className="w-full h-full transition-all duration-300 ease-in-out"
                />
                {/* Nama Produk */}
                <div className="absolute bottom-6 left-6">
                  <h3 className="text-xl font-semibold text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
                    {product.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Pop-up */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70">
          <div className="relative">
            {/* Gambar di Modal */}
            <Image
              src={selectedImage}
              alt="Selected"
              width={800}
              height={800}
              objectFit="contain"
              className="rounded-lg"
            />
            {/* Tombol Tutup dengan Ikon */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-600 rounded-full p-2 transition-transform transform hover:scale-110"
            >
              <AiOutlineClose size={24} /> {/* Ukuran ikon 24px */}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
