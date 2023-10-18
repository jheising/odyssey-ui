import React, { useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Text } from "../primitives/Text";
import { Chip } from "../primitives/Chip";

export const Tag = (props: {
    label: string;
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    return <Chip colorVariant={props.colorVariant}>
        <Text style={{color: theme.backgroundColor}}>{props.label}</Text>
    </Chip>;
};