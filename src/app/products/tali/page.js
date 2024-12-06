// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";
import ProductHero from "@/components/ProductHero";

export default function Tali() {
  const images = [
    { src: "/img/tali/tali (1).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (2).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (3).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (4).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (5).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (6).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (7).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (8).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (9).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (10).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (11).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (12).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (13).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (14).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (15).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (16).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (17).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (18).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (19).jpg", alt: "Tali Model 1" },
    { src: "/img/tali/tali (20).jpg", alt: "Tali Model 1" },
  ];

  const description =
    "Koleksi lengkap korset berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <section>
      {/* Hero Section */}

      <ProductHero />
      <ProductPage
        title="Tali"
        images={images}
        description={description}
        otherProducts={otherProducts}
      />
    </section>
  );
}
