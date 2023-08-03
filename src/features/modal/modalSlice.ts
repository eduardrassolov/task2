import { AnyAction } from "redux";

export interface ModalState {
  isOpen: boolean;
  noteId: string | null;
}

const initialState: ModalState = {
  isOpen: false,
  noteId: null,
};

export const modalReducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case "modal/openCreateModal":
      return { isOpen: true, noteId: null };
    case "modal/closeModal":
      return initialState;
    case "modal/openEditModal":
      return { isOpen: true, noteId: action.payload.noteId };
    default:
      return state;
  }
};

export const openCreateModal = () => {
  return {
    type: "modal/openCreateModal",
  };
};
export const closeModal = () => {
  return {
    type: "modal/closeModal",
  };
};

export const openEditModal = (id: string) => {
  console.log("id", id);
  return {
    type: "modal/openEditModal",
    payload: { noteId: id },
  };
};
