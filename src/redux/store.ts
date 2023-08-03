import { combineReducers, createStore } from "redux";
import { noteReducer } from "../features/notes/notesSlice";
import { ModalState, modalReducer } from "../features/modal/modalSlice";
import { INote } from "../interfaces/INote";
import { composeWithDevTools } from "@redux-devtools/extension/";

export interface IRootState {
  notes: Array<INote>;
  modal: ModalState;
}

const rootReducer = combineReducers({
  notes: noteReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
