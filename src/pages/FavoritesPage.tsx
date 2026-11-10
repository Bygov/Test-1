import { useQuery } from "@tanstack/react-query";
import { getProducts, productKeys } from "../entities/productApi";
import { useProductStore } from "../entities/productStore";
import ProductGrid from "../widgets/ProductGrid";
import Spinner from "../shared/Spinner";

const FavoritesPage = () => {
  const favorites = useProductStore((state) => state.favorites);

  const productsQuery = useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
  });

  if (productsQuery.isLoading) {
    return <Spinner />;
  }

  if (productsQuery.isError) {
    return (
      <p className="container py-12 text-center text-red-600">
        Не удалось загрузить избранное
      </p>
    );
  }

  const favoriteProducts = (productsQuery.data ?? []).filter(
    (product) => favorites.includes(product.id)
  );

  return (
    <main className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Избранное
      </h1>

      <ProductGrid products={favoriteProducts} />
    </main>
  );
};

export default FavoritesPage;