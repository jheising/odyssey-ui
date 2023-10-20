import React, { PropsWithChildren, useContext } from "react";
import { View } from "react-native";
import { Text } from "./Text";
import { ThemeContext } from "../Theme";

export const Group = (props: PropsWithChildren<{
    title?: string;
    direction?: "horizontal" | "vertical";
    titleTextAlign?: "left" | "center" | "right";
}>) => {
    const theme = useContext(ThemeContext);
    return <View style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: props.direction === "horizontal" ? "row" : "column",
        gap:  theme.scale * (props.direction === "horizontal" ? 5 : 3)
    }}>
        {props.title && <Text style={{ textTransform: "uppercase", textAlign: props.titleTextAlign}}>{props.title}</Text>}
        {props.children}
    </View>;
};