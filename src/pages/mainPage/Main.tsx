import Table from "../../components/table/Table";
import TableHeader from "../../components/table/TableHeader";
import { mainTableHeaders } from "../../config/tableHeaders";

export default function Main() {
  return (
    <>
      <main className="w-screen h-screen overflow-scroll">
        <Table>
          <TableHeader headers={mainTableHeaders} />
        </Table>
      </main>
    </>
  );
}
