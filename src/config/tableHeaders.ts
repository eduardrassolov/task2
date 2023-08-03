import { IHeaders } from "../interfaces/IHeaders";

export const headers: Array<IHeaders> = [
  {
    name: "Name",
    colSize: "w-[150px]",
  },
  {
    name: "Created",
    colSize: "w-[200px]",
  },
  {
    name: "Category",
    colSize: "w-[200px]",
  },
  {
    name: "Content",
    colSize: "w-[400px]",
  },
  {
    name: "Dates",
    colSize: "w-[200px]",
  },
];

export const statsHeaders: Array<IHeaders> = [
  { name: "Category", colSize: "w-[300px]" },
  { name: "Archived", colSize: "w-[200px]" },
  { name: "Active", colSize: "w-[200px]" },
];
