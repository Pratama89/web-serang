// components/ScrollFadeUp.js
'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function ScrollFadeUp({ children }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Animasi hanya dipicu sekali
    threshold: 0.1, // Persentase visibilitas elemen sebelum animasi dimulai
  });

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeInUp}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}
