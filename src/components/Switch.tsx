import React from "react";
import { ColorVariant } from "../Theme";
import { Text } from "../primitives/Text";
import { Chip } from "../primitives/Chip";
import { TouchableOpacity, View } from "react-native";
import { useTheme } from "../hooks/useTheme";
import { HatchPattern } from "../primitives/HatchPattern";

export interface SwitchProps {
    title?: string;
    colorVariant?: ColorVariant;
    disabled?: boolean;
    onChange?: (value: boolean) => void;
    value?: boolean;
    onTitle?: string;
    offTitle?: string;
}

export const Switch = (props: SwitchProps) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    function toggleValue() {
        if (props.onChange) {
            props.onChange(!props.value);
        }
    }

    function renderControl() {
        if (!props.value) {
            return <Chip colorVariant={props.colorVariant} outlined={true} style={{ minHeight: theme.controlMinHeight, minWidth:theme.controlMinHeight * 5, justifyContent: "center", padding: 0, paddingVertical: 0 }}>
                <View style={{ flexDirection: "row", flex: 1 }}>
                    <View style={{ flex: 1 }}>
                        <HatchPattern colorVariant={props.colorVariant} />
                    </View>
                    <View style={{ flex: 1, justifyContent: "center", alignItems:"center", padding: theme.innerPadding }}>
                        {props.offTitle && <Text colorVariant={props.colorVariant}>{props.offTitle}</Text>}
                    </View>
                </View>
            </Chip>;
        }

        return <Chip colorVariant={props.colorVariant} outlined={true} style={{ minHeight: theme.controlMinHeight, minWidth:theme.controlMinHeight * 5, justifyContent: "center", padding: 0, paddingVertical: 0 }}>
            <View style={{ flexDirection: "row", flex: 1 }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems:"center", padding: theme.innerPadding }}>
                    {props.onTitle && <Text colorVariant={props.colorVariant}>{props.onTitle}</Text>}
                </View>
                <View style={{ flex: 1, backgroundColor: theme.color }}/>
            </View>
        </Chip>;

    }

    return <TouchableOpacity disabled={props.disabled} onPress={toggleValue}>
        {renderControl()}
    </TouchableOpacity>;
};