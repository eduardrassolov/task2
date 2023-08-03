// export const noteCategories = new Map(
//   Object.entries({
//     idea: "Idea",
//     task: "Task",
//     random: "Random Thought",
//     quote: "Quote",
//   })
// );

export const categories = [
  { key: "idea", value: "Idea" },
  { key: "task", value: "Task" },
  { key: "random", value: "Random Thought" },
  { key: "quote", value: "Quote" },
];

export const getCategoryName = (key: string) =>
  categories.find((category) => category.key === key)?.value;
