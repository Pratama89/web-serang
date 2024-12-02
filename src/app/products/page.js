
import Head from 'next/head';
import Products from '@/components/layouts/Products';

export const metadata = {
  title: 'Produk Kami | CV. Mutiara Elasticindo',
  description: 'Produk-produk unggulan kami meliputi layanan laminasi kain, busa, dan lainnya.',
};

export default function ProductsPage() {
  return (
    <section className="bg-white  border border-red-600">
      <div className="mx-auto ">
        <Products />
      </div>
    </section>
  );
}
