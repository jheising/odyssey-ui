import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const BlinkEntry = (props: ViewProps & {
    animationDelay?: number
}) => {

    const entryAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.sequence([
            Animated.timing(entryAnim, {
                toValue: 1,
                duration: 10,
                delay: props.animationDelay ?? getRandomInt(0, 1500),
                useNativeDriver: true
            }),
            Animated.loop(Animated.sequence([
                Animated.timing(entryAnim, {
                    toValue: 0,
                    duration: 50,
                    useNativeDriver: true
                }),
                Animated.timing(entryAnim, {
                    toValue: 1,
                    duration: 50,
                    useNativeDriver: true
                })
            ]), {
                iterations: 3
            })
        ]).start();
    }, []);

    return <Animated.View {...props} style={[props.style, {
        opacity: entryAnim
    }]} />;
};