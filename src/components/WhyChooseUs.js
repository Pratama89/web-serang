"use client"; // Menandakan ini adalah komponen client-side

import { FaCheckCircle, FaTags, FaGlobe, FaHandshake, FaTrademark } from 'react-icons/fa';

export default function WhyChooseUs() {
  const features = [
    {
      title: "PROFESIONALISME",
      description: "Setiap pekerjaan kami dilakukan sesuai rencana dan jadwal, dengan perhatian khusus pada detail agar produk yang dihasilkan memenuhi standar kualitas yang tinggi.",
      icon: <FaCheckCircle className="text-4xl text-blue-500" />,
    },
    {
      title: "PRODUK BERKUALITAS",
      description: "Kami memprioritaskan kualitas dalam pembuatan Tali BH, Karet BH, dan Corong BH, dengan menggunakan material terbaik untuk memastikan kenyamanan dan ketahanan produk.",
      icon: <FaTags className="text-4xl text-green-500" />,
    },
    {
      title: "HARGA BERSAING",
      description: "Kami bangga dapat menyediakan produk dengan kualitas luar biasa dan harga yang kompetitif, memberikan solusi terbaik untuk kebutuhan bisnis Anda.",
      icon: <FaTags className="text-4xl text-yellow-500" />,
    },
    {
      title: "FOKUS PASAR GLOBAL",
      description: "Kami dapat memenuhi permintaan Tali BH, Karet BH, dan Corong BH untuk pasar lokal maupun internasional, dengan kemampuan untuk mendukung merek-merek lokal seperti Winalin dan Pokabee.",
      icon: <FaGlobe className="text-4xl text-red-500" />,
    },
    {
      title: "LAYANAN",
      description: "Layanan yang ramah, responsif, dan profesional menjadi prioritas kami dalam setiap interaksi dengan klien, untuk memastikan pengalaman yang memuaskan.",
      icon: <FaHandshake className="text-4xl text-purple-500" />,
    },
    {
      title: "MEREK TERKENAL",
      description: "Kami telah menjadi pemasok untuk merek-merek terkenal di seluruh dunia, menawarkan produk yang mendukung kenyamanan dan kualitas pakaian dalam.",
      icon: <FaTrademark className="text-4xl text-orange-500" />,
    },
  ];

  return (
    <section className="py-16 lg:px-16  bg-gray-100" id="why-choose-us">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-red-600">MENGAPA MEMILIH KAMI?</h2>
      </div>

      <div className="grid grid-cols-1 px-16 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="mb-4">
              {feature.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800">{feature.title}</h3>
            <p className="text-sm text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
