// Replace your-framework with the name of your framework
import { Meta, StoryObj } from "@storybook/react";
import { Field } from "../../src/primitives/Field";
import { Text } from "../../src/primitives/Text";

const meta: Meta<typeof Field> = {
    component: Field
};
export default meta;

type Story = StoryObj<typeof Field>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        label: "Temp"
    }
};