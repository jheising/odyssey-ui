import React, { PropsWithChildren } from "react";
import { Box } from "../primitives/Box";
import { View } from "react-native";
import { Title } from "../primitives/Title";
import { useTheme } from "../hooks/useTheme";
import { Subtitle } from "../primitives/Subtitle";

export const Page = (props: PropsWithChildren<{
    title:string;
    description?: string;
}>) => {
    const theme = useTheme();
    return <View>
        <Box style={{
            padding: theme.innerPadding
        }}>{props.children}</Box>
        <View style={{
            display: "flex",
            flexDirection: "row",
            columnGap: theme.innerPadding * 2,
            flexWrap: "wrap"
        }}>
            <View style={{flex:1, paddingTop: theme.innerPadding, minWidth: 200}}>
                <Subtitle label={props.description}/>
            </View>
            <Title label={props.title}/>
        </View>
    </View>
};