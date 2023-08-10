import { Meta, StoryObj } from "@storybook/react";
import TableBody from "../features/notes/table/TableBody";

const meta: Meta<typeof TableBody> = {
    component: TableBody,
    title: "Table/TableBody",
    tags: ['autodocs'],
}
export default meta;
type Story = StoryObj<typeof TableBody>

export const Default: Story = {
    args: {
        children: ["name1", "1 January 2021", "Idea", "This is contens", ""],
    }
}
