import { Meta, StoryObj } from "@storybook/react";
import { Group } from "../../src/primitives/Group";
import { Value } from "../../src/components/Value";
import { Page } from "../../src/components/Page";
import { ProgressBar } from "../../src/components/ProgressBar";
import { Section } from "../../src/components/Section";
import { Button } from "../../src/components/Button";
import { BlinkEntry } from "../../src/primitives/BlinkEntry";
import { ProgressCircle } from "../../src/components/ProgressCircle";

const meta: Meta = {
    title: "Example 1"
};
export default meta;

type Story = StoryObj;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {
    render: () => <Page title="GRV" description="Vita Survival Systems J-Series">
        <Section direction="horizontal">
            <Section>
                <Group title="Current">
                    <BlinkEntry animationDelay={0}><Value label="Temp" value="22.3°C"/></BlinkEntry>
                    <BlinkEntry animationDelay={500}><Value label="Hum" value="60%" /></BlinkEntry>
                    <BlinkEntry animationDelay={1000}><Value label="Grav" value="9.82" /></BlinkEntry>
                    <Button title="COMMIT"/>
                </Group>
                <Group direction="horizontal">
                    <ProgressBar title="Coolant Flow" fill={100} displayValue="100%" />
                    <ProgressBar title="Heat Econ" fill={25} displayValue="25%" colorVariant="danger"/>
                    <ProgressCircle title="PROGRESS" fill={50} displayValue="50" units="%"/>
                </Group>
            </Section>
        </Section>
    </Page>
};