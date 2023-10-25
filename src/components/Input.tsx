import React from "react";
import { ColorVariant } from "../Theme";
import { Chip } from "../primitives/Chip";
import { TouchableOpacity, View, TextInput } from "react-native";
import { useTheme } from "../hooks/useTheme";

export interface InputProps {
    title?: string;
    colorVariant?: ColorVariant;
    disabled?: boolean;
    onPress?: () => void;
}

export const Input = (props: InputProps) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });

    return <Chip colorVariant={props.colorVariant} outlined={true} disabled={props.disabled} style={{minHeight: theme.controlMinHeight, justifyContent: "center", padding: theme.innerPadding, paddingRight:0}}>
            <View style={{
                flex: 1,
                borderBottomColor: theme.color,
                borderBottomWidth: theme.borderWidth,
                justifyContent: "center"
            }}>
                <TextInput style={{flex:1, fontFamily: "odyssey", color: theme.color, fontSize: theme.fontSize}}/>
            </View>
        </Chip>;
};