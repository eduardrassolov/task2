import { useState } from "react";
import { Button } from "../../../components/Button";
import Overlay from "./Overlay";
import { generateNote } from "../../../services/generateNote";
import { categories } from "../../../config/noteCategories";
import { useDispatch, useSelector } from "react-redux";

import { INewNote } from "../../../interfaces/INewNote";
import { IRootState } from "../../../redux/store";
import { closeModal } from "../modalActions";
import { createNote, updateNote } from "../../notes/tableActions";
import Input from "./Input";
import Content from "./Content";
import Footer from "./Footer";
import Select from "./Select";

const defaultNote: INewNote = {
  name: "",
  content: "",
  category: categories[0].key,
};

/**
 * Component of Modal window for creating and editing notes
 * @returns Modal component
 */
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

    if (selectedId) {
      distpatch(updateNote(selectedId, { ...note }));
    } else {
      if (
        !note.name ||
        !note.content ||
        !note.name.trim() ||
        !note.content.trim()
      )
        return alert("Please fill all fields");

      const newNote = generateNote(note);
      distpatch(createNote(newNote));
    }
    handleClose();
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
          <Select category={note.category} onChange={handleChange} />
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
