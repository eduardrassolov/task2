import { formatCreate } from "../config/timeFormat";
import { generateDate } from "./generateDate";

export function generateNote() {
  return {
    id: crypto.randomUUID(),
    created: generateDate(new Date(), formatCreate),
  };
}
