import React, { PropsWithChildren } from "react";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ColorVariant } from "../Theme";
import { HatchPattern } from "./HatchPattern";
import { useTheme } from "../hooks/useTheme";

export const Chip = (props: PropsWithChildren<{
    colorVariant?: ColorVariant;
    outlined?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
}>) => {
    const drawOutlined = props.outlined || props.disabled;
    const theme = useTheme({
        colorVariant: props.colorVariant,
        inverted: drawOutlined
    });
    const notchSize = theme.settings.scale * 8;

    function renderBottomBar() {
        const notchWidth = Math.sqrt(Math.pow(notchSize, 2) + Math.pow(notchSize, 2));
        return <>
            {props.disabled && <HatchPattern colorVariant={props.colorVariant} />}
            <View style={{
                height: notchWidth,
                width: notchWidth,
                backgroundColor: drawOutlined ? theme.color : theme.backgroundColor,
                position: "absolute",
                right: -notchWidth / 2,
                bottom: -notchWidth / 2,
                borderColor: theme.backgroundColor,
                borderTopWidth: props.disabled ? 0 : theme.borderWidth,
                transform: "rotate(-45deg)",
                zIndex: 1
            }} />
        </>;
    }

    return <View style={[{
        padding: theme.innerPadding,
        overflow: "hidden"
    }, props.style]}>
        <View style={[styles.chipBackgroundContainer]}>
            <View style={{
                ...(drawOutlined ? {
                    borderWidth: props.disabled ? 0 : theme.borderWidth,
                    borderColor: theme.backgroundColor
                } : undefined),
                position: "relative",
                backgroundColor: drawOutlined ? undefined : theme.color,
                flex: 1
            }} />

        </View>
        {renderBottomBar()}
        {props.children}
    </View>;
};

const styles = StyleSheet.create({
    chipBackgroundContainer: {
        overflow: "hidden",
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column"
    }
});