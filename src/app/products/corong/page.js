import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";
import ProductHero from "@/components/ProductHero";

export default function CorongPage() {
  const images = [
    { src: "/img/corong/Corong (1).jpg", alt: "Corong Model 1" },
    { src: "/img/corong/Corong (2).jpg", alt: "Corong Model 2" },
    { src: "/img/corong/Corong (3).jpg", alt: "Corong Model 3" },
    { src: "/img/corong/Corong (4).jpg", alt: "Corong Model 4" },
    { src: "/img/corong/Corong (5).jpg", alt: "Corong Model 5" },
    { src: "/img/corong/Corong (6).jpg", alt: "Corong Model 6" },
    { src: "/img/corong/Corong (7).jpg", alt: "Corong Model 7" },
    { src: "/img/corong/Corong (8).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/Corong (9).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/Corong (10).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/Corong (11).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/Corong (12).jpg", alt: "Corong Model 8" },
  ];

  const description =
    "Koleksi lengkap corong berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <section>
      <ProductHero />
      <ProductPage
        title="Corong"
        images={images}
        description={description}
        otherProducts={otherProducts}
      />
    </section>
  );
}
