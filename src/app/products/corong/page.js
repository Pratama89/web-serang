import ProductPage from "@/components/ProductPage";
import { otherProducts } from "@/data/products";

export default function CorongPage() {
  const images = [
    { src: "/img/corong/corong1.jpeg", alt: "Corong Model 1" },
    { src: "/img/corong/corong2.jpeg", alt: "Corong Model 2" },
    { src: "/img/corong/corong3.jpeg", alt: "Corong Model 3" },
    { src: "/img/corong/corong4.jpeg", alt: "Corong Model 4" },
    { src: "/img/corong/corong5.jpeg", alt: "Corong Model 5" },
    { src: "/img/corong/corong6.jpeg", alt: "Corong Model 6" },
    { src: "/img/corong/corong7.jpeg", alt: "Corong Model 7" },
    { src: "/img/corong/corong8.jpeg", alt: "Corong Model 8" },
  ];

  const description =
    "Koleksi lengkap corong berkualitas tinggi kami hadir untuk memberikan kenyamanan dan desain terbaik. Tersedia dalam berbagai model dan ukuran.";

  

  return (
    <ProductPage
      title="Corong"
      images={images}
      description={description}
      otherProducts={otherProducts}
    />
  );
}
