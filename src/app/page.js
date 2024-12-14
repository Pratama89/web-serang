'use client';

import { useState, useEffect } from 'react';
import About from '@/components/layouts/About';
import Contact from '@/components/layouts/Contact';
import Hero from '@/components/layouts/Hero';
import HomeMenu from '@/components/layouts/HomeMenu';
import WhyChooseUs from '@/components/WhyChooseUs';
import Perbaikan from '@/components/layouts/Perbaikan';
import { motion } from 'framer-motion';
import Loader from '@/components/Loader'; // Import Loader
import Produk from '@/components/Produk';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi waktu loading selama 2 detik
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Ubah waktu jika perlu

    return () => clearTimeout(timer);
  }, []);

  // Jika masih loading, tampilkan Loader
  if (isLoading) {
    return <Loader />;
  }

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0 }}
      >
        <Hero />
      </motion.div>

      
        <About />     
      

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Produk />
        </motion.div>

      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HomeMenu />
      </motion.div> */}

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <WhyChooseUs />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <Contact />
      </motion.div>

      {/* Uncomment jika diperlukan */}
      {/* <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <Perbaikan />
      </motion.div> */}
    </div>
  );
}
