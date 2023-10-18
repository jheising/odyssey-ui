import { Box } from "../../src/primitives/Box";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "../../src/primitives/Text";

const meta: Meta<typeof Box> = {
    component: Box
};
export default meta;

type Story = StoryObj<typeof Box>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        colorVariant: "primary"
    }
};