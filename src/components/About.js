import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-white py-16 justify-center">
      <div className="lg:container mx-auto px-6 mt-16 md:px-12 lg:px-20">
        {/* Header */}
        <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center" style={{ color: "#FF5733" }}>
          Tentang Kami
        </h2>
        
        {/* Gambar */}
        <div className="flex w-full overflow-hidden h-[200px] md:h-[300px]  lg:h-[400px] mb-12 justify-center">
          <Image
            src="/img/factory.JPG" // Sesuaikan path gambar
            alt="Pabrik CV. Mutiara Elasticindo"
            width={800}
            height={600}
            className="rounded-lg shadow-lg object-cover w-full  max-w-4xl h-auto"
          />
        </div>

        {/* Penjelasan Perusahaan */}
        <div className="space-y-6 text-gray-600">
          <h3 className="text-3xl font-semibold text-gray-700 text-center mb-6" style={{ color: "#FF5733" }}>
            Perusahaan Pabrik Tekstil - CV. Mutiara Elasticindo
          </h3>
          <p className="text-lg leading-relaxed">
            <strong>CV. Mutiara Elasticindo</strong> adalah perusahaan yang bergerak di bidang manufaktur tekstil, khususnya dalam pembuatan komponen penting untuk industri pakaian dalam wanita, seperti:
          </p>
          <ul className="list-disc list-inside ml-5 text-lg">
            <li>
              <strong>Karet BRA (Bra Elastics):</strong> Menghasilkan karet elastis berkualitas tinggi untuk mendukung kenyamanan dan fleksibilitas produk BRA.
            </li>
            <li>
              <strong>Tali BRA (Bra Straps):</strong> Menyediakan tali BRA dengan desain fungsional dan estetis untuk memenuhi kebutuhan pelanggan.
            </li>
            <li>
              <strong>Corong BRA (Bra Cups):</strong> Memproduksi corong BRA dengan presisi dan daya tahan yang terjamin.
            </li>
            <li>
              <strong>Korset Elastis:</strong> Menghadirkan korset elastis yang mendukung kenyamanan dan fungsionalitas.
            </li>
          </ul>
          <p className="text-lg leading-relaxed">
            <strong>Sejarah Perusahaan:</strong> CV. Mutiara Elasticindo didirikan pada tahun <strong>2015</strong> di kawasan industri <strong>Serang, Banten</strong>. Berawal dari visi untuk menyediakan produk tekstil berkualitas tinggi bagi industri pakaian dalam, perusahaan ini terus berkembang dengan mengedepankan teknologi modern dan inovasi. Dengan pengalaman hampir satu dekade, kami telah menjadi mitra terpercaya bagi banyak pelaku usaha di dalam negeri maupun luar negeri.
          </p>
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              <strong>Komitmen Kami:</strong>
            </p>
            <ul className="list-disc list-inside ml-5 text-lg">
              <li><strong>Kualitas Terjamin:</strong> Setiap produk melalui proses pengujian ketat untuk memastikan daya tahan dan kenyamanan optimal.</li>
              <li><strong>Teknologi Modern:</strong> Didukung oleh mesin-mesin berteknologi tinggi untuk menghasilkan produk dengan presisi tinggi.</li>
              <li><strong>Pelayanan Pelanggan:</strong> Kepuasan pelanggan adalah prioritas kami. Kami berkomitmen memberikan layanan terbaik, mulai dari produksi hingga pengiriman.</li>
            </ul>
          </div>
          <p className="text-lg leading-relaxed">
            <strong>Lokasi Kami:</strong>  
            <br />
            <strong>Alamat Pabrik:</strong>
            <br />
            CV. Mutiara Elasticindo  
            Jl. Keserangan - Pengampelan No. 88, Kp. Nambo RT 06 / 03, Ds. Keserangan,
            Kec. Ciruas - Kab. Serang, Banten, Indonesia
          </p>
        </div>
      </div>
    </section>
  );
}


