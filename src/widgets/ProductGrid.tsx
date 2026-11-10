import type { Product } from "../entities/Product";
import ProductCard from "../entities/ProductCard";
import FavoriteButton from "../features/FavoriteButton";

interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  if (products.length === 0) {
    return (
      <p className="py-12 text-center text-gray-500">
        Товары не найдены
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <div key={product.id} className="flex flex-col gap-3">
          <ProductCard product={product} />

          <FavoriteButton productId={product.id} />
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;