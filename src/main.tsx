import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { data } from "./data/data.ts";
import { createNote } from "./features/notes/tableActions.ts";

try {
  data.map((note) => store.dispatch(createNote({ ...note })));
} catch (error) {
  alert("Cannot load data");
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
