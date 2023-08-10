import { Meta, StoryObj } from "@storybook/react";
import Header from "../components/Header";

const meta: Meta<typeof Header> = {
    component: Header,
    title: "Header",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {
    args: {
        children: "This is Header",
    }
}
