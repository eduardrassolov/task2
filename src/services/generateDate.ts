export function generateDate(date: Date, options: object): string {
  return date.toLocaleString("en-US", options);
}
