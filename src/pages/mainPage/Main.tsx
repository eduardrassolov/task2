import Table from "./table/Table";
import TableHeader from "./table/TableHeader";
import { headers } from "../../config/tableHeaders";
import Modal from "../../features/modal/Modal";
import { Button } from "../../components/Button";
import { IRootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { openCreateModal } from "../../features/modal/modalSlice";

export default function Main() {
  // const [isOpen, setIsOpen] = useState(false);
  const isModalOpen = useSelector((store: IRootState) => store.modal);
  const dispatch = useDispatch();

  const handleOpenModal = () => dispatch(openCreateModal());

  return (
    <>
      <main className="w-screen h-screen py-5 overflow-scroll">
        <div className="w-[1300px] mx-auto">
          {isModalOpen.isOpen ? <Modal /> : ""}

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
