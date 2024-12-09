// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";
import ProductHero from "@/components/ProductHero";

export default function Korset() {
  const images = [
    { src: "/img/korset/korset (1).jpg", alt: "Korset Model 1" },
    { src: "/img/korset/korset (5).jpg", alt: "Korset Model 2" },
    { src: "/img/korset/korset (3).jpg", alt: "Korset Model 3" },
    { src: "/img/korset/korset (4).jpg", alt: "Korset Model 4" },
  ];

  const description =
    "Koleksi lengkap korset berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <section>
      <ProductHero />

      <ProductPage
        title="Korset"
        images={images}
        description={description}
        otherProducts={otherProducts}
      />

    </section>
  );
}
