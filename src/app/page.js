import About from '@/components/layouts/About'
import Contact from '@/components/layouts/Contact'
import Hero from '@/components/layouts/Hero'
import HomeMenu from '@/components/layouts/HomeMenu'
import WhyChooseUs from '@/components/WhyChooseUs'
import Perbaikan from '@/components/layouts/Perbaikan'

export default function Home() {
  return (
    <div>
      
      <Hero />
      <About />
      <HomeMenu />
      <WhyChooseUs />
      <Contact />
      {/* <Perbaikan /> */}
      
    </div>
  )
}
