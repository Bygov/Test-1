import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: {
    label: string;
    value: string;
  }[];
};

const Select = ({ options, className, ...props }: SelectProps) => {
  return (
    <select
      className={`rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none focus:border-blue-500 ${className ?? ""}`}
      {...props}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Select;