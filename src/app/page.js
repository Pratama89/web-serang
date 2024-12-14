'use client';

import { useState, useEffect } from 'react';
import About from '@/components/layouts/About';
import Contact from '@/components/layouts/Contact';
import Hero from '@/components/layouts/Hero';
import WhyChooseUs from '@/components/WhyChooseUs';
import Produk from '@/components/Produk';
import CountUp from '@/components/CountUp';
import Loader from '@/components/Loader'; // Loader
import ScrollFadeUp from '@/components/ScrollFadeUp'; // HOC Scroll Animasi

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      {/* Hero Section */}
      <ScrollFadeUp>
        <Hero />
      </ScrollFadeUp>

      {/* About Section */}
      <ScrollFadeUp>
        <About />
      </ScrollFadeUp>

      {/* Produk Section */}
      <ScrollFadeUp>
        <Produk />
      </ScrollFadeUp>

      {/* Why Choose Us Section */}
      <ScrollFadeUp>
        <WhyChooseUs />
      </ScrollFadeUp>

      {/* Count Up Section */}
      {/* <ScrollFadeUp>
        <CountUp />
      </ScrollFadeUp> */}

      {/* Contact Section */}
      <ScrollFadeUp>
        <Contact />
      </ScrollFadeUp>
    </div>
  );
}
