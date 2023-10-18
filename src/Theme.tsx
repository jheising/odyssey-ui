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
    thickness: number;
}

export const Themes: Record<string, ThemeSettings> = {
    Slate: {
        primaryColor: "#E1E3DF",
        dangerColor: "#bd2538",
        successColor: "#2B8962",
        infoColor: "#6384e7",
        warnColor: "#e3e78a",
        backgroundColor: "#1B3B5C",
        thickness: 3
    }
};

export const ThemeContext = createContext<ThemeSettings>(Themes.Slate);

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

    return <ThemeContext.Provider value={props.theme ?? Themes.Slate}>
        {props.children}
    </ThemeContext.Provider>;
};