import React, { ReactNode } from "react";
import { cn } from "../utils";

export interface AlertProps {
  type: "success" | "warning" | "error" | "info";
  children: ReactNode;
  onClose?: () => void;
}

const Alert = ({ type, children, onClose }: AlertProps) => {
  const typeStyles = {
    success: "bg-light text-dark border-l-4 border-primary",
    warning: "bg-orange-100 text-dark border-l-4 border-accent",
    error: "bg-red-100 text-red-600 border-l-4 border-red-600",
    info: "bg-blue-100 text-dark border-l-4 border-secondary",
  };

  return (
    <div
      className={cn(
        "p-4 rounded-lg mb-4 flex justify-between items-center",
        typeStyles[type]
      )}
    >
      <span>{children}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-xl font-bold cursor-pointer bg-none border-none p-0"
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Alert;
