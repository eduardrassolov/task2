import React, { ReactNode } from "react";
import { INote } from "../../../interfaces/INote";

interface ITableBody {
  children: ReactNode;

}

export default function TableBody({ children }: ITableBody) {
  return <tbody>{children}</tbody>;
}
