import Image from "next/image";
import Right from "../icons/Right";
import Link from "next/link";
import { Carousel } from "flowbite-react";

export default function Hero() {
  return (
    <section
      className="hero  pt-40 bg-[url('/laminating-hero.jpg')] flex justify-center items-center p-20 bg-cover xs:bg-[url('/latar-depan.png')] xs:bg-cover xs:w-screen xs:h-screen xs:-mt-12 xs:pt-40 xs:flex xs:justify-center xs:p-10	"
      id="home">
      
        <div className="py-12 xs:col-span-2 xs:flex xs:flex-col ">
          <h1 className="text-4xl text-black xs:text-3xl font-semibold xs:text-center">
            <span className="text-primary">Mutiara</span> Laminating
          </h1>
          <p className="mt-4 text-black text-lg  xs:text-center xs:text-white">
            Dipercaya oleh lebih dari ratusan pelaku industri sebagai penyedia
            jasa laminating kain dan busa sejak tahun 2014.
          </p>
          <div className="flex justify-start gap-4 items-center mt-8 text-sm xs:flex-col">
            <button className="bg-primary flex gap-2 text-white px-4 py-2 rounded-full ">
              Layanan Laminating
              <Right />
            </button>
            <Link href={"https:wa.link/h7ywr2"}>
              <button className="flex justify-center items-center gap-2  text-white text-sm px-4 py-2 rounded-full xs:px-6 xs:py-4 ">
                Kontak Admin
                <Right />
              </button>
            </Link>
          </div>
        </div>
        <Image
          src={"/img/mesin-laminating2.png"}
          alt="hero image"
          width={600}
          height={300}
          className="xs:hidden "
        />
      
    </section>
  );
}
