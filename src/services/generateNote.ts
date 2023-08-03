import { formatCreate } from "../config/timeFormat";
import { INewNote } from "../interfaces/INewNote";
import { INote } from "../interfaces/INote";
import { generateDate } from "./generateDate";

export function generateNote(note: INewNote): INote {
  return {
    id: crypto.randomUUID().toString(),
    created: generateDate(new Date(), formatCreate),
    ...note,
    isArchived: false,
  };
}
