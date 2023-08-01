import { data } from "../../../data/data.js";
import TableRow from "./TableRow.js";

export default function TableBody() {
  return (
    <tbody>
      {data.map((note) => {
        return <TableRow key={note.id} {...note} />;
      })}
    </tbody>
  );
}
