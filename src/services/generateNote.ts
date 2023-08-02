export function generateNote() {
  return {
    id: crypto.randomUUID(),
    created: new Date().toLocaleString(),
  };
}
