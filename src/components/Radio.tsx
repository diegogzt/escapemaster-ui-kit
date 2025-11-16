import React, { InputHTMLAttributes, ReactNode } from "react";
import { cn } from "../utils";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode;
}

const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => (
    <div className="flex items-center gap-2 mb-3">
      <input
        ref={ref}
        type="radio"
        className={cn("w-5 h-5 cursor-pointer accent-primary", className)}
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

Radio.displayName = "Radio";

export default Radio;
