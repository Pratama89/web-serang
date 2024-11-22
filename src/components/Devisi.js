import Image from "next/image";

export default function Devisi() {
  const devisiList = [
    {
      title: "Gulung Covering",
      description:
        "Proses penggulungan benang yang telah melalui tahap covering. Hasil gulungan dijamin presisi dan sesuai dengan standar kualitas tertinggi.",
      image: "/img/rajut1.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Covering",
      description:
        "Lapisan pelindung pada benang untuk meningkatkan kekuatan dan elastisitas menggunakan mesin modern.",
      image: "/img/rajut2.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Gulung Benang",
      description:
        "Menggulung benang secara rapi untuk memastikan kualitas produksi berikutnya tetap konsisten.",
      image: "/img/rajut3.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Rajut",
      description:
        "Produksi kain rajut dengan tekstur berkualitas tinggi, sesuai kebutuhan industri tekstil modern.",
      image: "/img/rajut4.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Devisi Sortir Grey",
      description:
        "Menyortir kain grey berdasarkan standar kualitas sebelum proses lanjutan.",
      image: "/img/rajut5.jpg", // Ganti dengan path gambar yang sesuai
    },
    {
      title: "Pengolahan Air Limbah",
      description:
        "Dengan menggunakan proses Biologis yang menggunakan bakteri, kita dapat mengolah air limbah kita sehingga dapat digunakan kembali untuk produksi atau dibuang dengan cara yang bertanggung jawab.",
      image: "/img/rajut2.jpg", // Ganti dengan path gambar yang sesuai
    },
  ];

  return (
    <section id="devisi" className="bg-white py-16 mt-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <h2
          className="text-4xl font-bold mb-8 text-center"
          style={{ color: "#FF5733" }} // Sesuaikan warna dengan logo
        >
          Devisi Produksi
        </h2>
        <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Berikut adalah divisi produksi kami yang mendukung operasional perusahaan untuk menghasilkan produk berkualitas tinggi.
        </p>

        {/* Devisi List */}
        <div className="space-y-12">
          {devisiList.map((devisi, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8`}
            >
              {/* Gambar */}
              <div className="md:w-1/2">
                <Image
                  src={devisi.image}
                  alt={devisi.title}
                  width={800}
                  height={600}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
              {/* Deskripsi */}
              <div className="md:w-1/2 text-center md:text-left">
                <h3
                  className="text-2xl font-semibold mb-4"
                  style={{ color: "#FF5733" }}
                >
                  {devisi.title}
                </h3>
                <p className="text-gray-600 text-lg">{devisi.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
