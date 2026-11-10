import axios from "axios";
import type { Product } from "./Product";

const api = axios.create({
  baseURL: "https://dummyjson.com",
});

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await api.get<ProductsResponse>("/products?limit=0");

  return response.data.products;
};

export const getProduct = async (id: number): Promise<Product> => {
  const response = await api.get<Product>("/products/" + id);

  return response.data;
};

export const getCategories = async (): Promise<string[]> => {
  const response = await api.get<string[]>("/products/category-list");

  return response.data;
};

export const productKeys = {
  all: ["products"] as const,
  detail: (id: number) => ["products", id] as const,
  categories: ["categories"] as const,
};