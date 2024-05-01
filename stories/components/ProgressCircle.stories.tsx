import { Meta, StoryObj } from "@storybook/react";
import { ProgressCircle } from "../../src/components/ProgressCircle";

const meta: Meta<typeof ProgressCircle> = {
    component: ProgressCircle
};
export default meta;

type Story = StoryObj<typeof ProgressCircle>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     label: "Temp"
    // }
};