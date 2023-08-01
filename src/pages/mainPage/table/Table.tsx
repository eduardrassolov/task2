import { useState } from "react";
import { Button } from "../../../components/Button";
import Modal from "../modal/Modal";
import TableBody from "./TableBody";

interface ITableProps {
  children: React.ReactNode;
}

export default function Table({ children }: ITableProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCloseModal = () => setIsOpen(() => false);
  const handleOpenModal = () => setIsOpen(() => true);

  return (
    <div className="w-[1300px] mx-auto">
      <Modal isOpen={isOpen} onClose={handleCloseModal} />

      <Button onClick={handleOpenModal} variant="secondary">
        Add new Task
      </Button>

      <table className="bg-gray-200 whitespace-nowrap w-full table-fixed text-lg items-center my-2 border-collapse shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
        {children}
        <TableBody />
      </table>
    </div>
  );
}
