import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { INote } from "../../../interfaces/INote";
import { getCategoryName } from "../../../services/getCategoryName";
import { parseDate } from "../../../services/parseDates";
import store from "../../../redux/store";
import { generateDate } from "../../../services/generateDate";
import { formatCreate } from "../../../config/timeFormat";
import { useDispatch } from "react-redux";
import {
  archiveNoteById,
  deleteNoteById,
} from "../../../features/notes/notesSlice";

export default function TableRow(note: INote) {
  const { id, name, created, category, content } = note;

  const noteArr = [
    name,
    generateDate(new Date(created), formatCreate),
    getCategoryName(category),
    content,
    parseDate(content),
  ];

  const dispatch = useDispatch();

  const handleDelete = (id: string) => dispatch(deleteNoteById(id));
  const handleArchive = (id: string) => dispatch(archiveNoteById(id));

  console.log(store.getState());

  return (
    <tr>
      {noteArr.map((item) => {
        return (
          <td key={crypto.randomUUID()} className="px-5 py-3">
            <p className="overflow-scroll">{item}</p>
          </td>
        );
      })}
      <td>
        <div className="flex justify-between">
          <button className="hover:scale-[1.1]">
            <PencilSquareIcon className="w-6" />
          </button>
          <button
            onClick={() => handleArchive(id)}
            className="hover:scale-[1.1]"
          >
            {note.isArchived ? (
              <ArchiveBoxXMarkIcon className="w-6" />
            ) : (
              <ArchiveBoxArrowDownIcon className="w-6" />
            )}
          </button>
          <button
            onClick={() => handleDelete(id)}
            className="hover:scale-[1.1]"
          >
            <TrashIcon className="w-6" />
          </button>
        </div>
      </td>
    </tr>
  );
}
