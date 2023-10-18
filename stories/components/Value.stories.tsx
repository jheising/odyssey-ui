import { Meta, StoryObj } from "@storybook/react";
import { Value } from "../../src/components/Value";

const meta: Meta<typeof Value> = {
    component: Value
};
export default meta;

type Story = StoryObj<typeof Value>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        label: "Temp",
        value: "22.3 C"
    }
};