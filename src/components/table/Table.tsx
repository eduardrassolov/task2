import TableBody from "./TableBody";
import TableHeader from "./TableHeader";

export default function Table() {
  return (
    <table className="bg-gray-200 table-fixed w-[1100px]  text-lg items-center mx-auto my-2 border-collapse shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
      <TableHeader />
      <TableBody />
    </table>
  );
}
