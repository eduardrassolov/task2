import { Meta, StoryObj } from "@storybook/react";
import Footer, { FooterProps } from "../../features/modal/modal/Footer";
// import { Button } from "../../components/Button";
import { Add as AddModalBtn } from "../Button.stories";
import { Save as EditModalBtn } from "../Button.stories";
// import { Primary as Button } from "../Button.stories";

const meta: Meta<typeof Footer> = {
    component: Footer,
    title: "Modal/Footer",
    tags: ['autodocs'],
}

export default meta;
type Story = StoryObj<typeof Footer>;

export const AddModalFooter: Story = {
    args: {
        children: AddModalBtn.render(AddModalBtn.args),

    },
}
export const EditModalFooter: Story = {
    args: {
        children: EditModalBtn.render(EditModalBtn.args),
    },
}