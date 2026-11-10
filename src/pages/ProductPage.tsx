import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProduct, productKeys } from "../entities/productApi";
import FavoriteButton from "../features/FavoriteButton";
import Button from "../shared/Button";
import Card from "../shared/Card";
import Spinner from "../shared/Spinner";

const ProductPage = () => {
  const { id } = useParams();
  const productId = Number(id);

  const productQuery = useQuery({
    queryKey: productKeys.detail(productId),
    queryFn: () => getProduct(productId),
    enabled: Number.isInteger(productId) && productId > 0,
  });

  if (!Number.isInteger(productId) || productId <= 0) {
    return (
      <p className="container py-12 text-center">
        Неверный номер товара
      </p>
    );
  }

  if (productQuery.isLoading) {
    return <Spinner />;
  }

  if (productQuery.isError || !productQuery.data) {
    return (
      <p className="container py-12 text-center text-red-600">
        Товар не найден
      </p>
    );
  }

  const product = productQuery.data;

  return (
    <main className="container py-10">
      <Link to="/">
        <Button variant="secondary">← Назад в каталог</Button>
      </Link>

      <Card className="mt-8 grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
        <img
          src={product.images[0] || product.thumbnail}
          alt={product.title}
          className="h-80 w-full object-contain"
        />

        <div>
          <p className="mb-3 text-sm text-gray-500">
            {product.category}
          </p>

          <h1 className="mb-4 text-3xl font-bold">
            {product.title}
          </h1>

          <p className="mb-5 text-gray-600">
            {product.description}
          </p>

          <p className="mb-3 text-2xl font-bold text-blue-600">
            ${product.price}
          </p>

          <p className="mb-2">Рейтинг: {product.rating}</p>
          <p className="mb-6">В наличии: {product.stock}</p>

          {product.brand && (
            <p className="mb-6">Бренд: {product.brand}</p>
          )}

          <FavoriteButton productId={product.id} />
        </div>
      </Card>
    </main>
  );
};

export default ProductPage;