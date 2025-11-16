import React, { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => (
    <div className="flex items-center gap-2 mb-3">
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "w-5 h-5 cursor-pointer accent-primary rounded",
          className
        )}
        {...props}
      />
      {label && (
        <label className="cursor-pointer font-medium text-dark m-0">
          {label}
        </label>
      )}
    </div>
  )
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
