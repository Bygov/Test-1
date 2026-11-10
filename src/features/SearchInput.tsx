import Input from "../shared/Input";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <Input
      type="text"
      placeholder="Поиск товаров..."
      value={value}
      onChange={(event) => onChange(event.target.value)}
    />
  );
};

export default SearchInput;