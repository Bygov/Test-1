import Select from "../shared/Select";

interface CategoryFilterProps {
  categories: string[];
  value: string;
  onChange: (value: string) => void;
}

const CategoryFilter = ({
  categories,
  value,
  onChange,
}: CategoryFilterProps) => {
  const options = [
    { label: "Все категории", value: "all" },
    ...categories.map((category) => ({
      label: category,
      value: category,
    })),
  ];

  return (
    <Select
      options={options}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      className="w-full"
    />
  );
};

export default CategoryFilter;