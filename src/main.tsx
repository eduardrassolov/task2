import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import store from "./redux/store.ts";
import { Provider } from "react-redux";
import { data } from "./data/data.ts";

data.map((note) =>
  store.dispatch({ type: "notes/createNote", payload: { ...note } })
);
console.log(store.getState());
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
