import { AnyAction } from "redux";
import { INote } from "../../interfaces/INote";

const initialState: Array<INote> = [];

export const noteReducer = (
  state: Array<INote> = initialState,
  action: AnyAction
) => {
  switch (action.type) {
    case "notes/createNote":
      return [...state, action.payload];
    case "notes/updateNote":
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, ...action.payload.update }
          : note
      );
    case "notes/deleteNoteById":
      return state.filter((note) => note.id !== action.payload.id);
    case "notes/deleteAllNotes":
      return initialState;
    case "notes/archiveNoteById":
      return state.map((note) =>
        note.id === action.payload.id
          ? { ...note, isArchived: !note.isArchived }
          : note
      );
    case "notes/archiveAllNotes":
      return state.map((note) => ({
        ...note,
        isArchived: action.payload.status,
      }));
    default:
      return state;
  }
};
