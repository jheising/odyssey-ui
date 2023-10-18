// Replace your-framework with the name of your framework
import { Text } from "../../src/primitives/Text";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Text> = {
    component: Text
};
export default meta;

type Story = StoryObj<typeof Text>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        children: "Hello world"
    }
};