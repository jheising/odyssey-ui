import { Meta, StoryObj } from "@storybook/react";
import { Title } from "../../src/primitives/Title";

const meta: Meta<typeof Title> = {
    component: Title
};
export default meta;

type Story = StoryObj<typeof Title>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        label: "GRV"
    }
};