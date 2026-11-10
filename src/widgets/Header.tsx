import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="container flex min-h-16 items-center justify-between">

        <Link
          to="/"
          className="text-2xl font-bold text-blue-600"
          onClick={closeMenu}
        >
          MyStore
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Каталог
          </NavLink>

          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              isActive
                ? "font-semibold text-blue-600"
                : "text-gray-600 hover:text-blue-600"
            }
          >
            Избранное
          </NavLink>
        </nav>

        <button
          onClick={toggleMenu}
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-lg border border-gray-200 hover:bg-gray-100 md:hidden"
          aria-label="Переключить меню"
          aria-expanded={isOpen}
        >
          {!isOpen && (
            <>
              <span className="h-0.5 w-5 rounded bg-gray-700" />
              <span className="h-0.5 w-5 rounded bg-gray-700" />
              <span className="h-0.5 w-5 rounded bg-gray-700" />
            </>
          )}

          {isOpen && (
            <span className="text-2xl leading-none text-gray-700">
              ×
            </span>
          )}
        </button>
      </div>

      {isOpen && (
        <nav className="flex flex-col gap-4 border-t border-gray-200 bg-white px-5 py-5 md:hidden">
          <NavLink
            to="/"
            onClick={closeMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            Каталог
          </NavLink>

          <NavLink
            to="/favorites"
            onClick={closeMenu}
            className="text-gray-700 hover:text-blue-600"
          >
            Избранное
          </NavLink>
        </nav>
      )}
    </header>
  );
};

export default Header;