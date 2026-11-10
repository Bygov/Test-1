import { create } from "zustand";
import { persist } from "zustand/middleware";

interface ProductStore {
  favorites: number[];
  toggleFavorite: (id: number) => void;
  isFavorite: (id: number) => boolean;
}

export const useProductStore = create<ProductStore>()(
  persist(
    (set, get) => ({
      favorites: [],

      toggleFavorite: (id) => {
        const favorites = get().favorites;

        if (favorites.includes(id)) {
          set({
            favorites: favorites.filter((item) => item !== id),
          });
        } else {
          set({
            favorites: [...favorites, id],
          });
        }
      },

      isFavorite: (id) => get().favorites.includes(id),
    }),
    {
      name: "product-favorites",
    }
  )
);