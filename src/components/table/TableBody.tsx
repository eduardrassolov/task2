import { data } from "../../data/data.js";
import TableRow from "./tableRow.js";

export default function TableBody() {
  return (
    <tbody>
      {data.map((note) => {
        return <TableRow key={note.id} {...note} />;
      })}
      <td></td>
    </tbody>
  );
}
