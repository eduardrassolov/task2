export const categoriesNotes = [
  { key: "idea", value: "Idea" },
  { key: "task", value: "Task" },
  { key: "random", value: "Random Thought" },
  { key: "quote", value: "Quote" },
];

export const filterNotes = [
  { key: "all", value: "Show All" },
  { key: "active", value: "Show Active" },
  { key: "archived", value: "Show Archived" },
];

interface ICategory {
  key: string;
  value: string;
}
export const getCategoryName = (list: Array<ICategory>, key: string): string => {
  return list.find((category) => category.key === key)?.value || "";
};
