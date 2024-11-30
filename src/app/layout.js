

import { Roboto } from 'next/font/google';
import './globals.css';
import Footer from '@/components/layouts/Footer';
import Header from '@/components/layouts/Header';
import { SessionProvider } from 'next-auth/react';
import { AppProvider } from '@/components/AppContext';
import Head from 'next/head';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'] })

export const metadata = {
  title: 'CV. Mutiara Elasticindo',
  description: 'Perusahaan Pabrik Textile',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='scroll-smooth'>
      <Head>
          {/* Menambahkan link Material Icons */}
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />  
        </Head>

      <body className={roboto.className}>
        <main className='max-w-full mx-auto '>
        <AppProvider>
            <Header />
            {children}
            <Footer />
        </AppProvider>
        </main>
      </body>
    </html>
  )
}
