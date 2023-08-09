import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { IRootState } from "../redux/store";
import {
  archiveNoteById,
  deleteNoteById,
} from "../features/notes/tableActions";
import { openCreateModal, openEditModal } from "../features/modal/modalActions";

import Table from "../features/notes/table/Table.tsx";
import TableHeader from "../features/notes/table/TableHeader.tsx";
import TableBody from "../features/notes/table/TableBody.tsx";
import TableRow from "../features/notes/table/TableRow";
import Modal from "../features/modal/modal/Modal.tsx";
import Select from "../features/modal/modal/Select";
import Header from "../components/Header";
import { Button } from "../components/Button.tsx";

import { generateDate } from "../services/generateDate";
import { parseDate } from "../services/parseDates";
import { generateStats } from "../services/calcStats";
import { generateIcons } from "../services/generateIcons";
import { headers, statsHeaders } from "../config/tableHeaders.ts";
import { formatCreate } from "../config/timeFormat";
import {
  categoriesNotes,
  filterNotes,
  getCategoryName,
} from "../config/noteConfig";

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

  const iconsPahts: string[] = useMemo(
    () => generateIcons(filteredNotes),
    [filteredNotes]
  );
  return (
    <>
      <main className="w-screen h-screen md:px-2 md:py-5 pt-5 pb-3 px-1 overflow-scroll">
        <div className="mx-0 lg:mx-20">
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
                  isOdd={index % 2 === 0}
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
                    isOdd={index % 2 === 0}
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
