import Image from "next/image";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";

export default function HomeMenu() {
  const services = [
    {
      title: "Covering Benang",
      description:
        "Covering Benang adalah proses pemindahan benang dari gulungan besar ke gulungan yang lebih kecil dengan tujuan mempermudah proses selanjutnya atau penggunaan yang lebih praktis.",
      image: "/img/covering-benang.png",
      link: "https://wa.link/h7ywr2",
      type: "image", // Tambahkan tipe konten
    },
    {
      title: "Gulung Benang",
      description:
        "Divisi Gulung Benang adalah proses menggulung benang dari gulungan kecil ke beam (gulungan besar) untuk persiapan produksi lebih lanjut, seperti dalam proses tenun atau rajut.",
      image: "/img/rajut2.JPG",
      link: "https://wa.link/h7ywr2",
      type: "image",
    },
    {
      title: "Rajut Benang",
      description:
        "Rajut Benang adalah proses pengolahan benang menjadi material elastis seperti Karet Bra, Tali Bra, atau komponen lain untuk Bra. Proses ini memastikan hasil rajutan yang kuat, fleksibel, dan sesuai dengan standar kualitas tinggi untuk mendukung kenyamanan serta fungsi produk.",
      image: "/img/rajut-depan2.mp4", // Ganti dengan path video
      link: "https://wa.link/h7ywr2",
      type: "video", // Set tipe sebagai video
    },
    {
      title: "Pewarnaan dan Penyelesaian",
      description:
        "Pewarnaan dan Penyelesaian adalah proses memberikan warna pada material, seperti karet atau tali Bra, serta tahap akhir untuk meningkatkan kualitas produk. Proses ini memastikan warna yang tahan lama, merata, dan sesuai standar, sekaligus menyempurnakan hasil akhir agar produk siap digunakan atau dipasarkan.",
      image: "/img/pewarnaan.mp4",
      link: "https://wa.link/h7ywr2",
      type: "video",
    },
  ];

  return (
    <section className="mt-20 pt-24" id="product">
      <div className="text-center">
        <SectionHeaders
          subHeader="DIVISI"
          mainHeader="Kami mengerjakan pembuatan Karet elastis, Tali Elastis, Corong BH dan Korset."
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8 w-full px-20 xs:grid-cols-1 xs:p-5 xs:gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 border shadow-lg rounded-lg flex flex-col lg:flex-row text-center items-center hover:bg-white transition-transform duration-200 hover:scale-105"
          >
            {/* Gambar atau Video */}
            <div className="w-full lg:w-1/3">
              {service.type === "video" ? (
                <video
                  src={service.image}
                  className="h-56 w-full rounded-t-lg lg:rounded-lg object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                ></video>
              ) : (
                <Image
                  src={service.image}
                  alt={service.title}
                  width={200}
                  height={200}
                  className="h-56 w-full rounded-t-lg lg:rounded-lg object-cover"
                />
              )}
            </div>
            {/* Konten */}
            <div className="w-full lg:w-2/3 p-4">
              <h1 className="font-semibold text-xl lg:text-2xl mb-2">
                {service.title}
              </h1>
              <p className="text-sm lg:text-base text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
      {/* Tombol Lihat Semua Devisi */}
      <div className="text-center mt-8">
        <Link href="/devisi">
          <button className="bg-red-500 text-white py-3 px-6 rounded-lg font-semibold shadow-lg hover:bg-red-600 transition mb-16">
            Lihat Semua Devisi
          </button>
        </Link>
      </div>
    </section>
  );
}
