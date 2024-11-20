import Image from "next/image";
import Carousel from "./Carousel";
import SectionHeaders from "./SectionHeader";
import ComponentCarousel from "./Carousel";

export default function About() {
  // return (
  //   <div className="pt-20" id="about">
  //     <section className="text-center my-16 mx-5 ">
  //       <div className=" rounded-lg p-4">
  //         <SectionHeaders
  //           subHeader="Tentang Kami"
  //           mainHeader="Perusahaan kami bergerak dalam bidang Jasa Laminating yang diperuntukan bagi Konfeksi BH/Bra sejak tahun 2014. Kami melayani Jasa Laminating Kain dan Busa yang mana Saat ini kami memiliki mesin laminating yang lengkap dan mesin pemotong corong serta alat penunjang lainnya."
  //         />
  //       </div>

  //       <div className="py-6 bg-white container mx-auto px-6 static  xs:px-2 xs:max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl ">
  //         <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6 xs:px-2 xs:max-w-3xl sm:max-w-5xl md:max-w-6xl lg:max-w-7xl ">
  //           <div className="space-y-6 md:space-y-0 md:flex md:gap-6 sm:flex-col sm:items-center lg:items-center lg:gap-12 lg:flex-row  relative ">
  //             <div className="md:w-10/12 lg:w-7/12 md:h-5/6 xs:max-w-5xl ">
  //               {/* Start Carousel */}
  //               <ComponentCarousel />
  //               {/* End Carousel */}
  //             </div>

  //             <div className="md:6/12 lg:w-6/12 text-left">
  //               <h2 className="text-3xl text-red-600 md:text-3xl md:text-center hp:text-center xs:text-2xl">
  //                 Jasa Mutiara Laminating Ciledug
  //               </h2>
  //               <p className="mt-6 text-gray-600 text-xl md:text-base hp:text-base font-normal xs:text-sm">
  //                 Berdiri Tahun : 2014
  //                 <br />
  //                 Bidang Usaha : Jasa Laminating Khusus Bra / BH
  //                 <br />
  //                 <br />
  //                 Kami hadir sebagai Penyedia Jasa Laminating untuk Bahan Kain
  //                 dan Busa serta Kebutuhan Perlengkapan BH/Bra. Pengerjaan cepat
  //                 dan packing rapih untuk memastikan barang yang sampai ke
  //                 tangan anda aman dan barang telah melalui Persotiran dan
  //                 Pengemasan yang baik. Untuk kepuasan dan menjaga kepercayaan
  //                 langganan kami.
  //               </p>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </div>
  // );

  return (
    <div className="pt-20 bg-gray-50" id="about">
      <section className="container mx-auto px-6 py-16 text-gray-800">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-700">
            Tentang Kami
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Perusahaan kami bergerak dalam bidang Jasa Laminating yang
            diperuntukan bagi Konfeksi BH/Bra sejak tahun 2014. Kami melayani
            Jasa Laminating Kain dan Busa yang mana saat ini kami memiliki mesin
            laminating yang lengkap, mesin pemotong corong, serta alat penunjang lainnya.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col-reverse lg:flex-row items-center lg:gap-16">
          {/* Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-3xl font-semibold text-gray-700 mb-4">
              Jasa Mutiara Laminating Ciledug
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              <strong>Berdiri Tahun:</strong> 2014
              <br />
              <strong>Bidang Usaha:</strong> Jasa Laminating Khusus Bra / BH
              <br />
              <br />
              Kami hadir sebagai Penyedia Jasa Laminating untuk bahan kain dan
              busa serta kebutuhan perlengkapan BH/Bra. Pengerjaan cepat dan
              packing rapi untuk memastikan barang yang sampai ke tangan Anda
              aman. Barang telah melalui penyortiran dan pengemasan yang baik
              untuk menjaga kepercayaan pelanggan kami.
            </p>
          </div>

          {/* Carousel Section */}
          <div className="lg:w-1/2 w-full">
            <Carousel />
          </div>
        </div>
      </section>
    </div>
  );
}
