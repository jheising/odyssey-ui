import { AnimatedCircularProgress } from "react-native-circular-progress";
import { ColorVariant, ThemeContext } from "../Theme";
import { useContext } from "react";
import { View } from "react-native";
import { Group } from "../primitives/Group";
import { Text } from "../primitives/Text";

export const ProgressCircle = (props: {
    colorVariant?: ColorVariant;
    style?: "offset" | "center";
    fill?: number;
    title?: string;
    displayValue?: string;
    units?: string;
}) => {
    const theme = useContext(ThemeContext);
    const color = theme[`${props.colorVariant ?? "primary"}Color`];
    const style = props.style ?? "offset";
    const size = theme.scale * 40;

    switch (style) {
        case "center": {
            return <Group title={props.title} direction="vertical" titleTextAlign="center">
                <View style={{ flex: 1, justifyContent: "center", position: "relative" }}>
                    <AnimatedCircularProgress
                        size={size}
                        width={theme.scale * 5}
                        backgroundWidth={theme.scale * 3}
                        rotation={0}
                        fill={props.fill ?? 0}
                        dashedBackground={{ width: theme.scale * 2, gap: theme.scale * 2 }}
                        tintColor={color}
                        backgroundColor={`${color}22`} />
                    {props.displayValue &&
                        <View style={{
                            position: "absolute",
                            left: 0,
                            right: 0,
                            top: theme.scale * 4,
                            bottom: 0,
                            justifyContent: "center",
                            alignItems: "center",
                            flexDirection: "column"
                        }}>
                            <Text style={{
                                fontSize: theme.scale * 8
                            }}>{props.displayValue}</Text>
                            {props.units && <Text style={{ fontSize: theme.scale * 4 }}>{props.units}</Text>}
                        </View>}
                </View>
            </Group>;
        }
        case "offset":
        default: {
            return <Group title={props.title} direction="vertical" titleTextAlign="center">
                <View style={{ flex: 1, justifyContent: "center", position: "relative" }}>
                    <AnimatedCircularProgress
                        size={size}
                        width={theme.scale * 5}
                        backgroundWidth={theme.scale * 3}
                        rotation={90}
                        arcSweepAngle={270}
                        fill={props.fill ?? 0}
                        dashedBackground={{ width: theme.scale * 2, gap: theme.scale * 2 }}
                        tintColor={color}
                        backgroundColor={`${color}22`} />
                    {props.displayValue &&
                        <View style={{
                            position: "absolute",
                            right: 0,
                            bottom: "50%",
                            flexDirection: "row",
                            gap: theme.scale
                        }}>
                            <Text style={{
                                fontSize: theme.scale * 8
                            }}>{props.displayValue}</Text>
                            {props.units && <Text>{props.units}</Text>}
                        </View>}
                </View>
            </Group>;

        }
    }
};