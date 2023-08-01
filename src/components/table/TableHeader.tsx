export default function TableHeader() {
  return (
    <thead className="bg-gray-300 text-xl font-semibold text-left">
      <tr>
        <th className="cell w-[150px]">Name</th>
        <th className="px-5 py-2 w-[150px]">Created</th>
        <th className="px-5 py-2 w-[175px]">Category</th>
        <th className="px-5 py-2 w-[350px]">Content</th>
        <th className="px-5 py-2 w-[200px]">Dates</th>

        <th className="px-5 py-2 w-[100px]">
          <button>x</button>
          <button>x</button>
        </th>
      </tr>
    </thead>
  );
}
