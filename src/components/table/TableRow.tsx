import {
  ArchiveBoxArrowDownIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { INote } from "../../interfaces/INote";
import { getCategoryName } from "../../services/getCategoryName";
import { parseDate } from "../../services/parseDates";

export default function TableRow(note: INote) {
  const { name, created, category, content } = note;
  const noteArr = [
    name,
    created,
    getCategoryName(category),
    content,
    parseDate(content),
  ];

  return (
    <tr className="overflow-hidden">
      {noteArr.map((item) => {
        return (
          <td key={crypto.randomUUID()} className="px-5 py-3">
            <p>{item}</p>
          </td>
        );
      })}
      <td>
        <div className="flex justify-between">
          <button>
            <PencilSquareIcon className="w-6" />
          </button>{" "}
          <button>
            <ArchiveBoxArrowDownIcon className="w-6" />
          </button>
          <button>
            <TrashIcon className="w-6" />
          </button>
        </div>
      </td>
    </tr>
  );
}
