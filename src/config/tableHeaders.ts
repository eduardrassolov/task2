import { IHeaders } from "../interfaces/IHeaders";

export const headers: Array<IHeaders> = [
  {
    name: "Name",
    colSize: "w-auto",
  },
  {
    name: "Created",
    colSize: "w-auto",
  },
  {
    name: "Category",
    colSize: "w-auto",
  },
  {
    name: "Content",
    colSize: "w-auto",
  },
  {
    name: "Dates",
    colSize: "w-auto",
  },
];

export const statsHeaders: Array<IHeaders> = [
  { name: "Category", colSize: "w-[300px]" },
  { name: "Archived", colSize: "w-[200px]" },
  { name: "Active", colSize: "w-[200px]" },
];
