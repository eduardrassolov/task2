import { Button } from "../components/Button";
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { render } from "react-dom";

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    tags: ['autodocs'],
    args: {
        variant: "primary",
        onClick: action("clicked"),
    },
    argTypes: {
        variant: {
            control: { type: "select" },
            options: ["primary", "secondary", "actions"],
        }
    },

}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "This is primary",
        variant: "primary",
    },
}

export const Secondary: Story = {
    args: {
        children: "This is secondary",
        variant: "secondary",
    }
}

export const Add: Story = {
    args: {
        children: "Add",
        variant: "primary",
    },
    render: (args) => <Button variant={args.variant}>{args.children}</Button>

}
export const Save: Story = {
    args: {
        children: "Save",
        variant: "primary",
    },
    render: (args) => <Button variant={args.variant}>{args.children}</Button>

}
