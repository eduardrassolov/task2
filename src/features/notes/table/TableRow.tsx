import { memo } from "react";
import TableCell from "./TableCell";
import React from "react";
import { IActions } from "../../../pages/MainPage";

interface ITableProps {
  data: Array<string>;
  iconNote: string;
  isOdd?: boolean;
  children?: React.ReactNode;
  Component?: React.FC<IActions> | undefined

}

const TableRow = memo(function TableRow({ data, iconNote, isOdd, children }: ITableProps) {


  const styles = `hover:bg-gray-300 border-b-2 ${!isOdd ? 'bg-gray-50' : 'bg-gray-200'} transition-colors duration-200`
  return (
    <tr className={styles}>
      {data.map((item: string, index: number) => (
        <TableCell
          key={crypto.randomUUID()}
          item={item}
          iconNote={iconNote}
          currIndex={index}
        />
      ))}

      {children}

    </tr>
  );
});

export default TableRow;
