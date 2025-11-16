import React, { ReactNode } from "react";
import { cn } from "../utils";

export interface TableColumn {
  key: string;
  header: string;
  render?: (value: any, row: any) => ReactNode;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  striped?: boolean;
}

const Table = ({ columns, data, striped = false }: TableProps) => (
  <table className="w-full border-collapse rounded-lg overflow-hidden border border-beige">
    <thead>
      <tr className="bg-light">
        {columns.map((col) => (
          <th key={col.key} className="p-4 text-left font-semibold text-dark">
            {col.header}
          </th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((row, rowIndex) => (
        <tr
          key={rowIndex}
          className={cn(
            "transition-colors hover:bg-light",
            striped && rowIndex % 2 === 1 && "bg-light"
          )}
        >
          {columns.map((col) => (
            <td key={col.key} className="p-4 border-t border-beige text-dark">
              {col.render ? col.render(row[col.key], row) : row[col.key]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
