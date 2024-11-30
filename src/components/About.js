"use client"; // Tandai komponen ini sebagai Client Component

import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

import { Swiper as SwiperCore, Navigation, Pagination, Autoplay } from "swiper";
SwiperCore.use([Navigation, Pagination, Autoplay]);

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <section id="about" className="bg-white py-16 justify-center">
      <div className="lg:container mx-auto px-6 mt-16 md:px-12 lg:px-20">
        <h2
          className="text-4xl font-bold text-gray-800 mb-8 text-center"
          style={{ color: "#FF5733" }}
        >
          Tentang Kami
        </h2>

        {/* Carousel Gambar */}
        <div className="rounded-lg shadow-lg w-full max-w-4xl mx-auto">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            navigation={true}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 6000, // Interval 3 detik
              disableOnInteraction: false, // Tetap autoplay meskipun ada interaksi
            }}
            modules={[Navigation, Pagination, Autoplay]}
          >
            {/* Slide Gambar 1 */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-white">
              <Image
                src="/factory1.jpeg"
                alt="Pabrik CV. Mutiara Elasticindo"
                width={1200} // Lebar ditingkatkan
                height={600} // Tinggi ditingkatkan
                className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide Gambar 2 */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-white">
              <Image
                src="/factory2.JPG"
                alt="Pabrik CV. Mutiara Elasticindo"
                width={1200} // Lebar ditingkatkan
                height={600} // Tinggi ditingkatkan
                className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide Gambar 3 */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-white">
              <Image
                src="/factory3.jpg"
                alt="Pabrik CV. Mutiara Elasticindo"
                width={1200} // Lebar ditingkatkan
                height={600} // Tinggi ditingkatkan
                className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>

          {/* Slide Gambar 4 */}
          <SwiperSlide>
            <div className="flex justify-center items-center h-[400px] md:h-[500px] lg:h-[600px] bg-white">
              <Image
                src="/factory4.JPG"
                alt="Pabrik CV. Mutiara Elasticindo"
                width={1200} // Lebar ditingkatkan
                height={600} // Tinggi ditingkatkan
                className="rounded-lg shadow-lg object-contain max-w-full max-h-full"
              />
            </div>
          </SwiperSlide>
          </Swiper>
        </div>

        {/* Penjelasan Perusahaan */}
        <div className="space-y-6 text-gray-600 mt-12">
          <h3
            className="text-3xl font-semibold text-gray-700 text-center mb-6"
            style={{ color: "#FF5733" }}
          >
            Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
          </h3>
          <p className="text-lg leading-relaxed">
            <strong>CV. Mutiara Elasticindo</strong> adalah perusahaan yang
            bergerak di bidang manufaktur tekstil, khususnya dalam pembuatan
            komponen penting untuk industri pakaian dalam wanita, seperti:
          </p>
          <ul className="list-disc list-inside ml-5 text-lg">
            <li>
              <strong>Karet BRA (Bra Elastics):</strong> Menghasilkan karet
              elastis berkualitas tinggi untuk mendukung kenyamanan dan
              fleksibilitas produk BRA.
            </li>
            <li>
              <strong>Tali BRA (Bra Straps):</strong> Menyediakan tali BRA
              dengan desain fungsional dan estetis untuk memenuhi kebutuhan
              pelanggan.
            </li>
            <li>
              <strong>Corong BRA (Bra Cups):</strong> Memproduksi corong BRA
              dengan presisi dan daya tahan yang terjamin.
            </li>
            <li>
              <strong>Korset Elastis:</strong> Menghadirkan korset elastis yang
              mendukung kenyamanan dan fungsionalitas.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            <strong>Sejarah Perusahaan:</strong> CV. Mutiara Elasticindo
            didirikan pada tahun <strong>2015</strong> di kawasan industri{" "}
            <strong>Serang, Banten</strong>. Berawal dari visi untuk
            menyediakan produk tekstil berkualitas tinggi bagi industri pakaian
            dalam, perusahaan ini terus berkembang dengan mengedepankan
            teknologi modern dan inovasi. Dengan pengalaman hampir satu dekade,
            kami telah menjadi mitra terpercaya bagi banyak pelaku usaha di
            dalam negeri maupun luar negeri.
          </p>
          <p className="text-lg leading-relaxed">
            <strong>Komitmen Kami:</strong>
          </p>
          <ul className="list-disc list-inside ml-5 text-lg">
            <li>
              <strong>Kualitas Terjamin:</strong> Setiap produk melalui proses
              pengujian ketat untuk memastikan daya tahan dan kenyamanan optimal.
            </li>
            <li>
              <strong>Teknologi Modern:</strong> Didukung oleh mesin-mesin
              berteknologi tinggi untuk menghasilkan produk dengan presisi
              tinggi.
            </li>
            <li>
              <strong>Pelayanan Pelanggan:</strong> Kepuasan pelanggan adalah
              prioritas kami. Kami berkomitmen memberikan layanan terbaik, mulai
              dari produksi hingga pengiriman.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            <strong>Lokasi Kami:</strong>
          </p>
          <address className="text-lg leading-relaxed">
            CV. Mutiara Elasticindo <br />
            Jl. Keserangan - Pengampelan No. 88, <br />
            Kp. Nambo RT 06 / 03, Ds. Keserangan, <br />
            Kec. Ciruas - Kab. Serang, Banten, Indonesia.
          </address>
        </div>
      </div>
    </section>
  );
}
