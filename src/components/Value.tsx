import React from "react";
import { ColorVariant } from "../Theme";
import { Field } from "../primitives/Field";
import { View } from "react-native";
import { Text } from "../primitives/Text";
import { useTheme } from "../hooks/useTheme";
import { AnimatedString, NumericDisplayValue } from "../primitives/AnimatedString";

export const Value = (props: {
    label: string,
    value?: string | number | NumericDisplayValue;
    direction?: "horizontal" | "vertical";
    colorVariant?: ColorVariant;
}) => {

    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    return <Field label={props.label} direction={props.direction} colorVariant={props.colorVariant}>
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontSize: theme.valueFontSize }} colorVariant={props.colorVariant}>
                {props.value && <AnimatedString value={props.value} />}
            </Text>
        </View>
    </Field>;
};