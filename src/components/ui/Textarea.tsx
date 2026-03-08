import clsx from "clsx";
import type { TextareaHTMLAttributes } from "react";

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea(props: TextareaProps) {
  return (
    <textarea
      {...props}
      className={clsx(
        "w-full rounded-xl border border-neutralGray-100 bg-white px-4 py-3 text-sm text-navy-900 outline-none transition focus:border-teal-500 focus:ring-2 focus:ring-teal-100",
        props.className
      )}
    />
  );
}
