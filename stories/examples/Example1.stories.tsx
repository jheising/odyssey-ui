import { Meta, StoryObj } from "@storybook/react";
import { Group } from "../../src/primitives/Group";
import { Value } from "../../src/components/Value";
import { Page } from "../../src/components/Page";
import { ProgressBar } from "../../src/components/ProgressBar";
import { Section } from "../../src/components/Section";
import { Button } from "../../src/components/Button";
import { BlinkAnimation } from "../../src/primitives/BlinkAnimation";
import { ProgressCircle } from "../../src/components/ProgressCircle";
import { Dropdown, Option } from "../../src/components/Dropdown";
import { Switch } from "../../src/components/Switch";
import { useState } from "react";
import random from "lodash/random";
import { useInterval } from "../../src/hooks/useInterval";
import { View } from "react-native";
import { Input } from "../../src/components/Input";

const meta: Meta = {
    title: "Example 1"
};
export default meta;

type Story = StoryObj;

//👇 Throws a type error it the args don't match the component props
export const Primary: Story = {

    render: () => {
        const [values, setValues] = useState(generateRandomValues());
        const [commitOption, setCommitOption] = useState<Option>();
        const [committedOption, setCommittedOption] = useState<Option>();
        const [on, setOn] = useState(false);

        function generateRandomValues() {
            return [
                Number(random(212.23, 215.12).toFixed(2)),
                Number(random(56.5, 56.8).toFixed(2)),
                9.8,
                Number(random(77, 87).toFixed(2)),
                Number(random(22, 44).toFixed(2)),
                Number(random(98, 100).toFixed(2)),
                Number(random(98, 100).toFixed(2))
            ];
        }

        useInterval(() => {
            const newValues = [...values];
            const randomValues = generateRandomValues();
            const valueToUpdate = random(0, newValues.length - 1);

            newValues[valueToUpdate] = randomValues[valueToUpdate];
            setValues(newValues);
        }, 1500);

        return <Page title="LFE" description="VITA SURVIVAL SYSTEMS J-SERIES">
            <Section style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Section style={{ flex: 1 }}>
                    <Group title="VAR SNS">
                        <BlinkAnimation animationDelay={0}><Value label="TMP" value={{
                            number: values[0],
                            suffix: "°C"
                        }} /></BlinkAnimation>
                        <BlinkAnimation animationDelay={500}><Value label="HUM" value={{
                            number: values[1],
                            suffix: "%"
                        }} /></BlinkAnimation>
                        <BlinkAnimation animationDelay={1000}><Value label="GRV" value={{
                            number: values[2],
                            suffix: "G"
                        }} /></BlinkAnimation>
                    </Group>
                    <Group direction="horizontal">
                        <ProgressBar title="CLT FLW" fill={100} displayValue="100%" />
                        <ProgressBar title="HT ECN" fill={values[3]} displayValue={{
                            number: values[3],
                            suffix: "%"
                        }} colorVariant="danger" />
                        <ProgressCircle title="EMT VAR" fill={values[4]} displayValue={{
                            number: values[4],
                            suffix: "%"
                        }} />
                        <ProgressCircle title="TNK PRS" colorVariant="success" fill={values[5]} displayValue={{
                            number: values[5],
                            suffix: "%"
                        }} />
                    </Group>
                </Section>
                <Section style={{ flex: 1 }}>
                    <Group title="GRV PHS CMT">
                        {/*<Input/>*/}
                        <Switch value={on} onChange={setOn} onTitle="PRG ON" offTitle="PRG OFF" />
                        {on && <BlinkAnimation animationDelay={0}>
                            <View style={{ flexDirection: "row", gap: 10 }}>
                                <View style={{ flex: 1 }}>
                                    <Dropdown placeholderText="SET GRV LVL" options={[
                                        { name: "BRC.292" },
                                        { name: "BRC.789" },
                                        { name: "TTL.667" },
                                        { name: "TTL.187" },
                                        { name: "TTL.556" },
                                        { name: "RLN.111" },
                                        { name: "PRB.313" }
                                    ]} value={commitOption} onChange={option => setCommitOption(option)} />
                                </View>
                                <Button title="COMMIT" disabled={!commitOption} colorVariant="warn" onPress={() => {
                                    setCommittedOption(commitOption);
                                    setCommitOption(undefined);
                                }} />
                            </View>
                        </BlinkAnimation>}
                    </Group>
                    {on && committedOption && <Group title="GRV PRG">
                        <BlinkAnimation key={committedOption.name} animationDelay={0}><Value label="CGL" value={committedOption?.name} /></BlinkAnimation>
                        <ProgressCircle title="TNK PRS" style="center" fill={values[5]} displayValue={{
                            number: values[5],
                            suffix: "%"
                        }} />
                    </Group>}
                </Section>
            </Section>
        </Page>;
    }
};