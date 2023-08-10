import React, { memo } from "react";

type TableCellProps = {
  item: string;
  iconNote: string;
  currIndex: number;
};

const TableCell = memo(function TableCell({
  item,
  iconNote,
  currIndex,
}: TableCellProps) {
  return (
    <td className="px-5 py-2">
      <div className="flex items-center ">
        {currIndex === 0 ? <img src={iconNote} className="w-8 h-8 mr-2" /> : ""}
        <p>{item}</p>
      </div>
    </td>
  );
});

export default TableCell;
