import Image from "next/image";

export default function MenuItem() {
  return (
    <div className="bg-gray-100 border shadow-lg  rounded-lg text-center flex items-center hover:bg-white delay-[300ms] duration-[600ms] hover:scale-[1.1] ">
      <Image
        src="/img/proses-laminating2.jpg"
        alt="kain"
        width={200}
        height={200}
        className="bg-cover rounded-lg delay-[300ms] duration-[600ms] hover:scale-[1.5]"
      />
      <div className="">
        <h3 className="text-lg font-semibold ">Laminating Busa</h3>
        <p className="text-sm my-2 mx-2">
          Busa lapis dengan material terbaik bisa untuk exterior produk, lapisan
          kain BH, aksesori, dan lain sebagainya
        </p>
      </div>
    </div>
  );
}
