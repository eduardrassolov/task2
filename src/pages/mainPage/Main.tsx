import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import { headers } from "../../config/tableHeaders";
import { useState } from "react";
import Modal from "./modal/Modal";
import { Button } from "../../components/Button";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(() => false);
  const handleOpenModal = () => setIsOpen(() => true);

  return (
    <>
      <main className="w-screen h-screen py-5 overflow-scroll">
        <div className="w-[1300px] mx-auto">
          <Modal isOpen={isOpen} onClose={handleCloseModal} />

          <Button onClick={handleOpenModal} variant="primary">
            Add new Task
          </Button>

          <Table>
            <TableHeader headers={headers} />
          </Table>
        </div>
      </main>
    </>
  );
}
