import { AnimatedCircularProgress } from "react-native-circular-progress";
import { ColorVariant, ThemeContext } from "../Theme";
import { useContext } from "react";
import { View } from "react-native";
import { Group } from "../primitives/Group";
import { Text } from "../primitives/Text";

export const ProgressCircle = (props: {
    colorVariant?: ColorVariant;
    style?: "offset";
    fill?: number;
    title?: string;
    displayValue?: string;
    units?: string;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];
    const style = props.style ?? "offset";
    const size = 120;

    switch (style) {
        case "offset":
        default: {
            return <Group title={props.title} direction="vertical" titleTextAlign="center">
                <View style={{ flex: 1, justifyContent: "center", position: "relative" }}>
                    <AnimatedCircularProgress
                        size={size}
                        width={theme.thickness * 5}
                        backgroundWidth={theme.thickness * 3}
                        rotation={90}
                        arcSweepAngle={270}
                        fill={props.fill ?? 0}
                        dashedBackground={{ width: theme.thickness * 2, gap: theme.thickness * 2 }}
                        tintColor={color}
                        onAnimationComplete={() => console.log("onAnimationComplete")}
                        backgroundColor={`${color}22`} />
                    {props.displayValue &&
                        <View style={{
                            position: "absolute",
                            right: 0,
                            bottom: "50%",
                            flexDirection: "row",
                            gap: theme.thickness
                        }}>
                            <Text style={{
                                fontSize: theme.thickness * 8
                            }}>{props.displayValue}</Text>
                            {props.units && <Text>{props.units}</Text>}
                        </View>}
                </View>
            </Group>;

        }
    }
};