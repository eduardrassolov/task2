import { Meta, StoryObj } from "@storybook/react";
import TableRow from "../features/notes/table/TableRow";

const meta: Meta<typeof TableRow> = {
    component: TableRow,
    title: "Table/TableRow",
    tags: ['autodocs'],
    decorators: [
        (Story) =>
            <tr className="hover:bg-gray-300 border-b-2 bg-gray-50 transition-colors duration-200" >
                <Story />
            </tr>
    ]
}
export default meta;
type Story = StoryObj<typeof TableRow>

export const Default: Story = {
    args: {
        data: ["name1", "1 January 2021", "Idea", "This is contens", ""],
        iconNote: "idea.png",
    }

}