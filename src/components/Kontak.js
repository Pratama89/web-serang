import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function Kontak() {
  return (
    <section id="kontak" className="bg-white  py-32 mt-16 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#FF5733" }} // Warna sesuai logo
        >
          Hubungi Kami
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          CV. Mutiara Elasticindo adalah Produsen Karet BH, Tali BH, Corong BH, dan Korset. 
          Untuk pertanyaan atau konsultasi bisnis, silakan hubungi kami melalui informasi kontak di bawah ini.
        </p>

        {/* Kontak Details */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* WhatsApp */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <FaWhatsapp className="text-green-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600 mb-4">Klik tombol di bawah untuk menghubungi kami via WhatsApp</p>
            <a
              href="https://wa.me/6281368939180"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-green-600 transition"
            >
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
              className="text-blue-500 font-semibold underline"
            >
              admin@mutiara-elasticindo.co.id
            </a>
          </div>

          {/* Alamat */}
          <div className="flex flex-col items-center text-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/3">
            <FaMapMarkerAlt className="text-red-500 text-5xl mb-4" />
            <h3 className="text-xl font-semibold mb-2">Alamat</h3>
            <p className="text-gray-600">
              Jl. Keserangan - Pengampelan No. 88, Kp. Nambo RT 06 / 03, Ds. Keserangan,
              Kec. Ciruas - Kab. Serang, Banten, Indonesia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
