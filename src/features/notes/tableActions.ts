import { INewNote } from "../../interfaces/INewNote";
import { INote } from "../../interfaces/INote";
import { generateNote } from "../../services/generateNote";

export const createNote = (note: INote) => ({
  type: "notes/createNote",
  payload: { ...generateNote(note) },
});
export const updateNote = (id: string, note: INewNote) => ({
  type: "notes/updateNote",
  payload: { id, update: note },
});

export const deleteNoteById = (id: string) => ({
  type: "notes/deleteNoteById",
  payload: { id },
});

export const deleteAllNotes = () => ({
  type: "notes/deleteAllNotes",
});

export const archiveNoteById = (id: string) => ({
  type: "notes/archiveNoteById",
  payload: { id },
});

export const archiveAllNotes = (status: boolean) => ({
  type: "notes/archiveAllNotes",
  payload: { status },
});
