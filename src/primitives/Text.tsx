import React, { useContext, useEffect, useRef } from "react";
import { Animated, Text as RNText } from "react-native";
import { TextProps } from "react-native/Libraries/Text/Text";
import { ColorVariant, ThemeContext } from "../Theme";

// @ts-ignore
import Gradient from 'react-native-css-gradient';

export const Text = (props: TextProps & {
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];

    // const entryAnim = useRef(new Animated.Value(0)).current;
    // useEffect(() => {
    //     Animated.timing(entryAnim, {
    //         toValue: 1,
    //         duration: 250,
    //         useNativeDriver: true
    //     }).start();
    // }, []);

    return <RNText {...props} style={[{
        fontFamily: "odyssey",
        color: color
    }, props.style]} />;
};