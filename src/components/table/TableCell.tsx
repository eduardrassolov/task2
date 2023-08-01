type TableCellProps = {
  content: string;
};

export default function TableCell({ content }: TableCellProps) {
  return (
    <td className="px-5 py-3 w-[250px] flex  overflow-hidden">
      <p className="h-5">{content}</p>
    </td>
  );
}
