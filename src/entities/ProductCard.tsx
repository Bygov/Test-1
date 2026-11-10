import { Link } from "react-router-dom";
import type { Product } from "./Product";
import Card from "../shared/Card";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Card className="overflow-hidden transition hover:-translate-y-1 hover:shadow-md">
      <Link to={`/products/${product.id}`}>
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-52 w-full bg-white object-contain p-4"
        />

        <div className="p-4">
          <p className="mb-2 text-sm text-gray-500">
            {product.category}
          </p>

          <h3 className="mb-2 min-h-12 font-semibold">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <span className="text-lg font-bold text-blue-600">
              ${product.price}
            </span>

            <span className="text-sm text-yellow-600">
               {product.rating}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default ProductCard;