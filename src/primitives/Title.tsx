import React, { useContext } from "react";
import { ThemeContext } from "../Theme";
import { Text } from "./Text";
import { View } from "react-native";

export const Title = (props: {
    label: string,
}) => {
    const theme = useContext(ThemeContext);
    return <View style={{
        transform: [
            {scaleY: 0.65}
        ]
    }}>
        <Text style={{
            fontSize: theme.thickness * 35,
            lineHeight: theme.thickness * 30
        }}>
            {props.label}
        </Text>
    </View>;
};