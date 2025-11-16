import React, { ReactNode } from "react";
import { cn } from "../utils";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export interface CardHeaderProps {
  children: ReactNode;
}

export interface CardTitleProps {
  children: ReactNode;
  level?: "h3" | "h4" | "h5";
}

export interface CardFooterProps {
  children: ReactNode;
}

const Card = ({ children, className }: CardProps) => (
  <div
    className={cn(
      "bg-white border-2 border-light rounded-xl p-6 transition-all hover:-translate-y-1 hover:shadow-lg max-w-sm",
      className
    )}
  >
    {children}
  </div>
);

const CardHeader = ({ children }: CardHeaderProps) => (
  <div className="border-b border-beige pb-4 mb-4">{children}</div>
);

const CardTitle = ({ children, level = "h4" }: CardTitleProps) => {
  const Component = level;
  return (
    <Component className="text-primary text-xl mb-2">{children}</Component>
  );
};

const CardFooter = ({ children }: CardFooterProps) => (
  <div className="border-t border-beige pt-4 mt-4">{children}</div>
);

export { Card, CardHeader, CardTitle, CardFooter };
export default Card;
