// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";

export default function Tali() {
  const images = [
    { src: "/img/tali/tali1.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali2.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali3.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali4.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali5.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali6.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali7.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali8.jpeg", alt: "Tali Model 1" },
    { src: "/img/tali/tali9.jpeg", alt: "Tali Model 1" },
  ];

  const description =
    "Koleksi lengkap korset berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <ProductPage
      title="Tali"
      images={images}
      description={description}
      otherProducts={otherProducts}
    />
  );
}
