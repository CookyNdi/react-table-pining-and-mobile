"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { type Mutations } from "./data";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const columns: ColumnDef<Mutations>[] = [
  {
    accessorKey: "id",
    header: "id",
  },
  {
    accessorKey: "partner_id",
    header: "Partner",
  },
  {
    accessorKey: "trx_id",
    header: "Trx Id",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
  {
    accessorKey: "beginning_balance",
    header: "Beginning Balance",
  },
  {
    accessorKey: "ending_balance",
    header: "Ending Balance",
  },
  {
    accessorKey: "created_at",
    header: "Date",
  },
];
