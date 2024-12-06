// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";
import ProductHero from "@/components/ProductHero";

export default function Karet() {
  const images = [
    { src: "/img/karet/karet (1).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (2).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (3).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (4).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (5).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (6).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (7).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (8).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (9).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (10).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (11).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (12).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (13).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (14).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (15).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (16).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (17).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (18).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (19).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (20).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (21).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (22).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (23).jpg", alt: "Karet Model 1" },
    { src: "/img/karet/karet (24).jpg", alt: "Karet Model 1" },
  ];

  const description =
    "Koleksi lengkap Karet berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <section>
      <ProductHero />
      <ProductPage
        title="Karet"
        images={images}
        description={description}
        otherProducts={otherProducts}
      />
    </section>
  );
}
