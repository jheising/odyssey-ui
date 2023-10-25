import React from "react";
import { Text } from "./Text";
import { View } from "react-native";
import { useTheme } from "../hooks/useTheme";

export const Title = (props: {
    label?: string,
}) => {
    const theme = useTheme();
    return <View style={{
        transform: "scaleY(0.65)"
    }}>
        <Text style={{
            fontSize: theme.titleFontSize,
            lineHeight: theme.titleFontSize * 0.8
        }}>
            {props.label}
        </Text>
    </View>;
};