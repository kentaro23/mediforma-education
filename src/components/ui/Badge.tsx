import clsx from "clsx";
import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  className?: string;
};

export function Badge({ children, className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full bg-teal-100 px-3 py-1 text-xs font-medium text-teal-500",
        className
      )}
    >
      {children}
    </span>
  );
}
