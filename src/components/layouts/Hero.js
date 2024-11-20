import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";
import { Carousel } from "flowbite-react";

export default function Hero() {
  // return (
  //   <section
  //     className="hero  pt-40 bg-[url('/laminating-hero.jpg')] flex justify-center items-center p-20 bg-cover xs:bg-[url('/latar-depan.png')] xs:bg-cover xs:w-screen xs:h-screen xs:-mt-12 xs:pt-40 xs:flex xs:justify-center xs:p-10	"
  //     id="home">
      
  //       <div className="py-12 xs:col-span-2 xs:flex xs:flex-col ">
  //         <h1 className="text-4xl text-black xs:text-3xl font-semibold xs:text-center">
  //           <span className="text-primary">Mutiara</span> Laminating
  //         </h1>
  //         <p className="mt-4 text-black text-lg  xs:text-center xs:text-white">
  //           Dipercaya oleh lebih dari ratusan pelaku industri sebagai penyedia
  //           jasa laminating kain dan busa sejak tahun 2014.
  //         </p>
  //         <div className="flex justify-start gap-4 items-center mt-8 text-sm xs:flex-col">
  //           <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full ">
  //             Layanan Laminating
  //             <Right />
  //           </button>
  //           <Link href={"https:wa.link/h7ywr2"}>
  //             <button className="flex justify-center items-center gap-2  text-white text-sm px-4 py-2 rounded-full xs:px-6 xs:py-4 ">
  //               Kontak Admin
  //               <Right />
  //             </button>
  //           </Link>
  //         </div>
  //       </div>
  //       <Image
  //         src={"/img/mesin-laminating2.png"}
  //         alt="hero image"
  //         width={600}
  //         height={300}
  //         className="xs:hidden "
  //       />
      
  //   </section>
  // );

  return (
    <section
      className="relative bg-white flex items-center justify-center h-screen w-full overflow-hidden"
      id="home">
      {/* Background Image */}
      <Image
        src="/laminating-hero.JPG"
        alt="Hero Background"
        layout="fill"
        objectFit="cover"
        priority
        className="absolute z-0"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-6 max-w-4xl">
        <h1 className="text-5xl font-bold leading-snug">
          <span className="text-primary">Mutiara</span> Elasticondo
        </h1>
        <p className="mt-4 text-lg">
          Dipercaya oleh ratusan pelaku industri sebagai penyedia jasa laminating
          kain dan busa sejak tahun 2014.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          {/* Tombol Layanan */}
          <button className="bg-primary text-white font-medium px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition">
            Layanan Laminating
          </button>
          {/* Tombol Kontak */}
          <Link href="https://wa.link/h7ywr2" target="_blank">
            <button className="bg-white text-black font-medium px-6 py-3 rounded-full shadow-md hover:bg-gray-200 transition">
              Kontak Admin
            </button>
          </Link>
        </div>
      </div>

      {/* Gambar Mesin */}
      {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20 w-full max-w-xl">
        <Image
          src="/img/mesin-laminating2.png"
          alt="Mesin Laminating"
          width={500}
          height={300}
          objectFit="contain"
        />
      </div> */}
    </section>
  );
}
