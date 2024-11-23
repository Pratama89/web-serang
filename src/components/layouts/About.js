import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-20" id="about">
      <section className="relative text-center my-10 mx-5">
        <div className="rounded-lg p-4">
          <SectionHeaders subHeader="TENTANG KAMI" mainHeader="" />
        </div>

        <div className="relative flex flex-col lg:flex-row bg-white container mx-auto rounded-lg shadow-md overflow-hidden">
          {/* Gambar di sebelah kiri */}
          <div
            className="w-full lg:w-1/2 h-64 lg:h-auto"
            style={{
              backgroundImage: `url('img/rajut3.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          ></div>

          {/* Konten di sebelah kanan */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-start px-6 py-8 text-left">
            <h2 className="text-2xl lg:text-3xl text-primary font-semibold mb-4">
              Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
            </h2>
            <p className="text-gray-600 text-base lg:text-lg leading-relaxed mb-6">
              Berdiri Tahun: 2015 <br />
              Bidang Usaha: Perusahaan yang bergerak di bidang manufaktur tekstil
              <br />
              CV. Mutiara Elasticindo didirikan pada tahun 2015 di kawasan industri
              Serang, Banten. Berawal dari visi untuk menyediakan produk tekstil
              berkualitas tinggi bagi industri pakaian dalam, perusahaan ini terus
              berkembang dengan mengedepankan teknologi modern dan inovasi.
              <br />
              Dengan pengalaman hampir satu dekade, kami telah menjadi mitra
              terpercaya bagi banyak pelaku usaha di dalam negeri maupun luar negeri.
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
  );
}
