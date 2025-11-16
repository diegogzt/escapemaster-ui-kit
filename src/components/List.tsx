import React, { ReactNode } from "react";
import { cn } from "../utils";

export interface ListProps {
  items: ReactNode[];
  striped?: boolean;
  ordered?: boolean;
}

const List = ({ items, striped = false, ordered = false }: ListProps) => {
  const Component = ordered ? "ol" : "ul";

  return (
    <Component className="list-none p-0">
      {items.map((item, index) => (
        <li
          key={index}
          className={cn(
            "py-3 px-0 border-b border-beige text-dark",
            striped && index % 2 === 0 && "bg-light rounded px-4",
            ordered && "list-decimal"
          )}
        >
          {item}
        </li>
      ))}
    </Component>
  );
};

export default List;
