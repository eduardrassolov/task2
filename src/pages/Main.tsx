import Table from "../features/notes/table/Table";
import TableHeader from "../features/notes/table/TableHeader";
import { headers, statsHeaders } from "../config/tableHeaders";
import Modal from "../features/modal/modal/Modal";
import { Button } from "../components/Button";
import { IRootState } from "../redux/store";
import { useDispatch, useSelector } from "react-redux";

import TableBody from "../features/notes/table/TableBody";

import TableRow1 from "../features/notes/table/TableRow1";
import { generateDate } from "../services/generateDate";
import { formatCreate } from "../config/timeFormat";
import { parseDate } from "../services/parseDates";
import { getCategoryName } from "../config/noteCategories";
import { generateStats } from "../services/calcStats";
import { openCreateModal, openEditModal } from "../features/modal/modalActions";
import {
  archiveNoteById,
  deleteNoteById,
} from "../features/notes/tableActions";

export interface IActions {
  delete: (id: string) => void;
  archive: (id: string) => void;
  edit: (id: string) => void;
}

export default function Main() {
  const isModalOpen = useSelector((store: IRootState) => store.modal);
  const dispatch = useDispatch();

  const handleDelete = (id: string) => dispatch(deleteNoteById(id));
  const handleArchive = (id: string) => dispatch(archiveNoteById(id));
  const handleEdit = (id: string) => dispatch(openEditModal(id));
  const actions: IActions = {
    delete: handleDelete,
    archive: handleArchive,
    edit: handleEdit,
  };

  const handleOpenModal = () => dispatch(openCreateModal());

  const notes = useSelector((store: IRootState) => store.notes);
  const stats: Array<string[]> = generateStats(notes);

  return (
    <>
      <main className="w-screen h-screen py-5 overflow-scroll">
        <div className="w-[1300px] mx-auto">
          {isModalOpen.isOpen ? <Modal /> : ""}

          <Button onClick={handleOpenModal} variant="primary">
            Add new Task
          </Button>

          <Table>
            <TableHeader headers={headers} />
            <TableBody>
              {notes.map((note) => (
                <TableRow1
                  key={note.id}
                  id={note.id}
                  data={[
                    note.name,
                    generateDate(new Date(note.created), formatCreate),
                    getCategoryName(note.category),
                    note.content,
                    parseDate(note.content),
                  ]}
                  isArchived={note.isArchived}
                  actions={actions}
                />
              ))}
            </TableBody>
          </Table>

          <Table>
            <TableHeader headers={statsHeaders} isMainTable={false} />
            <TableBody>
              {stats.map((stat) => (
                <TableRow1 key={stat[0]} data={stat} />
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
