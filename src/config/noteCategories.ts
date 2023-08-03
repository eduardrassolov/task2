export const categories = [
  { key: "idea", value: "Idea" },
  { key: "task", value: "Task" },
  { key: "random", value: "Random Thought" },
  { key: "quote", value: "Quote" },
];

export const getCategoryName = (key: string): string => {
  return categories.find((category) => category.key === key)?.value || "";
};
