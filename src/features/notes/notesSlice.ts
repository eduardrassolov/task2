import { AnyAction } from "redux";
import { INote } from "../../interfaces/INote";
import { generateNote } from "../../services/generateNote";

const initialState: INote[] = [];

export const noteReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "notes/createNote":
      return [...state, action.payload];
    default:
      return state;
  }
};

export const createNote = (note: INote): AnyAction => ({
  type: "notes/createNote",
  payload: { ...note, ...generateNote() },
});
