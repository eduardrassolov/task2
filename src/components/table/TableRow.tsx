import { INote } from "../../interfaces/INote";
import { getCategoryName } from "../../services/getCategoryName";
import { parseDate } from "../../services/parseDates";

export default function TableRow(note: INote) {
  const { name, created, category, content } = note;
  const dates = parseDate(content);
  const categoryName = getCategoryName(category);

  return (
    <tr className="mb-10">
      <td className="px-5 py-3">
        <p>{name}</p>
      </td>
      <td className="px-5">
        <p>{created}</p>
      </td>
      <td className="px-5">
        <p className="truncate">{categoryName}</p>
      </td>
      <td className="px-5 whitespace-nowrap hover:overflow-scroll overflow-hidden">
        <p className="">{content}</p>
      </td>
      <td className="px-5  hover:overflow-scroll overflow-hidden">
        <p className="">{dates?.join(", ")}</p>
      </td>
      <td className="px-5">
        <div className="flex w-full justify-between">
          <button>x</button>
          <button>x</button>
          <button>x</button>
        </div>
      </td>
    </tr>
  );
}
