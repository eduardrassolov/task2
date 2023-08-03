import { AnyAction } from "redux";
import { INote } from "../../interfaces/INote";
import { generateNote } from "../../services/generateNote";

const initialState: Array<INote> = [];

export const noteReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "notes/createNote":
      return [...state, action.payload];
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

export const createNote = (note: INote): AnyAction => ({
  type: "notes/createNote",
  payload: { ...note, ...generateNote() },
});

export const deleteNoteById = (id: string): AnyAction => ({
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
