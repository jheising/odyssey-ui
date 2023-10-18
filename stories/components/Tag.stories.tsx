import { Meta, StoryObj } from "@storybook/react";
import { Tag } from "../../src/components/Tag";

const meta: Meta<typeof Tag> = {
    component: Tag
};
export default meta;

type Story = StoryObj<typeof Tag>;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    args: {
        label: "Temp"
    }
};