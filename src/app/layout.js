'use client'; // Menandakan ini adalah Client Component

import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";
import { SessionProvider } from "next-auth/react";
import { AppProvider } from "@/components/AppContext";
import Head from "next/head";
import { useState, useEffect } from "react";
import Loader from "@/components/Loader"; // Pastikan path ini sesuai

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default function RootLayout({ children }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Timer untuk menyembunyikan loader setelah konten selesai dimuat
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // Sesuaikan durasi loader

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, []);

  return (
    <html lang="en" className="scroll-smooth">
      <body className={roboto.className}>
        {/* Loader akan ditampilkan jika isLoading true */}
        {isLoading && <Loader />}
        
        <main className="max-w-full mx-auto ">
          <AppProvider>
            <Header />
            {/* Tampilkan children jika loading selesai */}
            <div className={`transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}>
              {children}
            </div>
            <Footer />
          </AppProvider>
        </main>
      </body>
    </html>
  );
}
