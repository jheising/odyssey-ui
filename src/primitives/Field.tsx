import React, { PropsWithChildren, useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Box } from "./Box";
import { View } from "react-native";
import { Text } from "./Text";
import { Group } from "./Group";

export const Field = (props: PropsWithChildren<{
    label?: string;
    direction?: "horizontal" | "vertical";
    colorVariant?: ColorVariant;
}>) => {
    const theme = useContext(ThemeContext);
    const direction = props.direction ?? "horizontal";
    const color = theme[`${props.colorVariant ?? "primary"}Color`];

    if (direction === "vertical") {
        return <Group title={props.label} titleTextAlign="center">
            <Box>{props.children}</Box>
        </Group>;
    }

    return <Box style={{ display: "flex", flexDirection: "row", padding: 0 }} colorVariant={props.colorVariant}>
        {props.label && <View style={{
            width: theme.thickness * 30,
            padding: theme.thickness,
            minHeight: theme.thickness * 15,
            backgroundColor: color
        }}>
            <Text style={{ color: theme.backgroundColor, textTransform: "uppercase" }}>{props.label}</Text>
        </View>}
        <View style={{ padding: theme.thickness * 3, flex: 1 }}>{props.children}</View>
    </Box>;
};