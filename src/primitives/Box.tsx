import React from "react";
import { View } from "react-native";
import { ColorVariant } from "../Theme";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import { useTheme } from "../hooks/useTheme";

export const Box = (props: ViewProps & {
    colorVariant?: ColorVariant;
}) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    return <View {...props} style={[{
        borderColor: theme.color,
        borderWidth: theme.borderWidth,
        padding: theme.innerPadding
    }, props.style]} />;
};