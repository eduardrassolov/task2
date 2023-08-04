import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { IActions } from "../../../pages/MainPage";
import { memo } from "react";
import TableCell from "./TableCell";

interface ITableProps {
  id?: string;
  data: Array<string>;
  actions?: IActions;
  isArchived?: boolean;
  iconNote: string;
}

const TableRow = memo(function ({
  id,
  actions,
  data,
  isArchived,
  iconNote,
}: ITableProps) {
  return (
    <tr className="hover:bg-[#9DB2BF] transition-colors duration-200">
      {data.map((item: string, index: number) => (
        <TableCell
          key={crypto.randomUUID()}
          item={item}
          iconNote={iconNote}
          currIndex={index}
        />
      ))}

      {id && actions ? (
        <>
          <td>
            <div className="flex justify-between">
              <button
                className="hover:scale-[1.1]"
                onClick={() => actions.edit(id)}
              >
                <PencilSquareIcon className="w-6" />
              </button>
              <button
                onClick={() => actions.archive(id)}
                className="hover:scale-[1.1]"
              >
                {isArchived ? (
                  <ArchiveBoxXMarkIcon className="w-6" />
                ) : (
                  <ArchiveBoxArrowDownIcon className="w-6" />
                )}
              </button>
              <button
                onClick={() => actions.delete(id)}
                className="hover:scale-[1.1]"
              >
                <TrashIcon className="w-6" />
              </button>
            </div>
          </td>
        </>
      ) : (
        ""
      )}
    </tr>
  );
});

export default TableRow;
