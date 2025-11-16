import React, { ReactNode } from "react";
import { cn } from "../utils";

export interface BadgeProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
}

const Badge = ({ children, variant = "primary" }: BadgeProps) => {
  const variantStyles = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-dark",
    accent: "bg-accent text-white",
    outline: "bg-transparent text-primary border border-primary",
  };

  return (
    <span
      className={cn(
        "inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase",
        variantStyles[variant]
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
