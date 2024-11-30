export default function Sidebar({ products }) {
  return (
    <aside className="w-full lg:w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl text-white font-semibold mb-6">Produk Lainnya</h2>
      <ul className="space-y-4">
        {products.map((product, index) => (
          <li key={index}>
            <a
              href={product.link}
              className="flex items-center space-x-3 text-white text-lg hover:bg-blue-600 hover:text-white py-2 px-4 rounded-md transition-all duration-300 ease-in-out"
            >
              {/* Icon */}
              {/* <span className="material-icons">shopping_cart</span> */}
              <span>{product.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
