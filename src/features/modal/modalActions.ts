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
  return {
    type: "modal/openEditModal",
    payload: { noteId: id },
  };
};
