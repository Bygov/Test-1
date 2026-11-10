import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../widgets/Header";
import CatalogPage from "../pages/CatalogPage";
import ProductPage from "../pages/ProductPage";
import FavoritesPage from "../pages/FavoritesPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<CatalogPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />

        <Route
          path="*"
          element={
            <main className="container py-12 text-center">
              <h1 className="text-3xl font-bold">404</h1>
              <p className="mt-2 text-gray-500">
                Страница не найдена
              </p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;