import { useState } from "react";
import { Button } from "../../../components/Button";
import Overlay from "./Overlay";
import { generateNote } from "../../../services/generateNote";
import { INote } from "../../../interfaces/INote";
import store from "../../../redux/store";
import { categories } from "../../../config/noteCategories";

interface INewNote {
  name: string;
  content: string;
  category: string;
}
const defaultNote: INewNote = {
  name: "",
  content: "",
  category: "idea",
};

interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

function Modal({ isOpen = false, onClose }: IModalProps) {
  const [note, setNote] = useState({ ...defaultNote });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setNote((prev) => ({ ...prev, [name]: value }));
  };
  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.currentTarget;
    setNote((prev) => ({ ...prev, category: value }));
  };
  const handleClose = () => {
    cleanForm();
    onClose();
  };
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!note.name.trim() || !note.content.trim())
      return alert("Please fill all fields");

    const newNote: INote = {
      ...note,
      ...generateNote(),
      isArchived: false,
    };

    store.dispatch({ type: "notes/createNote", payload: { ...newNote } });

    handleClose();
  };

  const cleanForm = () => setNote(() => defaultNote);
  return (
    <>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <Overlay />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 px-5 py-8 bg-white w-[400px] ">
          <form onSubmit={handleSubmit}>
            <h2 className="text-2xl font-semibold mb-8">New task</h2>
            <div className="flex flex-col mb-4">
              <label htmlFor="name" className="w-1/3 mb-1">
                Name:
              </label>
              <input
                name="name"
                id="name"
                autoFocus
                placeholder="Enter name"
                required
                className="text-base py-1 px-2 rounded-md border h-11 border-gray-400"
                value={note.name}
                onInput={handleChange}
              />
            </div>

            <div className="flex flex-col  mb-4">
              <label htmlFor="content" className="w-1/3 mb-1">
                Content:
              </label>
              <textarea
                name="content"
                placeholder="Enter content"
                required
                cols={5}
                rows={5}
                className="border border-gray-400 py-1 px-2"
                value={note.content}
                onInput={handleChange}
              />
            </div>

            <div className="flex flex-col mb-6">
              <label htmlFor="category" className="w-1/3 mb-1">
                Category:
              </label>
              <select
                name="category"
                className="border border-gray-400 text-base py-1 px-2 h-11 rounded-md"
                onChange={handleSelect}
              >
                {categories.map(({ key, value }) => (
                  <option key={key} value={key}>
                    {value}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex justify-end">
              <div className="mx-2">
                <Button type="submit" variant="primary">
                  Add
                </Button>
              </div>
              <Button onClick={handleClose}>Cancel</Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Modal;
