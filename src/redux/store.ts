import { combineReducers, createStore } from "redux";

import { INote } from "../interfaces/INote";
import { composeWithDevTools } from "@redux-devtools/extension/";
import { ModalState, modalReducer } from "../features/modal/modalReducer";
import { noteReducer } from "../features/notes/tableReducer";

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
