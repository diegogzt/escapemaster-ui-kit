import React, { useState } from "react";
import { cn } from "../utils";

export interface ToggleProps {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
}

const Toggle = ({
  checked = false,
  onChange,
  disabled = false,
  label,
}: ToggleProps) => {
  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (!disabled) {
      const newState = !isChecked;
      setIsChecked(newState);
      onChange?.(newState);
    }
  };

  return (
    <div className="flex items-center gap-3">
      <div
        onClick={handleToggle}
        className={cn(
          "relative w-12 h-6 rounded-full transition-colors",
          isChecked ? "bg-primary" : "bg-beige",
          disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
        )}
      >
        <div
          className={cn(
            "absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform",
            isChecked ? "translate-x-6" : "translate-x-0.5"
          )}
        />
      </div>
      {label && (
        <label
          className={cn(
            "font-medium text-dark",
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Toggle;
