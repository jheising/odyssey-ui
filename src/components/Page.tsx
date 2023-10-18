import React, { PropsWithChildren, useContext } from "react";
import { ThemeContext } from "../Theme";
import { Box } from "../primitives/Box";
import { View } from "react-native";
import { Title } from "../primitives/Title";
import { Text } from "../primitives/Text";

export const Page = (props: PropsWithChildren<{
    title:string;
    description?: string;
}>) => {
    const theme = useContext(ThemeContext);
    return <View>
        <Box style={{
            padding: theme.thickness * 5
        }}>{props.children}</Box>
        <View style={{
            display: "flex",
            flexDirection: "row",
            columnGap: theme.thickness * 4,
            flexWrap: "wrap"
        }}>
            <View style={{flex:1, paddingTop: theme.thickness * 2, minWidth: 200}}>
                <Text style={{textTransform:"uppercase", fontSize: theme.thickness * 6}}>{props.description}</Text>
            </View>
            <Title label={props.title}/>
        </View>
    </View>
};