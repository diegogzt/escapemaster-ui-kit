import React, { TextareaHTMLAttributes } from "react";
import { cn } from "../utils";

export interface TextareaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, className, ...props }, ref) => (
    <div className="mb-6">
      {label && (
        <label className="block mb-2 font-semibold text-dark">{label}</label>
      )}
      <textarea
        ref={ref}
        className={cn(
          "w-full px-3 py-2 border-2 rounded-lg text-base transition-colors bg-white text-dark min-h-24 resize-vertical",
          error
            ? "border-red-500"
            : "border-beige focus:border-primary focus:outline-none",
          className
        )}
        {...props}
      />
      {error && <span className="text-red-600 text-sm mt-1">{error}</span>}
    </div>
  )
);

Textarea.displayName = "Textarea";

export default Textarea;
