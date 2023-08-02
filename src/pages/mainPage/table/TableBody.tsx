import { useSelector } from "react-redux";
import { INote } from "../../../interfaces/INote.js";
import TableRow from "./TableRow.js";

export default function TableBody() {
  const notes = useSelector((store: Array<INote>) => store);

  return (
    <tbody>
      {notes.map((note) => {
        return <TableRow key={note.id} {...note} />;
      })}
    </tbody>
  );
}
