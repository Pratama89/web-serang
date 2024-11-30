// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";

export default function Karet() {
  const images = [
    { src: "/img/karet/karet1.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet2.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet3.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet4.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet5.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet6.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet7.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet8.jpeg", alt: "Karet Model 1" },
    { src: "/img/karet/karet9.jpeg", alt: "Karet Model 1" },
  ];

  const description =
    "Koleksi lengkap Karet berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <ProductPage
      title="Karet"
      images={images}
      description={description}
      otherProducts={otherProducts}
    />
  );
}
