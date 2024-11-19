import Image from "next/image";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeader";
import Link from "next/link";

export default function HomeMenu() {
  return (
    <section className="mt-20 pt-24" id="product">
      <div className="text-center">
        <SectionHeaders
          subHeader="Jasa dan Layanan Kami"
          mainHeader="Kami mengerjakan pengeleman Kain dan Busa dengan kualitas terbaik."
        />
      </div>
      <div className="grid grid-cols-2 gap-6 mt-8 w-full xs:grid-cols-1 xs:p-5 xs:gap-4 px-20">
        <div className="bg-gray-100 border shadow-lg  rounded-lg text-center flex items-center hover:bg-white delay-[100ms] duration-[200ms] hover:scale-[1.1] ">
          <Image
            src={"/img/proses-laminating2.jpg"}
            alt="kain"
            width={200}
            height={200}
            className="h-56 w-56 bg-cover rounded-lg delay-[100ms] duration-[300ms] hover:scale-[1.1] xs:h-36 xs:w-36"
          />
          <div className="xs:py-2">
            <h1 className="text-base font-medium mx-4">Laminating Kain PE dan Busa</h1>
            <p className="text-xs my-2 mx-4">
              Busa lapis dengan material terbaik bisa untuk exterior produk,
              lapisan kain BH, aksesori, dan lain sebagainya.
            </p>
            <Link href="https://wa.link/h7ywr2">
              <button className="mx-2 mt-4 text-white bg-red-500 border-0 py-2 px-6 xs:py-1 xs:px-3 focus:outline-none hover:bg-red-600 rounded  text-center">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 border shadow-lg  rounded-lg text-center flex items-center hover:bg-white delay-[100ms] duration-[200ms] hover:scale-[1.1] ">
          <Image
            src={"/img/insole sepatu.png"}
            alt="kain"
            width={200}
            height={200}
            className="h-56 w-56 bg-cover rounded-lg delay-[100ms] duration-[600ms] hover:scale-[1.1] xs:h-36 xs:w-36"
          />
          <div className="xs:py-2">
            <h1 className="text-base font-medium ">
              Laminating Insole Sepatu
            </h1>
            <p className="text-xs my-2 mx-2">
            Cup Insole merupakan komponen sepatu yang penting adanya sebagai alas untuk menambah kenyamanan pengguna.
            </p>
            <Link href="https://wa.link/h7ywr2">
              <button className="mx-2 mt-4 text-white bg-red-500 border-0 py-2 px-6 xs:py-1 xs:px-3 focus:outline-none hover:bg-red-600 rounded  text-center">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 border shadow-lg  rounded-lg text-center flex items-center hover:bg-white delay-[100ms] duration-[200ms] hover:scale-[1.1] ">
          <Image
            src="/img/busa-kasur.jpg"
            alt="kain"
            width={200}
            height={200}
            className="h-56 w-56 bg-cover rounded-lg delay-[100ms] duration-[600ms] hover:scale-[1.1] xs:h-36 xs:w-36"
          />
          <div className="xs:py-2">
            <h1 className="text-base font-medium ">
              Laminating Busa dan Kain Kasur
            </h1>
            <p className="text-xs my-2 mx-2">
              Kami menerima juga laminating busa dan kain kasur
            </p>
            <Link href="https://wa.link/h7ywr2">
              <button className="mx-2 mt-4 text-white bg-red-500 border-0 py-2 px-6 xs:py-1 xs:px-3 focus:outline-none hover:bg-red-600 rounded  text-center">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-gray-100 border shadow-lg  rounded-lg text-center flex items-center hover:bg-white delay-[100ms] duration-[200ms] hover:scale-[1.1] ">
          <Image
            src="/img/admin2.jpg"
            alt="kain"
            width={200}
            height={200}
            className="h-56 w-56 bg-cover rounded-lg delay-[100ms] duration-[200ms] hover:scale-[1.1] xs:h-36 xs:w-36"
          />
          <div className="xs:py-2">
            <h3 className="text-base font-medium">Pelayanan Yang Ramah</h3>
            <p className="text-xs my-2 mx-2">
              Data masuk dan keluar tercatat rapih oleh admin kami, sehingga
              proses hasil laminating bisa berjalan lancar.
            </p>
            <Link href="https://wa.link/h7ywr2">
              <button className="mx-2 mt-4 text-white bg-red-500 border-0 py-2 px-6 xs:py-1 xs:px-3 focus:outline-none hover:bg-red-600 rounded  text-center">
                Hubungi Admin
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
