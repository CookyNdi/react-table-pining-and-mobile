"use client";

import {
  type Column,
  type ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ChevronDown } from "lucide-react";
import { useState, type CSSProperties } from "react";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pinnedColumns?: {
    left?: string[];
    right?: string[];
  };
}

const getCommonPinningStyles = <TData, TValue>(
  column: Column<TData, TValue>,
): CSSProperties => {
  const isPinned = column.getIsPinned();
  // const isLastLeftPinnedColumn =
  //   isPinned === "left" && column.getIsLastColumn("left");
  // const isFirstRightPinnedColumn =
  //   isPinned === "right" && column.getIsFirstColumn("right");

  return {
    // boxShadow: isLastLeftPinnedColumn
    //   ? "-4px 0 4px -4px gray inset"
    //   : isFirstRightPinnedColumn
    //     ? "4px 0 4px -4px gray inset"
    //     : undefined,
    left: isPinned === "left" ? `${column.getStart("left")}px` : undefined,
    right: isPinned === "right" ? `${column.getAfter("right")}px` : undefined,
    position: isPinned ? "sticky" : "relative",
    width: column.getSize(),
    zIndex: isPinned ? 1 : 0,
  };
};

const addingShadowToPinningTable = <TData, TValue>(
  column: Column<TData, TValue>,
): string => {
  const isPinned = column.getIsPinned();
  const isLastLeftPinnedColumn =
    isPinned === "left" && column.getIsLastColumn?.("left");
  const isFirstRightPinnedColumn =
    isPinned === "right" && column.getIsFirstColumn?.("right");

  return isLastLeftPinnedColumn
    ? "shadow-gradient-right md:sticky md:right-0"
    : isFirstRightPinnedColumn
      ? "shadow-gradient-left md:sticky md:right-0"
      : "";
};

export function DataTable<TData, TValue>({
  columns,
  data,
  pinnedColumns = { left: [], right: [] },
}: DataTableProps<TData, TValue>) {
  const [expandedRows, setExpandedRows] = useState<Record<string, boolean>>({});

  const toggleRow = (rowId: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [rowId]: !prev[rowId],
    }));
  };

  const table = useReactTable({
    data,
    columns,
    state: {
      columnPinning: {
        left: pinnedColumns.left ?? [],
        right: pinnedColumns.right ?? [],
      },
    },
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    columnResizeMode: "onChange",
  });

  return (
    <div className="p-2">
      <div className="table-container hidden md:block">
        <table
          style={{
            width: table.getTotalSize(),
          }}
          className="react-table-table"
        >
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  const { column } = header;

                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      style={{ ...getCommonPinningStyles(column) }}
                      className={`react-table-th group ${addingShadowToPinningTable(column)}`}
                    >
                      <div>
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                      </div>
                      <div
                        {...{
                          onDoubleClick: () => header.column.resetSize(),
                          onMouseDown: header.getResizeHandler(),
                          onTouchStart: header.getResizeHandler(),
                          className: `resizer hidden group-hover:block ${
                            header.column.getIsResizing() ? "isResizing" : ""
                          }`,
                        }}
                      />
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  const { column } = cell;
                  return (
                    <td
                      key={cell.id}
                      style={{ ...getCommonPinningStyles(column) }}
                      className={`react-table-td ${addingShadowToPinningTable(column)}`}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 gap-4 md:hidden">
        {/* Mobile Header */}
        {data.length > 0 && (
          <div className="b1-medium text-body-2-regular bg-general-50 relative flex items-center gap-2 px-4 py-3 text-[#21304F]">
            {/* Use the first visible column's header */}
            {table.getAllColumns()[0]?.columnDef?.header
              ? flexRender(
                  table.getAllColumns()[0]?.columnDef.header,
                  {} as never, // No context needed for static headers
                )
              : null}
          </div>
        )}

        {/* Mobile Rows */}
        {data.length > 0 ? (
          table.getRowModel().rows.map((row) => (
            <div key={row.id} className="rounded-md border bg-white p-2">
              {/* First Column as Row Header */}
              <div
                className="flex cursor-pointer items-center justify-between"
                onClick={() => toggleRow(row.id)}
              >
                <div className="text-body-2-regular flex items-center gap-2">
                  {row.getVisibleCells()[0]?.column.columnDef.cell
                    ? (() => {
                        const cell = row.getVisibleCells()[0];
                        return cell
                          ? flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          : null;
                      })()
                    : null}
                </div>
                <div className="rounded-md border">
                  <ChevronDown
                    className={`fill-general-300 transition-all duration-300 ${
                      expandedRows[row.id] ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </div>

              {/* Expanded Content */}
              <div
                className={`overflow-hidden transition-all ${
                  expandedRows[row.id] ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                {row
                  .getVisibleCells()
                  .slice(1) // Skip the first column for additional details
                  .map((cell) => (
                    <div
                      key={cell.id}
                      className="text-body-2-regular flex items-center justify-between border-b py-2 last:border-0"
                    >
                      {/* Render Cell Header */}
                      <div className="font-medium text-gray-900">
                        {cell.column.columnDef.header
                          ? flexRender(
                              cell.column.columnDef.header,
                              {} as never,
                            )
                          : null}
                      </div>

                      {/* Render Cell Value */}
                      <div className="text-gray-700">
                        {cell.column.columnDef.cell
                          ? flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )
                          : null}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))
        ) : (
          <div className="py-6 text-center font-medium">
            {true ? "Loading..." : "No data found"}
          </div>
        )}
      </div>
    </div>
  );
}
