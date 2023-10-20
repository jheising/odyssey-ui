import React, { PropsWithChildren, useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Field } from "../primitives/Field";
import { View } from "react-native";
import { Text } from "../primitives/Text";
import { BlinkEntry } from "../primitives/BlinkEntry";

export const Value = (props: {
    label: string,
    value?: string | number;
    direction?: "horizontal" | "vertical";
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    return <Field label={props.label} direction={props.direction} colorVariant={props.colorVariant}>
        <View style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Text style={{ fontSize: theme.scale * 10 }} colorVariant={props.colorVariant}>{props.value}</Text>
        </View>
    </Field>;
};