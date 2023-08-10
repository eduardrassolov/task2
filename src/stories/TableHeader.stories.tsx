import { Meta, StoryObj } from "@storybook/react";
import TableHeader from "../features/notes/table/TableHeader";
import { Provider } from "react-redux";
import store from "../redux/store";


const meta: Meta<typeof TableHeader> = {
    component: TableHeader,
    title: "Table/TableHeader",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof TableHeader>;

export const Default: Story = {
    args: {
        headers: [
            { name: "Name" },
            { name: "Created" },
            { name: "Category" },
            { name: "Content" },
            { name: "Dates" }
        ],
    },
    decorators: [
        (Story) =>
            <Provider store={store}>
                <Story />
            </Provider>]

}

export const StatsTable: Story = {
    args: {
        headers: [
            { name: "Category" },
            { name: "Active" },
            { name: "Archived" },
        ],
        isMainTable: false,
    },
    decorators: [
        (Story) =>
            <Provider store={store}>
                <Story />
            </Provider>]

}