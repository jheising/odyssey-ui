import React, { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../Theme";
import { View } from "react-native";

export const Section = (props: PropsWithChildren<{
    direction?: "horizontal" | "vertical";
}>) => {
    const theme = useContext(ThemeContext);
    return <View style={{
        flexDirection: props.direction === "horizontal" ? "row" : "column",
        gap: theme.thickness * 15
    }}>
        {props.children}
    </View>;
};