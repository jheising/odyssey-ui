import Svg, { Defs, Line, Pattern, Rect } from "react-native-svg";
import { View, StyleSheet, ViewStyle } from "react-native";
import { ColorVariant } from "../Theme";
import { useTheme } from "../hooks/useTheme";

export const HatchPattern = (props: {
    colorVariant?: ColorVariant;
    style?: ViewStyle;
}) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });
    return <View
        style={[
            StyleSheet.absoluteFill,
            { alignItems: "center", justifyContent: "center" },
            props.style
        ]}>
        <Svg width="100%" height="100%">
            <Defs>
                <Pattern id="diagonalHatch" width={theme.settings.scale * 4} height="10" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
                    <Line x1="0" y1="0" x2="0" y2="10" stroke={theme.color} strokeWidth={theme.settings.scale * 5} />
                </Pattern>
            </Defs>
            <Rect fill="url(#diagonalHatch)" x="0" y="0" width="100%" height="100%" />
        </Svg>
    </View>;
};