import React, { useContext } from "react";
import { View } from "react-native";
import { ColorVariant, ThemeContext } from "../Theme";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

export const Box = (props: ViewProps & {
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];

    return <View {...props} style={[{
        borderColor: color,
        borderWidth: theme.scale,
        padding: theme.scale * 3
    }, props.style]} />;
};