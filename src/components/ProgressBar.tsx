import React, { useContext, useEffect, useRef } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Box } from "../primitives/Box";
import { Animated, View } from "react-native";
import { Text } from "../primitives/Text";

export const ProgressBar = (props: {
    title?: string;
    fill?: number;
    displayValue?: string;
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];
    const levelAnim = useRef(new Animated.Value(0)).current;
    const isLoaded = useRef(false);

    useEffect(() => {
        const barPercent = Math.max(Math.min(props.fill ?? 0, 100), 0);

        const animations = [];

        if (!isLoaded.current) {
            animations.push(
                Animated.timing(levelAnim, {
                    toValue: 100,
                    duration: 400,
                    useNativeDriver: false
                }),
                Animated.timing(levelAnim, {
                    toValue: 0,
                    duration: 400,
                    delay: 500,
                    useNativeDriver: false
                })
            );
        }

        animations.push(Animated.timing(levelAnim, {
            toValue: barPercent,
            duration: 400,
            useNativeDriver: false
        }));

        Animated.sequence(animations).start();

        isLoaded.current = true;
    }, [props.fill]);

    return <View style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: theme.scale * 2
    }}>
        <Text style={{ textTransform: "uppercase" }} colorVariant={props.colorVariant}>{props.title}</Text>
        <Box style={{
            width: 35,
            height: theme.scale * 60,
            padding: 0
        }} colorVariant={props.colorVariant}>
            <Animated.View style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: levelAnim.interpolate({
                    inputRange: [0, 100],
                    outputRange: ["0%", "100%"]
                }),
                backgroundColor: color
            }} />
        </Box>
        {props.displayValue && <Text style={{ textTransform: "uppercase", fontSize: theme.scale * 8 }} colorVariant={props.colorVariant}>{props.displayValue}</Text>}
    </View>;
};