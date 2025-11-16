import React, { useState, ReactNode } from "react";
import { cn } from "../utils";

export interface TabItem {
  id: string;
  label: string;
  content: ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultActiveId?: string;
  onChange?: (activeId: string) => void;
}

const Tabs = ({ items, defaultActiveId, onChange }: TabsProps) => {
  const [activeId, setActiveId] = useState(defaultActiveId || items[0]?.id);

  const handleTabChange = (id: string) => {
    setActiveId(id);
    onChange?.(id);
  };

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div>
      <div className="flex gap-2 border-b-2 border-beige mb-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => handleTabChange(item.id)}
            className={cn(
              "px-6 py-3 bg-transparent border-none cursor-pointer font-semibold transition-all -mb-0.5",
              activeId === item.id
                ? "text-primary border-b-2 border-primary"
                : "text-dark border-b-2 border-transparent"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div>{activeItem?.content}</div>
    </div>
  );
};

export default Tabs;
