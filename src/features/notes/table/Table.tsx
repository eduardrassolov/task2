interface ITableProps {
  children: React.ReactNode;
}

export default function Table({ children }: ITableProps) {
  return (
    <table className="bg-gray-200 mt-5 mb-20 whitespace-nowrap w-full table-fixed text-lg items-center border-collapse shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      {children}
    </table>
  );
}
