/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  ArchiveBoxArrowDownIcon,
  TrashIcon,
  ArchiveBoxXMarkIcon,
} from "@heroicons/react/24/solid";
import { IHeaders } from "../../../interfaces/IHeaders";
import { memo, useState } from "react";
import { useDispatch } from "react-redux";
import { archiveAllNotes, deleteAllNotes } from "../tableActions";

type TableHeaderProps = {
  headers: Array<IHeaders>;
  isMainTable?: boolean;
};
const TableHeader = memo(function ({
  headers,
  isMainTable = true,
}: TableHeaderProps) {
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
        {headers.map((header) => (
          <th key={header.name} className={"px-5 py-3  " + header.colSize}>
            {header.name}
          </th>
        ))}

        {isMainTable ? (
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
