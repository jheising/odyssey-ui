import React from "react";
import { View } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import { useTheme } from "../hooks/useTheme";

export const Section = (props: ViewProps & {
    direction?: "horizontal" | "vertical";
}) => {
    const theme = useTheme({});
    return <View style={[{
        flexDirection: props.direction === "horizontal" ? "row" : "column",
        gap: theme.innerPadding * 3
    }, props.style]}>
        {props.children}
    </View>;
};