import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "../../../redux/store.ts";

import { INewNote } from "../../../interfaces/INewNote.ts";
import { closeModal } from "../modalActions.ts";
import { createNote, updateNote } from "../../notes/tableActions.ts";

import { Button } from "../../../components/Button.tsx";
import Overlay from "./Overlay.tsx";
import Input from "./Input.tsx";
import Content from "./Content.tsx";
import Footer from "./Footer.tsx";
import Select from "./Select.tsx";

import { categoriesNotes } from "../../../config/noteConfig.ts";
import { generateNote } from "../../../services/generateNote.ts";

const defaultNote: INewNote = {
  name: "",
  content: "",
  category: categoriesNotes[0].key,
};

function Modal() {
  const distpatch = useDispatch();
  const selectedId = useSelector((state: IRootState) => state.modal.noteId);
  const initialState = useSelector((state: IRootState): INewNote => {
    const foundeNote = state.notes.find((note) =>
      note.id === selectedId
        ? {
            name: note.name,
            content: note.content,
            categories: note.category,
          }
        : ""
    );
    return foundeNote || defaultNote;
  });

  const [note, setNote] = useState<INewNote>({ ...initialState });

  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    const { name, value } = event.currentTarget;
    setNote((prev) => ({ ...prev, [name]: value }));
  };
  const handleClose = () => {
    cleanForm();
    distpatch(closeModal());
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    try {
      if (selectedId) {
        distpatch(updateNote(selectedId, { ...note }));
      } else {
        if (
          !note.name ||
          !note.content ||
          !note.name.trim() ||
          !note.content.trim()
        )
          throw new Error("Please fill all fields");

        const newNote = generateNote(note);
        distpatch(createNote(newNote));
      }
      handleClose();
    } catch (er) {
      er instanceof Error ? alert(er.message) : alert("Something went wrong");
    }
  };
  const cleanForm = () => setNote(() => defaultNote);

  return (
    <>
      <Overlay />

      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 px-5 py-8 bg-white w-[400px] ">
        <form onSubmit={handleSubmit}>
          <h2 className="text-2xl font-semibold mb-8">
            {!selectedId ? "New note:" : "Edit note:"}
          </h2>
          <Input name={note.name} onChange={handleChange} />
          <Content content={note.content} onChange={handleChange} />
          <Select
            selected={note.category}
            options={categoriesNotes}
            onChange={handleChange}
          >
            <label htmlFor="category" className="w-1/3 mb-1">
              Category:
            </label>
          </Select>
          <Footer onClose={handleClose}>
            <Button type="submit" variant="primary">
              {!selectedId ? "Add" : "Save"}
            </Button>
          </Footer>
        </form>
      </div>
    </>
  );
}

export default Modal;
