import SearchInput from "../features/SearchInput";
import CategoryFilter from "../features/CategoryFilter";
import SortSelect from "../features/SortSelect";
import type { SortType } from "../entities/Product";

interface CatalogControlsProps {
  search: string;
  setSearch: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  sort: SortType;
  setSort: (value: SortType) => void;
  categories: string[];
}

const CatalogControls = ({
  search,
  setSearch,
  category,
  setCategory,
  sort,
  setSort,
  categories,
}: CatalogControlsProps) => {
  return (
    <div className="mb-8 grid grid-cols-1 gap-4 md:grid-cols-3">
      <SearchInput value={search} onChange={setSearch} />

      <CategoryFilter
        categories={categories}
        value={category}
        onChange={setCategory}
      />

      <SortSelect value={sort} onChange={setSort} />
    </div>
  );
};

export default CatalogControls;