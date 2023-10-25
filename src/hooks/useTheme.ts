import { useContext } from "react";
import { ColorVariant, ThemeContext, ThemeSettings } from "../Theme";

export function useTheme(props: {
    inverted?: boolean,
    colorVariant?: ColorVariant
} = {}): {
    settings: ThemeSettings,
    color: string,
    backgroundColor: string,
    borderWidth: number,
    innerPadding: number,
    controlMinHeight: number,
    fontSize: number,
    valueFontSize: number,
    subTitleFontSize: number,
    titleFontSize: number
} {
    const theme = useContext(ThemeContext);
    const variantColor = theme[`${props.colorVariant ?? "primary"}Color`];
    const defaultFontSize = theme.scale * 5;

    return {
        settings: theme,
        color: props.inverted ? theme.backgroundColor : variantColor,
        backgroundColor : props.inverted ? variantColor : theme.backgroundColor,
        borderWidth: theme.scale,
        innerPadding: theme.scale * 5,
        controlMinHeight: theme.scale * 22,
        fontSize: defaultFontSize,
        valueFontSize: defaultFontSize * 1.65,
        subTitleFontSize: defaultFontSize * 1.15,
        titleFontSize: defaultFontSize * 8
    };
}