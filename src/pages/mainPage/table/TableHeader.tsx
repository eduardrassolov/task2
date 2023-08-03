import {
  ArchiveBoxArrowDownIcon,
  TrashIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";
import { IHeaders } from "../../../interfaces/IHeaders";
import store from "../../../redux/store";
import { useState } from "react";

type TableHeaderProps = {
  headers: Array<IHeaders>;
};

export default function TableHeader({ headers }: TableHeaderProps) {
  const [toggleArchive, setToggle] = useState(true);

  const handleDeleteAll = () =>
    store.dispatch({ type: "notes/deleteAllNotes" });
  const handleArhiveAll = () => {
    setToggle((prev) => !prev);

    console.log(toggleArchive);
    store.dispatch({
      type: "notes/archiveAllNotes",
      payload: toggleArchive,
    });
  };

  console.log(store.getState());
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
            <button onClick={handleArhiveAll} className="hover:scale-[1.1]">
              {toggleArchive ? (
                <ArchiveBoxArrowDownIcon className="w-6" />
              ) : (
                <ArchiveBoxXMarkIcon className="w-6" />
              )}
            </button>
            <button onClick={handleDeleteAll} className="hover:scale-[1.1]">
              <TrashIcon className="w-6" />
            </button>
          </div>
        </th>
      </tr>
    </thead>
  );
}
