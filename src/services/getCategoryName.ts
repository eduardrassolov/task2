import { noteCategories } from "../config/noteCategories";

export const getCategoryName = (key: string) => noteCategories.get(key);
