export const categoriesNotes = [
  { key: "idea", value: "Idea" },
  { key: "task", value: "Task" },
  { key: "random", value: "Random Thought" },
  { key: "quote", value: "Quote" },
];

export interface IImages {
  idea: string;
  task: string;
  random: string;
  quote: string;
}
export const imgPaths: IImages = {
  idea: "public/Idea.png",
  task: "public/Task.png",
  random: "public/Random.png",
  quote: "public/Quote.png",
};

export const filterNotes = [
  { key: "all", value: "Show All" },
  { key: "active", value: "Show Active" },
  { key: "archived", value: "Show Archived" },
];

interface ICategory {
  key: string;
  value: string;
}

export const getCategoryName = (
  list: Array<ICategory>,
  key: string
): string => {
  return list.find((category) => category.key === key)?.value || "";
};
