import {
    ArchiveBoxArrowDownIcon,
    ArchiveBoxXMarkIcon,
    PencilSquareIcon,
    TrashIcon,
} from "@heroicons/react/24/outline";
import React from 'react'
import { Button } from "../../../components/Button";

interface IActionsProps {
    actions: {
        edit: (id: string) => void;
        archive: (id: string) => void;
        delete: (id: string) => void;
    }
    id: string;
    isArchived: boolean;
}

export default function ActionsContainer({ actions, id, isArchived }: IActionsProps) {
    return (
        <>
            <td>
                <div className="flex justify-between">

                    <Button variant="actions" onClick={() => actions.edit(id)}>
                        <PencilSquareIcon className="w-6" />
                    </Button>

                    <Button variant="actions" onClick={() => actions.archive(id)}>
                        {isArchived ? <ArchiveBoxXMarkIcon className="w-6" /> : <ArchiveBoxArrowDownIcon className="w-6" />}
                    </Button>

                    <Button variant="actions" onClick={() => actions.delete(id)}>
                        <TrashIcon className="w-6" />
                    </Button>

                </div>
            </td>
        </>
    )
}
