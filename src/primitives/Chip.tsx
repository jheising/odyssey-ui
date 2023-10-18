import React, { PropsWithChildren, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { ColorVariant, ThemeContext } from "../Theme";
import { HatchPattern } from "./HatchPattern";

export const Chip = (props: PropsWithChildren<{
    colorVariant?: ColorVariant;
    outlined?: boolean;
    disabled?: boolean;
}>) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];
    const notchSize = theme.thickness * 8;
    const drawOutlined = props.outlined || props.disabled;

    function renderBottomBar() {
        if (drawOutlined) {
            const notchWidth = Math.sqrt(Math.pow(notchSize, 2) + Math.pow(notchSize, 2));
            return <>
                {props.disabled && <HatchPattern colorVariant={props.colorVariant} />}
                <View style={{
                    height: notchWidth,
                    width: notchWidth,
                    backgroundColor: theme.backgroundColor,
                    position: "absolute",
                    right: -notchWidth / 2,
                    bottom: -notchWidth / 2,
                    borderColor: color,
                    borderTopWidth: props.disabled ? 0 : theme.thickness,
                    transform: [
                        { rotate: "-45deg" }
                    ]
                }} />
            </>;
        }

        return <View style={{
            borderTopColor: color,
            height: notchSize,
            borderTopWidth: notchSize,
            borderRightWidth: notchSize,
            borderRightColor: "transparent",
            borderStyle: "solid"
        }} />;
    }

    return <View style={{
        padding: theme.thickness * 5
    }}>
        <View style={styles.chipBackgroundContainer}>
            <View style={{
                ...(drawOutlined ? {
                    borderWidth: props.disabled ? 0 : theme.thickness,
                    borderColor: color
                } : undefined),
                position: "relative",
                backgroundColor: drawOutlined ? undefined : color,
                flex: 1
            }} />
            {renderBottomBar()}
        </View>
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