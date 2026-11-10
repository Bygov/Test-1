import Select from "../shared/Select";
import type { SortType } from "../entities/Product";

interface SortSelectProps {
  value: SortType;
  onChange: (value: SortType) => void;
}

const SortSelect = ({ value, onChange }: SortSelectProps) => {
  const options = [
    { label: "По умолчанию", value: "default" },
    { label: "Сначала дешевле", value: "price-asc" },
    { label: "Сначала дороже", value: "price-desc" },
    { label: "По рейтингу", value: "rating" },
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(event) => onChange(event.target.value as SortType)}
      className="w-full"
    />
  );
};

export default SortSelect;