import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { IActions } from "../../../pages/Main";

interface ITableProps {
  id?: string;
  data: Array<string>;
  actions?: IActions;
  isArchived?: boolean;
  iconNote: string;
}

export default function TableRow({
  id,
  actions,
  data,
  isArchived,
  iconNote,
}: ITableProps) {
  return (
    <tr>
      {data.map((item: string, currCell: number) => {
        return (
          <td key={crypto.randomUUID()} className="px-5 py-2">
            <div className="flex items-center ">
              {currCell === 0 ? (
                <img src={iconNote} className="w-8 h-8 mr-2" />
              ) : (
                ""
              )}
              <p className="overflow-scroll">{item}</p>
            </div>
          </td>
        );
      })}

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
}
