import React from "react";
import { Text } from "./Text";
import { useTheme } from "../hooks/useTheme";

export const Subtitle = (props: {
    label?: string,
}) => {
    const theme = useTheme();
    return <Text style={{
        fontSize: theme.subTitleFontSize
    }}>
        {props.label}
    </Text>;
};