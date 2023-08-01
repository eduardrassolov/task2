import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import { headers } from "../../config/tableHeaders";

export default function Main() {
  return (
    <>
      <main className="w-screen h-screen py-5 overflow-scroll">
        <Table>
          <TableHeader headers={headers} />
        </Table>
      </main>
    </>
  );
}
