import React from "react";
import { ColorVariant } from "../Theme";
import { Text } from "../primitives/Text";
import { Chip } from "../primitives/Chip";
import { useTheme } from "../hooks/useTheme";

export const Tag = (props: {
    label: string;
    colorVariant?: ColorVariant;
}) => {
    const theme = useTheme({colorVariant:props.colorVariant});
    return <Chip colorVariant={props.colorVariant}>
        <Text style={{color: theme.backgroundColor}}>{props.label}</Text>
    </Chip>;
};