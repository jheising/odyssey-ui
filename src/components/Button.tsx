import React, { useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Text } from "../primitives/Text";
import { Chip } from "../primitives/Chip";
import { TouchableOpacity } from "react-native";

export const Button = (props: {
    title?: string;
    colorVariant?: ColorVariant;
    outlined?: boolean;
    disabled?: boolean;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];

    return <TouchableOpacity disabled={props.disabled}>
        <Chip colorVariant={props.colorVariant} outlined={props.outlined} disabled={props.disabled}>
            {props.title && <Text style={{ color: props.outlined ? color : theme.backgroundColor, fontSize: theme.thickness * 8 }}>{props.title}</Text>}
        </Chip>
    </TouchableOpacity>;
};