'use client';

import About from '@/components/layouts/About';
import Contact from '@/components/layouts/Contact';
import Hero from '@/components/layouts/Hero';
import HomeMenu from '@/components/layouts/HomeMenu';
import WhyChooseUs from '@/components/WhyChooseUs';
import Perbaikan from '@/components/layouts/Perbaikan';
import { motion } from 'framer-motion';



export default function Home() {
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

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <About />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <HomeMenu />
      </motion.div>

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
