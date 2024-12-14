"use client";

import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default function About() {
  return (
    <ParallaxProvider>
      <div className="pt-20" id="about">
        <section className=" text-center my-5 mx-4">
          <div className="rounded-lg p-4">
            <SectionHeaders subHeader="TENTANG KAMI" mainHeader="" />
          </div>

          <div className="flex flex-col lg:flex-row w-full  bg-white   mx-auto rounded-lg shadow-md overflow-hidden">
            {/* Parallax Gambar di Sebelah Kiri */}
            <Parallax
              y={[-20, 20]} // Efek paralaks vertikal
              className="relative w-full lg:w-1/2 h-[300px] lg:h-[500px] overflow-hidden"
            >
              <div className="relative h-full">
                <Image
                  src="/factory4.JPG"
                  alt="Gambar"
                  fill
                  sizes="(max-width: 768px) 100vw, (min-width: 1024px) 50vw"
                  className="object-cover"
                />
              </div>
            </Parallax>


            {/* Teks di Sebelah Kanan */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
                Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
              </h2>
              <p className="text-gray-600 text-base text-left lg:text-lg leading-relaxed mb-6">
                Berdiri Tahun: 2015 <br />
                Bidang Usaha: Perusahaan yang bergerak di bidang manufaktur
                tekstil di kawasan industri Serang, Banten.
                <br />
                <br />
                Berawal dari visi untuk menyediakan produk tekstil berkualitas
                bagi industri pakaian dalam bra dan underware. Perusahaan kami
                terus berkembang dengan mengedepankan teknologi modern, inovasi
                dan inovatif.
                <br />
                <br />
                Kami telah menjadi mitra terpercaya bagi banyak pelaku usaha di
                beberapa daerah Indonesia.
              </p>
              <Link href="/about">
                <button className="bg-primary text-white px-4 py-3 rounded-full shadow-md hover:bg-red-700 transition">
                  Pelajari lebih lanjut
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
