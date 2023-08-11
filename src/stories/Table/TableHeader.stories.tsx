import { Meta, StoryObj } from "@storybook/react";
import TableHeader from "../../features/notes/table/TableHeader";
import { Provider } from "react-redux";
import store from "../../redux/store";
import Table from "../../features/notes/table/Table";

const meta: Meta<typeof TableHeader> = {
    component: TableHeader,
    title: "Table/TableHeader",
    tags: ['autodocs'],
    decorators: [
        (Story) => <>
            <Provider store={store}>
                <Table>
                    <Story />
                </Table>
            </Provider>
        </>
    ]
}

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
    args: {
        headers: ["Name", "Created", "Category", "Content", "Dates"],
        showActionsBtn: true,
    },

}

export const StatsTable: Story = {
    args: {
        headers: ["Category", "Active", "Archived"],
        showActionsBtn: false,
    },
}
