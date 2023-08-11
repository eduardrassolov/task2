import React from "react";
import {
  ArchiveBoxArrowDownIcon,
  TrashIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { archiveAllNotes, deleteAllNotes } from "../tableActions";

type TableHeaderProps = {
  headers: Array<string>;
  showActionsBtn?: boolean;
};
const TableHeader = memo(function TableHeader({ headers, showActionsBtn = true }: TableHeaderProps) {
  const [toggleArchive, setToggle] = useState(true);

  const dispatch = useDispatch();
  const handleDeleteAll = () => dispatch(deleteAllNotes());
  const handleArchiveAll = () => {
    setToggle((prev) => !prev);
    dispatch(archiveAllNotes(toggleArchive));
  };

  return (
    <thead className="bg-[#9DB2BF] text-[#27374D] text-xl font-semibold whitespace-nowrap text-left">
      <tr>
        {headers.map((header, index) => (
          <th key={header + index} className="px-5 py-3">
            {header}
          </th>
        ))}

        {showActionsBtn ?
          (
            <th className="py-3 w-[75px]">
              <div className="flex justify-between">
                <button>
                  <ArchiveBoxArrowDownIcon className="w-6 opacity-0 cursor-auto" />
                </button>
                <button onClick={handleArchiveAll} className="hover:scale-[1.1]">
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
          ) : (
            ""
          )}
      </tr>
    </thead>
  );
});

export default TableHeader;
