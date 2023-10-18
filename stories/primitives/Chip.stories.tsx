import { Chip } from "../../src/primitives/Chip";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Chip> = {
    component: Chip
};
export default meta;

type Story = StoryObj<typeof Chip>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        colorVariant: "primary"
    }
};