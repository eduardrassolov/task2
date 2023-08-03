import { ArchiveBoxArrowDownIcon, TrashIcon } from "@heroicons/react/24/solid";
import { IHeaders } from "../../../interfaces/IHeaders";
import store from "../../../redux/store";

type TableHeaderProps = {
  headers: Array<IHeaders>;
};

export default function TableHeader({ headers }: TableHeaderProps) {
  const handleDeleteAll = () =>
    store.dispatch({ type: "notes/deleteAllNotes" });

  return (
    <thead className="bg-gray-300 text-xl font-semibold text-left">
      <tr>
        {headers.map((header) => (
          <th key={header.name} className={"px-5 py-3 " + header.colSize}>
            {header.name}
          </th>
        ))}
        <th className="py-3 w-[75px]">
          <div className="flex justify-between">
            <button>
              <ArchiveBoxArrowDownIcon className="w-6 opacity-0 cursor-auto" />
            </button>
            <button>
              <ArchiveBoxArrowDownIcon className="w-6" />
            </button>
            <button onClick={handleDeleteAll}>
              <TrashIcon className="w-6" />
            </button>
          </div>
        </th>
      </tr>
    </thead>
  );
}
