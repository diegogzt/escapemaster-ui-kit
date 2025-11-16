import React from "react";

export interface SpinnerProps {
  size?: "sm" | "md" | "lg";
  color?: string;
}

const Spinner = ({ size = "md", color = "border-primary" }: SpinnerProps) => {
  const sizeMap = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14",
  };

  return (
    <div
      className={`${sizeMap[size]} border-4 border-beige rounded-full animate-spin`}
      style={{
        borderTopColor: color.includes("bg-") ? "var(--primary-color)" : color,
        borderTopWidth: "4px",
      }}
    />
  );
};

export default Spinner;
