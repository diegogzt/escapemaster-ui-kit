import React from "react";

export interface ProgressBarProps {
  value: number;
  max?: number;
  color?: string;
  showLabel?: boolean;
}

const ProgressBar = ({
  value,
  max = 100,
  color = "bg-primary",
  showLabel = false,
}: ProgressBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className="flex items-center gap-3">
      <div className="w-full h-2 bg-beige rounded overflow-hidden">
        <div
          className={`h-full ${color} transition-all duration-300`}
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showLabel && (
        <span className="min-w-10 text-right text-sm font-medium text-dark">
          {Math.round(percentage)}%
        </span>
      )}
    </div>
  );
};

export default ProgressBar;
