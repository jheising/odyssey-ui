import React, { PropsWithChildren } from "react";
import { ColorVariant } from "../Theme";
import { Box } from "./Box";
import { View } from "react-native";
import { Text } from "./Text";
import { Group } from "./Group";
import { useTheme } from "../hooks/useTheme";

export const Field = (props: PropsWithChildren<{
    label?: string;
    direction?: "horizontal" | "vertical";
    colorVariant?: ColorVariant;
}>) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });
    const direction = props.direction ?? "horizontal";

    if (direction === "vertical") {
        return <Group title={props.label} titleTextAlign="center">
            <Box>{props.children}</Box>
        </Group>;
    }

    return <Box style={{ display: "flex", flexDirection: "row", padding: 0, minHeight: theme.controlMinHeight }} colorVariant={props.colorVariant}>
        {props.label && <View style={{
            width: theme.settings.scale * 30,
            padding: theme.settings.scale,
            backgroundColor: theme.color
        }}>
            <Text style={{ color: theme.backgroundColor, textTransform: "uppercase" }}>{props.label}</Text>
        </View>}
        <View style={{ padding: theme.innerPadding, flex: 1 }}>{props.children}</View>
    </Box>;
};