import Image from "next/image";

export default function Loader() {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50">
      {/* Logo */}
      {/* <div className=""> */}
      <Image
        src="/Icon Mutiara serang.png" // Ganti dengan path logo Anda
        alt="Loading Logo"
        width={80}
        height={80}
        className="animate-book-open"
      />
      {/* </div> */}
      {/* Teks di bawah logo */}
      <p className="mt-4 text-lg font-semibold text-gray-700 animate-text-open">
        CV. MUTIARA ELASTICINDO
      </p>
    </div>
  );
}
