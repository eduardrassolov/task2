type TableHeaderProps = {
  headers: string[];
};

export default function TableHeader({ headers }: TableHeaderProps) {
  return (
    <thead className="bg-gray-300 text-xl font-semibold text-left">
      <tr>
        {headers.map((header) => (
          <th key={header} className="px-5 py-3">
            {header}
          </th>
        ))}
      </tr>
    </thead>
  );
}
