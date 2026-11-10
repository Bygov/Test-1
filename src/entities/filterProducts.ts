import type { Product, SortType } from "./Product";

interface FilterOptions {
  search: string;
  category: string;
  sort: SortType;
}

export const filterProducts = (
  products: Product[],
  options: FilterOptions
): Product[] => {
  let result = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(options.search.toLowerCase());

    const matchesCategory =
      options.category === "all" ||
      product.category === options.category;

    return matchesSearch && matchesCategory;
  });

  if (options.sort === "price-asc") {
    result = [...result].sort((a, b) => a.price - b.price);
  }

  if (options.sort === "price-desc") {
    result = [...result].sort((a, b) => b.price - a.price);
  }

  if (options.sort === "rating") {
    result = [...result].sort((a, b) => b.rating - a.rating);
  }

  return result;
};