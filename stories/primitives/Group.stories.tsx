// Replace your-framework with the name of your framework
import { Group } from "../../src/primitives/Group";
import { Meta, StoryObj } from "@storybook/react";
import { Box } from "../../src/primitives/Box";

const meta: Meta<typeof Group> = {
    component: Group
};
export default meta;

type Story = StoryObj<typeof Group>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        title: "Current",
        children: <>
            <Box/>
            <Box/>
        </>
    }
};