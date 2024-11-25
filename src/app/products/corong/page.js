"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Corong() {
  const images = [
    { src: "/img/corong/corong1.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong2.jpeg", alt: "Corong Model 2" },
    { src: "/img/corong/corong3.jpeg", alt: "Corong Model 3" },
    { src: "/img/corong/corong4.jpeg", alt: "Corong Model 4" },
    { src: "/img/corong/corong5.jpeg", alt: "Corong Model 5" },
    { src: "/img/corong/corong6.jpeg", alt: "Corong Model 6" },
    { src: "/img/corong/corong7.jpeg", alt: "Corong Model 7" },
    { src: "/img/corong/corong8.jpeg", alt: "Corong Model 8" },
  ];

  const otherProducts = [
    { name: "Karet", link: "/products/karet" },
    { name: "Tali", link: "/products/tali" },
    { name: "Corong", link: "/products/corong" },
    { name: "Korset", link: "/products/korset" },
  ];

  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

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
            <div
              key={index}
              className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => openModal(image)} // Klik untuk membuka modal
            >
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

        {/* Modal */}
        {isModalOpen && currentImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={closeModal} // Klik di luar gambar untuk menutup modal
          >
            <div
              className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()} // Mencegah modal menutup saat gambar diklik
            >
              <button
                className="absolute top-2 right-2 text-white bg-red-500 rounded-full p-2"
                onClick={closeModal}
              >
                ✕
              </button>
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain"
              />
              <p className="text-center mt-4 text-lg text-gray-700">
                {currentImage.alt}
              </p>
            </div>
          </div>
        )}

        {/* Description Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">
            Koleksi lengkap corong berkualitas tinggi kami hadir untuk memberikan kenyamanan
            dan desain terbaik. Tersedia dalam berbagai model dan ukuran.
          </p>
        </div>
      </main>
    </div>
  );
}
