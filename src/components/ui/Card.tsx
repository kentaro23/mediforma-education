import clsx from "clsx";
import type { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export function Card({ children, className }: CardProps) {
  return (
    <article
      className={clsx(
        "rounded-2xl border border-neutralGray-100 bg-white p-6 shadow-soft",
        className
      )}
    >
      {children}
    </article>
  );
}
