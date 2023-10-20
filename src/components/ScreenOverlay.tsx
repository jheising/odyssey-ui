import { ImageBackground, ScrollView, StyleSheet, View } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";

export const ScreenOverlay = (props: ViewProps) => {
    return <View style={[StyleSheet.absoluteFillObject, {overflow: "hidden"}]}>
        <ScrollView {...props}/>
        <ImageBackground source={require("../../assets/vignette.png")}
                         imageStyle={{
                             resizeMode: "stretch"
                         }}
                         style={[
                             StyleSheet.absoluteFillObject,
                             {
                                 opacity: 0.75,
                                 pointerEvents: "none"
                             }
                         ]} />
        <ImageBackground source={require("../../assets/grid.png")}
                         imageStyle={{
                             resizeMode: "repeat"
                         }}
                         style={[
                             StyleSheet.absoluteFillObject,
                             {
                                 opacity: 0.05,
                                 pointerEvents: "none"
                             }
                         ]} />
    </View>;
};