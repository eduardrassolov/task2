import { useState } from "react";
import { Button } from "../../../components/Button";
import Overlay from "./Overlay";

interface IModalProps {
  isOpen?: boolean;
  onClose: () => void;
}

interface INewNote {
  name: string;
  content: string;
  category: string;
}

const defaultNote: INewNote = {
  name: "",
  content: "",
  category: "",
};

function Modal({ isOpen = false, onClose }: IModalProps) {
  const [note, setNote] = useState(defaultNote);
  console.log(note);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget;
    setNote((prev) => ({ ...prev, [name]: value }));
  };
  const handleClose = () => {
    cleanForm();
    onClose();
  };

  const cleanForm = () => setNote(() => defaultNote);
  return (
    <>
      <div className={`${isOpen ? "" : "hidden"}`}>
        <Overlay />
        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 rounded-lg -translate-y-1/2 px-5 py-8 bg-white w-[400px] ">
          <form>
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
                onChange={handleChange}
              >
                <option value="idea">Idea</option>
                <option value="task">Task</option>
                <option value="random">Random</option>
                <option value="quote">Quote</option>
              </select>
            </div>

            <div className="flex justify-end">
              <div className="mx-2">
                <Button onClick={() => console.log("click")}>Add</Button>
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
