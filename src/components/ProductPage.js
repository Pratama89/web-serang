"use client";

import { useState } from "react";
import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import Modal from "@/components/Modal"; // Import Modal

export default function ProductPage({
  title,
  images,
  description,
  otherProducts,
}) {
  // State untuk Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);

  // Fungsi untuk membuka modal
  const openModal = (image) => {
    setCurrentImage(image);
    setModalOpen(true);
  };

  // Fungsi untuk menutup modal
  const closeModal = () => {
    setModalOpen(false);
    setCurrentImage(null);
  };

  return (
    <div className="container mx-auto p-6 my-16 flex flex-wrap lg:flex-nowrap gap-6">
      {/* Sidebar */}
      <Sidebar products={otherProducts} />

      {/* Main Content */}
      <main className="w-full lg:w-3/4">
        <h1 className="text-4xl font-semibold text-center mb-6">{title}</h1>

        {/* Grid Layout for Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              onClick={() => openModal(image)} // Klik untuk membuka modal
            />
          ))}
        </div>

        {/* Modal */}
        {isModalOpen && (
          <Modal
            isOpen={isModalOpen}
            onClose={closeModal}
            image={currentImage}
          />
        )}

        {/* Description Section */}
        <div className="mt-8 text-center">
          <p className="text-lg text-gray-700">{description}</p>
        </div>
      </main>
    </div>
  );
}

// Component for Image Card
const ImageCard = ({ image, onClick }) => (
  <div
    className="rounded-lg shadow-lg overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <Image
      src={image.src}
      alt={image.alt}
      width={400}
      height={300}
      className="w-full h-auto object-cover"
    />
  </div>
);
