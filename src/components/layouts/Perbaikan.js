"use client";

import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";
import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";

export default function Perbaikan() {
  return (
    <ParallaxProvider>
      <div className="pt-20" id="about">
        <section className="relative text-center my-10 mx-5">
          <div className="rounded-lg p-4">
            <SectionHeaders subHeader="PERBAIKAN" mainHeader="" />
          </div>

          <div className="flex flex-col lg:flex-row">
            {/* Teks di Sebelah Kanan */}
            <div className="w-full lg:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
                Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
              </h2>           
             
            </div>
          </div>
        </section>
      </div>
    </ParallaxProvider>
  );
}
