import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import {
  getProducts,
  getCategories,
  productKeys,
} from "../entities/productApi";
import { filterProducts } from "../entities/filterProducts";
import type { SortType } from "../entities/Product";
import CatalogControls from "../widgets/CatalogControls";
import ProductGrid from "../widgets/ProductGrid";
import Spinner from "../shared/Spinner";

const CatalogPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState<SortType>("default");

  const productsQuery = useQuery({
    queryKey: productKeys.all,
    queryFn: getProducts,
  });

  const categoriesQuery = useQuery({
    queryKey: productKeys.categories,
    queryFn: getCategories,
  });

  const filteredProducts = useMemo(() => {
    return filterProducts(productsQuery.data ?? [], {
      search,
      category,
      sort,
    });
  }, [productsQuery.data, search, category, sort]);

  if (productsQuery.isLoading || categoriesQuery.isLoading) {
    return <Spinner />;
  }

  if (productsQuery.isError || categoriesQuery.isError) {
    return (
      <p className="container py-12 text-center text-red-600">
        Не удалось загрузить товары. Попробуйте обновить страницу.
      </p>
    );
  }

  return (
    <main className="container py-10">
      <h1 className="mb-3 text-3xl font-bold">Каталог товаров</h1>

      <p className="mb-8 text-gray-500">
        Найдите подходящий товар среди нашего ассортимента
      </p>

      <CatalogControls
        search={search}
        setSearch={setSearch}
        category={category}
        setCategory={setCategory}
        sort={sort}
        setSort={setSort}
        categories={categoriesQuery.data ?? []}
      />

      <p className="mb-5 text-sm text-gray-500">
        Найдено товаров: {filteredProducts.length}
      </p>

      <ProductGrid products={filteredProducts} />
    </main>
  );
};

export default CatalogPage;
