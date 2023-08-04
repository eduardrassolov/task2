import Table from "../features/notes/table/Table";
import TableHeader from "../features/notes/table/TableHeader";
import { headers, statsHeaders } from "../config/tableHeaders";
import Modal from "../features/modal/modal/Modal";
import { Button } from "../components/Button";
import { useDispatch, useSelector } from "react-redux";

import TableBody from "../features/notes/table/TableBody";

import TableRow from "../features/notes/table/TableRow";
import { generateDate } from "../services/generateDate";
import { formatCreate } from "../config/timeFormat";
import { parseDate } from "../services/parseDates";
import {
  categoriesNotes,
  filterNotes,
  getCategoryName,
} from "../config/noteCategories";
import { generateStats } from "../services/calcStats";
import { openCreateModal, openEditModal } from "../features/modal/modalActions";
import {
  archiveNoteById,
  deleteNoteById,
} from "../features/notes/tableActions";
import Header from "../components/Header";
import Select from "../features/modal/modal/Select";
import { useState } from "react";
import { IRootState } from "../redux/store";
import { generateIcons } from "../services/generateIcons";

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
  const [currentFilter, setFilter] = useState<string>(filterNotes[0].key);
  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(() => e.target.value);
  };

  const filteredNotes = useSelector((store: IRootState) =>
    store.notes.filter((note) => {
      if (currentFilter === "active") return !note.isArchived;
      else if (currentFilter === "archived") return note.isArchived;
      return true;
    })
  );
  const stats: Array<string[]> = generateStats(
    useSelector((store: IRootState) => store.notes)
  );

  const iconsPahts: string[] = generateIcons(filteredNotes);
  return (
    <>
      <main className="w-screen h-screen py-5 overflow-scroll">
        <div className="w-[1200px] mx-auto">
          {isModalOpen.isOpen ? <Modal /> : ""}

          <Header>Current notes: </Header>

          <div className="flex">
            <Select
              selected={currentFilter}
              options={filterNotes}
              onChange={handleFilterChange}
            />{" "}
          </div>

          <Table>
            <TableHeader headers={headers} />
            <TableBody>
              {filteredNotes.map((note, index) => (
                <TableRow
                  key={note.id}
                  id={note.id}
                  data={[
                    note.name,
                    generateDate(new Date(note.created), formatCreate),
                    getCategoryName(categoriesNotes, note.category),
                    note.content,
                    parseDate(note.content),
                  ]}
                  iconNote={iconsPahts[index]}
                  isArchived={note.isArchived}
                  actions={actions}
                />
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-end my-5">
            <Button onClick={handleOpenModal} variant="primary">
              Add new note
            </Button>
          </div>

          <Header>Summary: </Header>

          <Table>
            <TableHeader headers={statsHeaders} isMainTable={false} />
            <TableBody>
              {stats.map((stat, index) => {
                return (
                  <TableRow
                    key={stat[0]}
                    data={stat}
                    iconNote={`${categoriesNotes[index].key}.png`}
                  />
                );
              })}
            </TableBody>
          </Table>
        </div>
      </main>
    </>
  );
}
