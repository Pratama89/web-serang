import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";
import {
  FaLayerGroup,
  FaYarn,
  FaPalette,
  FaBox,
} from "react-icons/fa"; // Ikon divisi

export default function HomeMenu() {
  const services = [
    {
      title: "Covering Benang",
      icon: FaLayerGroup,
      image: "/img/covering-benang.png",
      link: "/divisi",
      type: "image",
    },
    {
      title: "Gulung Benang",
      icon: FaYarn,
      image: "/img/rajut2.JPG",
      link: "/divisi",
      type: "image",
    },
    {
      title: "Rajut Benang",
      icon: FaBox,
      image: "/img/rajut-depan2.mp4",
      link: "/divisi",
      type: "video",
    },
    {
      title: "Pewarnaan dan Penyelesaian",
      icon: FaPalette,
      image: "/img/pewarnaan.mp4",
      link: "/divisi",
      type: "video",
    },
  ];

  return (
    <section className="mt-20 pt-24" id="product">
      {/* Header */}
      <div className="text-center">
        <SectionHeaders
          subHeader="DIVISI"
          mainHeader="Kami mengerjakan pembuatan Karet Elastis, Tali Elastis, Corong BH dan Korset."
        />
      </div>

      {/* Grid Gambar dan Video */}
      <div className="grid grid-cols-1 md:grid-cols-4 mt-8">
        {services.map((service, index) => (
          <Link
            href={service.link}
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center"
          >
            {/* Media (Gambar atau Video) */}
            <div className="relative w-full h-56 shadow-lg overflow-hidden">
              {service.type === "video" ? (
                <video
                  src={service.image}
                  className="w-full h-full object-cover image-enlarge"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              ) : (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover image-enlarge"
                />
              )}

              {/* Overlay Ikon dan Teks */}
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center overlay-hover">
                <service.icon className="text-white text-4xl mb-2" />
                <h1 className="text-white font-semibold text-lg">{service.title}</h1>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Tombol Lihat Semua Devisi */}
      <div className="text-center mt-8">
        <Link href="/divisi">
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition mb-16">
            Lihat Semua Divisi
          </button>
        </Link>
      </div>
    </section>
  );
}
