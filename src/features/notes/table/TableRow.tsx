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
}

export default function TableRow1({
  id,
  data,
  actions,
  isArchived,
}: ITableProps) {
  return (
    <tr>
      {data.map((item: string) => {
        return (
          <td key={crypto.randomUUID()} className="px-5 py-2">
            <p className="overflow-scroll">{item}</p>
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
