import React, { PropsWithChildren } from "react";
import { View } from "react-native";
import { Text } from "./Text";
import { useTheme } from "../hooks/useTheme";

export const Group = (props: PropsWithChildren<{
    title?: string;
    direction?: "horizontal" | "vertical";
    titleTextAlign?: "left" | "center" | "right";
}>) => {
    const theme = useTheme();
    return <View style={{
        flexWrap: "wrap",
        flexDirection: props.direction === "horizontal" ? "row" : "column",
        columnGap: theme.settings.scale * 10,
        rowGap: theme.settings.scale * 3,
        justifyContent: props.direction === "horizontal" ? "center" : undefined
    }}>
        {props.title && <Text style={{ textTransform: "uppercase", textAlign: props.titleTextAlign }}>{props.title}</Text>}
        {props.children}
    </View>;
};