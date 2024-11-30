"use client";

import { useEffect } from "react";
import Image from "next/image";

export default function Modal({ isOpen, onClose, image }) {
  // Tutup modal saat tombol ESC ditekan
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Jika modal tidak terbuka, jangan render apapun
  if (!isOpen || !image) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 transition-opacity"
      onClick={onClose}
    >
      <div
        className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl w-full"
        onClick={(e) => e.stopPropagation()} // Mencegah modal menutup saat area dalam diklik
      >
        <button
          className="absolute top-4 right-4 text-white bg-red-500 rounded-full p-3 hover:bg-red-600"
          onClick={onClose}
          aria-label="Tutup modal"
        >
          ✕
        </button>
        <Image
          src={image.src}
          alt={image.alt}
          width={800}
          height={600}
          className="w-full h-auto object-contain"
        />
        <p className="text-center mt-4 text-lg text-gray-700">{image.alt}</p>
      </div>
    </div>
  );
}
