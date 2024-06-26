import { ColorVariant } from "../Theme";
import { View } from "react-native";
import { Group } from "../primitives/Group";
import { Text } from "../primitives/Text";
import { useTheme } from "../hooks/useTheme";
import { AnimatedString, NumericDisplayValue } from "../primitives/AnimatedString";
import { AnimatedCircularProgress } from "react-native-circular-progress";

export const ProgressCircle = (props: {
    colorVariant?: ColorVariant;
    style?: "offset" | "center";
    fill?: number;
    title?: string;
    displayValue: string | number | NumericDisplayValue;
    animate?: boolean;
}) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });
    const style = props.style ?? "offset";
    const size = theme.controlMinHeight * 2;

    function renderControl()
    {
        switch (style) {
            case "center": {
                return <View style={{ flex: 1, justifyContent: "center", position: "relative" }}>
                        <AnimatedCircularProgress
                            size={size}
                            duration={props.animate === false ? 0 : undefined}
                            width={theme.settings.scale * 5}
                            backgroundWidth={theme.settings.scale * 3}
                            rotation={0}
                            fill={props.fill ?? 0}
                            //dashedBackground={{ width: theme.settings.scale * 2, gap: theme.settings.scale * 2 }}
                            tintColor={theme.color}
                            backgroundColor={`${theme.color}22`} />
                        {props.displayValue &&
                            <View style={{
                                position: "absolute",
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column"
                            }}>
                                <Text colorVariant={props.colorVariant} style={{
                                    fontSize: theme.settings.scale * 8
                                }}><AnimatedString value={props.displayValue} animate={props.animate}/></Text>
                            </View>}
                    </View>;
            }
            case "offset":
            default: {
                return <View style={{ position: "relative" }}>
                        <AnimatedCircularProgress
                            size={size}
                            duration={props.animate === false ? 0 : undefined}
                            width={theme.settings.scale * 5}
                            backgroundWidth={theme.settings.scale * 3}
                            rotation={90}
                            arcSweepAngle={270}
                            fill={props.fill ?? 0}
                            //dashedBackground={{ width: theme.settings.scale * 2, gap: theme.settings.scale * 2 }}
                            tintColor={theme.color}
                            backgroundColor={`${theme.color}22`} />
                        {props.displayValue &&
                            <View style={{
                                position: "absolute",
                                right: 0,
                                bottom: "50%",
                                flexDirection: "row",
                                gap: theme.settings.scale
                            }}>
                                <Text colorVariant={props.colorVariant} style={{
                                    fontSize: theme.valueFontSize
                                }}>
                                    <AnimatedString value={props.displayValue} animate={props.animate}/>
                                </Text>
                            </View>}
                    </View>;
            }
        }
    }

    return <Group title={props.title} direction="vertical" titleTextAlign="center" style={{ justifyContent: "center", alignItems: "center" }}>
        {renderControl()}
    </Group>

};