import React from "react";
import { ColorVariant } from "../Theme";
import { Text } from "../primitives/Text";
import { Chip } from "../primitives/Chip";
import { TouchableOpacity } from "react-native";
import { useTheme } from "../hooks/useTheme";

export interface ButtonProps {
    title?: string;
    colorVariant?: ColorVariant;
    outlined?: boolean;
    disabled?: boolean;
    onPress?: () => void;
}

export const Button = (props: ButtonProps) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    return <TouchableOpacity disabled={props.disabled} onPress={props.onPress}>
        <Chip colorVariant={props.colorVariant} outlined={props.outlined} disabled={props.disabled} style={{minHeight: theme.controlMinHeight, justifyContent: "center"}}>
            {props.title && <Text style={{ color: props.outlined ? theme.color : theme.backgroundColor, fontSize: theme.valueFontSize }}>{props.title}</Text>}
        </Chip>
    </TouchableOpacity>;
};