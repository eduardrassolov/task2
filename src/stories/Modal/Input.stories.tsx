import { Meta, StoryObj } from "@storybook/react";
import Input from "../../features/modal/modal/Input";

const meta: Meta<typeof Input> = {
    component: Input,
    title: "Modal/Input",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        name: "Name",
    },
}