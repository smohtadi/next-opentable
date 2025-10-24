"use client";
import React, { useMemo, useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  flexRender,
  ColumnDef,
  ColumnFiltersState,
  VisibilityState,
  RowSelectionState,
  Updater,
} from "@tanstack/react-table";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Button from "@/components/ui/button/button";
import Checkbox from "@/components/ui/form/checkbox";
import styles from "@/components/ui/table/styles.module.css";

interface DataTableProps<TData> {
  columns: ColumnDef<TData>[];
  data: TData[];
  enableRowSelection?: boolean;
  page?: number;
  pageSize?: number;
  selected?: string[];
  totalElements?: number;
  getRowId?: (row: TData) => string;
  onUpdatePage?: (page: number) => void;
  onUpdateSelect?: (selected: string[]) => void;
}

export default function DataTable<TData>({
  columns,
  data,
  enableRowSelection = true,
  page = 1,
  pageSize = 10,
  selected,
  totalElements,
  getRowId,
  onUpdateSelect,
  onUpdatePage,
}: DataTableProps<TData>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});

  const rowSelection = useMemo(() => {
    if (!Array.isArray(selected) || selected.length === 0 || !getRowId)
      return {};
    const selection: RowSelectionState = {};
    for (const item of data) {
      const key = getRowId(item);
      if (selected.findIndex((e) => e === key) === -1) continue;
      selection[getRowId(item)] = true;
    }
    return selection;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data, selected]);

  const handleRowSelectionChange = (updater: Updater<RowSelectionState>) => {
    const newSelection =
      typeof updater === "function" ? updater(rowSelection) : updater;
    if (newSelection === undefined) return;
    const selectedRows = Object.keys(newSelection)
      .filter((key) => newSelection[key] === true)
      .map((key) => key);
    onUpdateSelect?.(selectedRows);
  };
  const tableColumns = React.useMemo(() => {
    if (!enableRowSelection) return columns;
    const selectionColumn: ColumnDef<TData> = {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onChange={(e) => table.toggleAllPageRowsSelected(e.target.checked)}
          aria-label="Select all rows"
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onChange={(e) => row.toggleSelected(e.target.checked)}
          aria-label={`Select row ${row.index + 1}`}
        />
      ),
      enableSorting: false,
      enableHiding: false,
      size: 50,
    };
    return [selectionColumn, ...columns];
  }, [columns, enableRowSelection]);

  const table = useReactTable({
    data,
    columns: tableColumns,
    getRowId: getRowId,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: handleRowSelectionChange,
    enableMultiRowSelection: enableRowSelection,
    state: {
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    initialState: {
      pagination: {
        pageSize,
      },
    },
  });
  if (table.getRowModel().rows?.length === 0) {
    return <div className={styles.noResults}>No data</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead className={styles.thead}>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    data-column-id={header.id}
                    className={styles.th}
                  >
                    <div className={styles.headerContent}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className={styles.tbody}>
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className={`${styles.row} ${
                  row.getIsSelected() ? styles.selectedRow : ""
                }`}
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className={styles.td}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination
        page={page}
        pageSize={pageSize}
        totalElements={totalElements}
        onUpdate={onUpdatePage}
      />
    </div>
  );
}

interface PaginationProps {
  page: number | undefined;
  pageSize: number | undefined;
  totalElements: number | undefined;
  onUpdate: ((page: number) => void) | undefined;
}

function Pagination({
  page,
  pageSize,
  totalElements,
  onUpdate,
}: PaginationProps) {
  if (!page || !pageSize || !totalElements || !onUpdate) return null;
  return (
    <div className={styles.pagination}>
      <div className={styles.paginationControls}>
        <Button
          variant="secondary"
          onClick={() => onUpdate(page - 1)}
          disabled={page === 1}
        >
          <ChevronLeft /> Previous
        </Button>
        <Button
          variant="secondary"
          onClick={() => onUpdate(page + 1)}
          disabled={Math.ceil(totalElements / pageSize) >= page}
        >
          Next <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
