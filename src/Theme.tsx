import { createContext, PropsWithChildren } from "react";
import { useFonts } from "expo-font";

export type ColorVariant = "primary" | "danger" | "success" | "info" | "warn";

export interface ThemeSettings {
    primaryColor: string;
    dangerColor: string;
    successColor: string;
    infoColor: string;
    warnColor: string;
    backgroundColor: string;
    scale: number;
}

export const Themes: Record<string, ThemeSettings> = {
    Slate: {
        primaryColor: "#E1E3DF",
        dangerColor: "#bd2538",
        successColor: "#2B8962",
        infoColor: "#6384e7",
        warnColor: "#e3e78a",
        backgroundColor: "#1B3B5C",
        scale: 2.75
    },
    Dune: {
        primaryColor: "#d3cb98",
        dangerColor: "#bd2538",
        successColor: "#2B8962",
        infoColor: "#6384e7",
        warnColor: "#e3e78a",
        backgroundColor: "#151838",
        scale: 2.75
    }
};

const DEFAULT_THEME = Themes.Slate;

export const ThemeContext = createContext<ThemeSettings>(DEFAULT_THEME);

export interface ThemeProps extends PropsWithChildren {
    theme?: ThemeSettings;
}

export const Theme = (props: ThemeProps) => {
    const [fontsLoaded, error] = useFonts({
        "odyssey": require("../assets/default-font.ttf")
    });

    if (!fontsLoaded) {
        return null;
    }

    return <ThemeContext.Provider value={props.theme ?? DEFAULT_THEME}>
        {props.children}
    </ThemeContext.Provider>;
};