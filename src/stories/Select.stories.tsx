import { Meta, StoryObj } from "@storybook/react";
import Select from "../features/modal/modal/Select";

const meta: Meta<typeof Select> = {
    component: Select,
    title: "Select",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Select>


export const Default: Story = {
    args: {
        children: "This is Select",
        options: [
            { key: "idea", value: "Idea" },
            { key: "task", value: "Task" },
            { key: "random", value: "Random Thought" },
            { key: "quote", value: "Quote" },
        ],

    }
}