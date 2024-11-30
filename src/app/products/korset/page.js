// app/produk/korset/page.js
import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";

export default function Korset() {
  const images = [
    { src: "/img/rajut1.JPG", alt: "Korset Model 1" },
    { src: "/img/rajut2.JPG", alt: "Korset Model 2" },
    { src: "/img/rajut3.JPG", alt: "Korset Model 3" },
    { src: "/img/rajut4.JPG", alt: "Korset Model 4" },
  ];

  const description =
    "Koleksi lengkap korset berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <ProductPage
      title="Korset"
      images={images}
      description={description}
      otherProducts={otherProducts}
    />
  );
}
