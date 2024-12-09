import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import ProductHero from "@/components/ProductHero";

export default function Kontak() {
  return (
    <section id="kontak" className="bg-white ">
      {/* Hero Section */}
      <ProductHero />
      <div className="lg:container mx-auto px-6  mt-16 md:px-12 lg:px-20">
        {/* Header */}
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#FF5733" }} // Warna sesuai logo
        >
          Hubungi Kami
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          CV. Mutiara Elasticindo adalah Produsen Karet BRA, Tali BRA, Corong BRA,
          dan Korset. Untuk pertanyaan atau konsultasi bisnis, silakan hubungi
          kami melalui informasi kontak di bawah ini.
        </p>

        {/* Kontak Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <FaWhatsapp className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">
              Klik tombol di bawah untuk menghubungi kami via WhatsApp
            </p>
            <a
              href="https://wa.me/6289673791935"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition">
              Hubungi via WhatsApp
            </a>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <FaEnvelope className="text-blue-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-600 mb-4">
              Kirim pertanyaan Anda ke alamat email resmi kami:
            </p>
            <a
              href="mailto:admin@mutiara-elasticindo.co.id"
              className="text-blue-500 font-semibold underline">
              admin@mutiara-elasticindo.co.id
            </a>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <FaMapMarkerAlt className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alamat</h3>
            <p className="text-gray-600">
              Jl. Keserangan - Pengampelan No. 88, Kp. Nambo RT 06 / 03, Ds.
              Keserangan, Kec. Ciruas - Kab. Serang, Banten, Indonesia
            </p>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-6">
            Lokasi Kami
          </h3>
          <div className="w-full h-96 rounded-lg overflow-hidden shadow-md mb-24">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18870.1540435797!2d106.24859046752003!3d-6.135912600325453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e41f5155a2ee657%3A0x2862c37fbe141189!2sMutiara%20elastis%20new!5e0!3m2!1sen!2sus!4v1732334957662!5m2!1sen!2sus" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
