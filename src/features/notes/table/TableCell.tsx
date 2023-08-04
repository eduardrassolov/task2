type TableCellProps = {
  content: string;
};

export default function TableCell({ content }: TableCellProps) {
  return (
    <td className="px-3 w-[250px] flex  overflow-hidden">
      <p>{content}</p>
    </td>
  );
}
