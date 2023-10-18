import { Meta, StoryObj } from "@storybook/react";
import { Page } from "../../src/components/Page";

const meta: Meta<typeof Page> = {
    component: Page
};
export default meta;

type Story = StoryObj<typeof Page>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        title: "GRV",
        description: "Vita Survival Systems J-Series"
    }
};