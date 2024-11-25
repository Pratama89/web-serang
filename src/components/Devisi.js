import Image from "next/image";

export default function Devisi() {
  const devisiList = [
    {
      title: "Gulung Covering",
      description:
        "Proses penggulungan benang yang telah melalui tahap covering. Hasil gulungan dijamin presisi dan sesuai dengan standar kualitas tertinggi.",
      image: "/img/rajut1.JPG", // Ganti dengan path gambar yang sesuai
      type: "image",
    },
    {
      title: "Covering",
      description:
        "Lapisan pelindung pada benang untuk meningkatkan kekuatan dan elastisitas menggunakan mesin modern.",
      image: "/img/covering-benang.png", // Ganti dengan path gambar yang sesuai
      type: "image",
    },
    {
      title: "Gulung Benang",
      description:
        "Menggulung benang secara rapi untuk memastikan kualitas produksi berikutnya tetap konsisten.",
      image: "/img/rajut3.JPG", // Ganti dengan path gambar yang sesuai
      type: "image",
    },
    {
      title: "Rajut",
      description:
        "Produksi kain rajut dengan tekstur berkualitas tinggi, sesuai kebutuhan industri tekstil modern.",
      image: "/img/rajut-depan.mp4", // Ganti dengan path video yang sesuai
      type: "video",
    },
    {
      title: "Sortir Grey",
      description:
        "Menyortir kain grey berdasarkan standar kualitas sebelum proses lanjutan.",
      image: "/img/rajut5.JPG", // Ganti dengan path gambar yang sesuai
      type: "image",
    },
    {
      title: "Celup / Pewarnaan",
      description:
        "Mencelup atau mewarnakan kain untuk menghasilkan warna yang lebih cerah dan tahan lama.",
      image: "/img/pewarnaan.mp4", // Ganti dengan path gambar yang sesuai
      type: "video",
    },
    {
      title: "Packing/Finishing",
      description:
        "Melakukan packing dan finishing untuk memastikan produk siap untuk penjualan.",
      image: "/img/finishing.mp4", // Ganti dengan path gambar yang sesuai
      type: "video",
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
          Divisi Produksi
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
              {/* Gambar atau Video */}
              <div className="md:w-1/2">
                {devisi.type === "video" ? (
                  <video
                    src={devisi.image}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                  ></video>
                ) : (
                  <Image
                    src={devisi.image}
                    alt={devisi.title}
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                )}
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
