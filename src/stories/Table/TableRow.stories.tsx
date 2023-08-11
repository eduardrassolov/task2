import { Meta, StoryObj } from "@storybook/react";
import TableRow from "../../features/notes/table/TableRow";
import Table from "../../features/notes/table/Table";
import TableBody from "../../features/notes/table/TableBody";


const meta: Meta<typeof TableRow> = {
    component: TableRow,
    title: "Table/TableRow",
    tags: ['autodocs'],
    decorators: [
        (Story) =>
            <Table>
                <TableBody>
                    <Story />
                </TableBody>
            </Table>
    ]
}
export default meta;
type Story = StoryObj<typeof TableRow>

export const Default: Story = {
    args: {
        data: ["name1", "1 January 2021", "Idea", "This is contens", "test"],
        iconNote: "idea.png",
        isOdd: true,
    },
    render: (args) =>
        <>
            <TableRow {...args} />
        </>
}