import type { InputHTMLAttributes } from "react";
import { cn } from "./cn";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      className={cn(
        "w-full rounded-lg border border-gray-300 bg-white px-4 py-2 outline-none transition focus:border-blue-500",
        className ?? ""
      )}
      {...props}
    />
  );
};

export default Input;