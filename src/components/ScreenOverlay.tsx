import { ImageBackground, ScrollView, ScrollViewProps, StyleSheet, View } from "react-native";

export const ScreenOverlay = (props: ScrollViewProps) => {
    return <View style={[StyleSheet.absoluteFillObject, {overflow: "hidden"}]}>
        <ScrollView {...props}/>
        <ImageBackground source={require("../../assets/vignette.png")}
                         resizeMode="stretch"
                         style={[
                             StyleSheet.absoluteFillObject,
                             {
                                 opacity: 0.75,
                                 pointerEvents: "none"
                             }
                         ]} />
        <ImageBackground source={require("../../assets/grid.png")}
                         resizeMode="repeat"
                         style={[
                             StyleSheet.absoluteFillObject,
                             {
                                 opacity: 0.05,
                                 pointerEvents: "none"
                             }
                         ]} />
    </View>;
};