import { Meta, StoryObj } from "@storybook/react";
import Table from "../features/notes/table/Table";
import TableHeader from "../features/notes/table/TableHeader";
import { Provider } from "react-redux";
import store from "../redux/store";
import TableBody from "./TableBody.stories"

const meta: Meta<typeof Table> = {
    component: Table,
    title: "Table/Table",
    tags: ['autodocs'],
    decorators: [
        (Story) =>
            <Provider store={store}>
                <Story />
            </Provider>]
}

export default meta;
type Story = StoryObj<typeof Table>

export const MainTable: Story = {
    args: {
        children: <>
            <TableHeader headers={[
                { name: "Name" },
                { name: "Created" },
                { name: "Category" },
                { name: "Content" },
                { name: "Dates" }
            ]} />

        </>
    },
}

export const StatsTable: Story = {
    args: {
        children: <TableHeader headers={[
            { name: "Category" },
            { name: "Active" },
            { name: "Archived" },
        ]}
            isMainTable={false} />
    }
}