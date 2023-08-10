import { Button } from "../components/Button";
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
    component: Button,
    title: "Button",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: "This is Button",
    }
}

export const Secondary: Story = {
    args: {
        children: "Cancel",
        variant: "secondary",
    }
}