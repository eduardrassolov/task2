import { useSelector } from "react-redux";

import TableRow from "./TableRow.js";
import { IRootState } from "../../../redux/store.js";

export default function TableBody() {
  const notes = useSelector((store: IRootState) => store.notes);
  return (
    <tbody>
      {notes.map((note) => {
        return <TableRow key={note.id} {...note} />;
      })}
    </tbody>
  );
}
