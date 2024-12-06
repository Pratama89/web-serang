import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";
import ProductHero from "@/components/ProductHero";

export default function CorongPage() {
  const images = [
    { src: "/img/corong/corong (1).jpg", alt: "Corong Model 1" },
    { src: "/img/corong/corong (2).jpg", alt: "Corong Model 2" },
    { src: "/img/corong/corong (3).jpg", alt: "Corong Model 3" },
    { src: "/img/corong/corong (4).jpg", alt: "Corong Model 4" },
    { src: "/img/corong/corong (5).jpg", alt: "Corong Model 5" },
    { src: "/img/corong/corong (6).jpg", alt: "Corong Model 6" },
    { src: "/img/corong/corong (7).jpg", alt: "Corong Model 7" },
    { src: "/img/corong/corong (8).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/corong (9).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/corong (10).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/corong (11).jpg", alt: "Corong Model 8" },
    { src: "/img/corong/corong (12).jpg", alt: "Corong Model 8" },
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
