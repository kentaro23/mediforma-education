import Link from "next/link";
import clsx from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-teal-500 text-white hover:bg-teal-400 focus-visible:ring-teal-500 border border-transparent",
  secondary:
    "bg-transparent text-navy-900 border border-navy-900 hover:bg-navy-900 hover:text-white focus-visible:ring-navy-900",
  ghost:
    "bg-transparent text-navy-900 border border-neutralGray-100 hover:border-teal-500 hover:text-teal-500"
};

export function Button({
  children,
  href,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    variants[variant],
    className
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
