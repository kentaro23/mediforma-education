import clsx from "clsx";
import type { SelectHTMLAttributes } from "react";

type SelectProps = SelectHTMLAttributes<HTMLSelectElement>;

export function Select(props: SelectProps) {
  return (
    <select
      {...props}
      className={clsx(
        "w-full rounded-xl border border-neutralGray-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100",
        props.className
      )}
    />
  );
}
