import React, { useEffect, useRef } from "react";
import { ColorVariant } from "../Theme";
import { Box } from "../primitives/Box";
import { Animated, View } from "react-native";
import { Text } from "../primitives/Text";
import { useTheme } from "../hooks/useTheme";
import { AnimatedString, NumericDisplayValue } from "../primitives/AnimatedString";

export const ProgressBar = (props: {
    title?: string;
    fill?: number;
    displayValue?: string | number | NumericDisplayValue;
    colorVariant?: ColorVariant;
}) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });
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
        gap: theme.innerPadding
    }}>
        <Text style={{ textTransform: "uppercase" }}>{props.title}</Text>
        <Box style={{
            width: 35,
            height: theme.controlMinHeight * 3,
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
                backgroundColor: theme.color
            }} />
        </Box>
        {props.displayValue && <Text style={{ textTransform: "uppercase"}} colorVariant={props.colorVariant}><AnimatedString value={props.displayValue}/></Text>}
    </View>;
};