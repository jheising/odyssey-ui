import React from "react";
import { Text as RNText } from "react-native";
import { TextProps } from "react-native/Libraries/Text/Text";
import { ColorVariant } from "../Theme";
import { useTheme } from "../hooks/useTheme";

export const Text = (props: TextProps & {
    colorVariant?: ColorVariant;
}) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    return <RNText {...props} style={[{
        fontFamily: "odyssey",
        color: theme.color,
        fontSize: theme.fontSize
    }, props.style]} />;
};