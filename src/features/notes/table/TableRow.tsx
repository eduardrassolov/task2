import {
  ArchiveBoxArrowDownIcon,
  ArchiveBoxXMarkIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { INote } from "../../../interfaces/INote";
import { parseDate } from "../../../services/parseDates";
import { generateDate } from "../../../services/generateDate";
import { formatCreate } from "../../../config/timeFormat";
import { useDispatch } from "react-redux";
import { archiveNoteById, deleteNoteById } from "../notesSlice";
import { openEditModal } from "../../modal/modalSlice";
import { getCategoryName } from "../../../config/noteCategories";

export default function TableRow(note: INote) {
  const { id, name, created, category, content } = note;

  const noteArr = [
    name,
    generateDate(new Date(created), formatCreate),
    getCategoryName(category),
    content,
    parseDate(content),
  ];

  console.log(note);
  // const modal = useSelector((store: IRootState) => store.modal);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => dispatch(deleteNoteById(id));
  const handleArchive = (id: string) => dispatch(archiveNoteById(id));
  const handleEdit = (id: string) => {
    dispatch(openEditModal(id));
  };

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
          <button className="hover:scale-[1.1]" onClick={() => handleEdit(id)}>
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
