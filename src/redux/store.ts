import { createStore } from "redux";
import { noteReducer } from "../features/notes/notesSlice";

const store = createStore(noteReducer);

export default store;
