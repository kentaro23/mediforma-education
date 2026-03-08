import type { InputHTMLAttributes } from "react";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement>;

export function Checkbox(props: CheckboxProps) {
  return (
    <input
      type="checkbox"
      {...props}
      className="h-4 w-4 rounded border-neutralGray-400 text-teal-500 focus:ring-teal-500"
    />
  );
}
