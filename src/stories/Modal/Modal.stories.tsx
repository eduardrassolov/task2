import { Meta, StoryObj } from "@storybook/react";

import { Provider } from "react-redux";
import store from "../../redux/store";
import Modal from "../../features/modal/modal/Modal";
import Footer from "../../features/modal/modal/Footer";

const meta: Meta<typeof Modal> = {
    component: Modal,
    title: "Modal/Modal",
    tags: ['autodocs'],
    decorators: [
        (Story) => <Provider store={store}>
            <Story />
        </Provider>
    ]
}

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
    args: {},

}