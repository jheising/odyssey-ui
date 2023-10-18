import Svg, { Defs, Line, Pattern, Rect } from "react-native-svg";
import { View, StyleSheet } from "react-native";
import { useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";

export const HatchPattern = (props: {
    colorVariant?: ColorVariant
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];
    return <View
        style={[
            StyleSheet.absoluteFill,
            { alignItems: "center", justifyContent: "center" }
        ]}>
        <Svg width="100%" height="100%">
            <Defs>
                <Pattern id="diagonalHatch" width={theme.thickness * 4} height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <Line x1="0" y1="0" x2="0" y2="10" stroke={color} strokeWidth={theme.thickness * 4} />
                </Pattern>
            </Defs>
            <Rect fill="url(#diagonalHatch)" x="0" y="0" width="100%" height="100%" />
        </Svg>
    </View>;
};