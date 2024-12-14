"use client"; // Komponen client-side
import CountUp from "react-countup";

export default function StatsSection() {
  const stats = [
    { value: 37500, label: "Produksi" },
    { value: 17000, label: "tons of fabric" },
    { value: 9000, label: "tons of dyed fabric" },
    { value: 1400, label: "tons of ready-made clothes" },
  ];

  return (
    <section className="bg-gray-100 py-12 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Kapasitas Produksi</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            {/* Angka Animasi */}
            <h3 className="text-4xl font-extrabold text-red-500">
              <CountUp start={0} end={stat.value} duration={2.5} separator="," />
            </h3>
            {/* Label */}
            <p className="text-gray-700 mt-2 text-lg">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
