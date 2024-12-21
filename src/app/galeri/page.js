"use client";

import { useState } from "react";
import Image from "next/image";
import ProductHero from "@/components/ProductHero";

export default function Galeri() {
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const galeriData = {
    "Foto Divisi": [
      { src: "/img/rajut1.JPG", alt: "Divisi 1" },
      { src: "/img/rajut5.JPG", alt: "Divisi 2" },
      { src: "/img/rajut3.JPG", alt: "Divisi 3" },
      { src: "/img/rajut4.JPG", alt: "Divisi 4" },
      { src: "/img/rajut-depan.mp4", alt: "Video Divisi 1" },
      { src: "/img/produksi-corong.mp4", alt: "Video Divisi 2" },
    ],
    "Produk Karet": [
      { src: "/img/karet/Karet (1).jpg", alt: "Produk 1" },
      { src: "/img/karet/Karet (2).jpg", alt: "Produk 2" },
      { src: "/img/karet/Karet (3).jpg", alt: "Produk 3" },
      { src: "/img/karet/Karet (4).jpg", alt: "Produk 4" },
      { src: "/img/karet/Karet (5).jpg", alt: "Produk 5" },
      { src: "/img/karet/Karet (6).jpg", alt: "Produk 6" },
      { src: "/img/karet/Karet (7).jpg", alt: "Produk 7" },
      { src: "/img/karet/Karet (8).jpg", alt: "Produk 8" },
    ],
    "Produk Corong": [
      { src: "/img/corong/Corong (1).jpg", alt: "Corong 1" },
      { src: "/img/corong/Corong (2).jpg", alt: "Corong 2" },
      { src: "/img/corong/Corong (3).jpg", alt: "Corong 3" },
      { src: "/img/corong/Corong (4).jpg", alt: "Corong 4" },
      { src: "/img/corong/Corong (5).jpg", alt: "Corong 5" },
      { src: "/img/corong/Corong (6).jpg", alt: "Corong 6" },
      { src: "/img/corong/Corong (7).jpg", alt: "Corong 7" },
      { src: "/img/corong/Corong (8).jpg", alt: "Corong 8" },
    ],
    "Produk Tali": [
      { src: "/img/tali/Tali (1).jpg", alt: "Tali 1" },
      { src: "/img/tali/Tali (2).jpg", alt: "Tali 2" },
      { src: "/img/tali/Tali (3).jpg", alt: "Tali 3" },
      { src: "/img/tali/Tali (4).jpg", alt: "Tali 4" },
      { src: "/img/tali/Tali (5).jpg", alt: "Tali 5" },
      { src: "/img/tali/Tali (6).jpg", alt: "Tali 6" },
      { src: "/img/tali/Tali (7).jpg", alt: "Tali 7" },
      { src: "/img/tali/Tali (8).jpg", alt: "Tali 8" },
    ],
    "Produk Korset": [
      { src: "/img/korset/Korset (1).jpg", alt: "Korset 1" },
      { src: "/img/korset/Korset (3).jpg", alt: "Korset 3" },
      { src: "/img/korset/Korset (4).jpg", alt: "Korset 4" },
      { src: "/img/korset/Korset (5).jpg", alt: "Korset 5" },
    ],
  };

  const isVideo = (src) => {
    const videoExtensions = ["mp4", "webm", "ogg"];
    const fileExtension = src.split(".").pop().toLowerCase();
    return videoExtensions.includes(fileExtension);
  };

  const openModal = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedMedia(null);
    setIsModalOpen(false);
  };

  return (
    <div className="lg:container mx-auto">
      {/* Hero Section */}
      <ProductHero />
      <div className="lg:container mx-auto px-6 mt-16 md:px-12 lg:px-20 mb-6">
        <h1 className="text-4xl font-bold text-center text-red-500 mb-10 mt-12">
          Galeri
        </h1>

        {/* Render Setiap Kategori Galeri */}
        {Object.entries(galeriData).map(([kategori, items], index) => (
          <section key={index} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-700 mb-6">{kategori}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {items.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => openModal(item)}
                  className="rounded-lg shadow-md overflow-hidden hover:scale-105 transition cursor-pointer">
                  {isVideo(item.src) ? (
                    <video
                      autoPlay
                      loop
                      muted
                      className="w-full h-auto">
                      <source src={item.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={400}
                      height={300}
                      className="w-full h-auto object-cover"
                    />
                  )}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
          onClick={closeModal}>
          <div
            className="relative bg-white p-4 rounded-md max-w-4xl"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 rounded-full w-8 h-8 flex items-center justify-center">
              &times;
            </button>
            {isVideo(selectedMedia.src) ? (
              <video
                autoPlay
                controls
                loop
                muted
                className="w-full max-h-[80vh]">
                <source src={selectedMedia.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            ) : (
              <Image
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
