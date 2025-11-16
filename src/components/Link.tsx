import React, { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

export type LinkVariant = "primary" | "secondary" | "ghost";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: LinkVariant;
}

const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  ({ children, variant = "primary", className, ...props }, ref) => {
    const variantStyles = {
      primary: "text-primary hover:text-accent hover:underline",
      secondary: "text-dark hover:text-primary",
      ghost: "text-dark hover:bg-light",
    };

    return (
      <a
        ref={ref}
        className={cn(
          "no-underline font-medium transition-colors cursor-pointer",
          variantStyles[variant],
          className
        )}
        {...props}
      >
        {children}
      </a>
    );
  }
);

Link.displayName = "Link";

export default Link;
