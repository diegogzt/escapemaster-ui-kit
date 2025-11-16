import React from "react";
import { cn } from "../utils";

export interface AvatarProps {
  initials: string;
  size?: "sm" | "md" | "lg";
  backgroundColor?: string;
  src?: string;
  alt?: string;
}

const Avatar = ({
  initials,
  size = "md",
  backgroundColor = "bg-primary",
  src,
  alt = "avatar",
}: AvatarProps) => {
  const sizeMap = {
    sm: "w-8 h-8 text-sm",
    md: "w-12 h-12 text-lg",
    lg: "w-16 h-16 text-2xl",
  };

  return (
    <div
      className={cn(
        "rounded-full text-white flex items-center justify-center font-semibold overflow-hidden bg-cover bg-center",
        sizeMap[size],
        backgroundColor
      )}
      style={src ? { backgroundImage: `url(${src})` } : {}}
    >
      {!src && initials}
    </div>
  );
};

export default Avatar;
