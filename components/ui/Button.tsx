import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "light";
  size?: "sm" | "md" | "lg";
  className?: string;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  onClick,
  type = "button",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-600 cursor-pointer";

  const variants = {
    primary:
      "bg-brand-500 text-white hover:bg-brand-600 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    light:
      "bg-white text-brand-700 hover:bg-brand-50 shadow-md hover:shadow-lg hover:-translate-y-0.5",
    outline:
      "border-2 border-brand-500 text-brand-700 hover:bg-brand-500 hover:text-white hover:-translate-y-0.5",
    ghost:
      "text-brand-700 hover:bg-brand-100 hover:text-brand-800",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = clsx(base, variants[variant], sizes[size], className);

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
