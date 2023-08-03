import { categories } from "../config/noteCategories";
import { INote } from "../interfaces/INote";

export function generateStats(notes: Array<INote>): Array<string[]> {
  const stats: Array<string[]> = categories.map((category) => {
    const filteredByCategory = notes.filter(
      (note) => note.category === category.key
    );
    const activeCount = filteredByCategory.reduce(
      (acc, note) => (note.isArchived ? acc : ++acc),
      0
    );
    return [
      category.value,
      activeCount.toString(),
      (filteredByCategory.length - activeCount).toString(),
    ];
  });
  return stats;
}
