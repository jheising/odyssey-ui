import { Meta, StoryObj } from "@storybook/react";
import { ProgressBar } from "../../src/components/ProgressBar";

const meta: Meta<typeof ProgressBar> = {
    component: ProgressBar
};
export default meta;

type Story = StoryObj<typeof ProgressBar>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    // args: {
    //     label: "Temp"
    // }
};