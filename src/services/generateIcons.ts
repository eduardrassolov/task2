import { INote } from "../interfaces/INote";

export function generateIcons(notes: Array<INote>): string[] {
  return notes.map((note) => `/public/${note.category}.png`);
}
