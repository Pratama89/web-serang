import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";

export default function About() {
  return (
    <div className="pt-20" id="about">
      <section className="relative text-center my-12 mx-5">
        <div className="rounded-lg p-4">
          <SectionHeaders
            subHeader="Tentang Kami"
            mainHeader="CV. Mutiara Elasticindo didirikan pada tahun 2015 di kawasan industri Serang, Banten. Berawal dari visi untuk menyediakan produk tekstil berkualitas tinggi bagi industri pakaian dalam, perusahaan ini terus berkembang dengan mengedepankan teknologi modern dan inovasi."
          />
        </div>

        <div className="relative flex bg-white h-[50vh] container mx-auto">
          {/* Gambar di sebelah kiri dengan efek parallax */}
          <div
            className="w-1/2 bg-cover bg-fixed"
            style={{
              backgroundImage: `url('img/rajut3.jpg')`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundAttachment: "fixed",
            }}
          ></div>

          {/* Konten di sebelah kanan */}
          <div className="w-1/2 flex flex-col justify-center items-start px-8 text-left">
            <h2 className="text-3xl text-primary font-semibold mb-6">
              Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Berdiri Tahun: 2015 <br />
              Bidang Usaha: Perusahaan yang bergerak di bidang manufaktur tekstil
              <br />
              <br />
              Dengan pengalaman hampir satu dekade, kami telah menjadi mitra
              terpercaya bagi banyak pelaku usaha di dalam negeri maupun luar negeri.
            </p>
            <Link href="/about">
              <button className="bg-primary text-white px-6 py-3 rounded-full shadow-md hover:bg-red-700 transition">
                Pelajari lebih lanjut
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
