interface ITableProps {
  children: React.ReactNode;
}

export default function Table({ children }: ITableProps) {
  return (
    <div className="overflow-x-auto shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] md:rounded-xl rounded-none">
      <table className="w-full text-base text-left ">
        {children}
      </table></div>
  );
}
