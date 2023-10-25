import React, { useEffect, useRef, useState } from "react";
import { ColorVariant } from "../Theme";
import { Button } from "./Button";
import { Animated, FlatList, NativeScrollEvent, NativeSyntheticEvent, TouchableOpacity, View } from "react-native";
import { Box } from "../primitives/Box";
import { BlinkAnimation } from "../primitives/BlinkAnimation";
import { Text } from "../primitives/Text";
import { ListRenderItemInfo } from "@react-native/virtualized-lists/Lists/VirtualizedList";
import { useTheme } from "../hooks/useTheme";

export interface Option {
    name: string;
    value?: any;
}

export interface DropdownProps {
    colorVariant?: ColorVariant;
    placeholderText?: string;
    options?: Option[];
    value?: Option;
    onChange?: (option: Option | undefined, index: number) => void;
}

const MAX_DROPDOWN_DISPLAY = 5;
const OPTION_HEIGHT_MULTIPLIER = 20;

export const Dropdown = (props: DropdownProps) => {
    const theme = useTheme({
        colorVariant: props.colorVariant
    });
    const [isOpen, setIsOpen] = useState(false);
    const [touchedIndex, setTouchedIndex] = useState(-1);
    const [preSelectedIndex, setPreSelectedIndex] = useState(-1);
    const listViewRef = useRef<FlatList>(null);
    const optionsToRender = props.options ?? [];
    const optionHeight = theme.settings.scale * OPTION_HEIGHT_MULTIPLIER;
    const expandedHeight = Math.min(optionsToRender.length, MAX_DROPDOWN_DISPLAY) * (optionHeight + theme.settings.scale * 2);

    const bottomBarAnimValue = useRef(new Animated.Value(0)).current;
    const bottomBarAnim = Animated.loop(
        Animated.sequence([Animated.timing(bottomBarAnimValue, {
            delay: 100,
            toValue: 100,
            duration: 500,
            useNativeDriver: true
        })]));

    useEffect(() => {
        if (!isOpen) {
            handleBottomBarAnim(false);
        }
    }, [
        isOpen
    ]);

    function handleBottomBarAnim(animate: boolean) {
        if (animate) {
            bottomBarAnimValue.setValue(0);
            bottomBarAnim.reset();
            bottomBarAnim.start();
        } else {
            bottomBarAnim.stop();
            bottomBarAnimValue.setValue(0);
        }
    }

    function handleScrollContentSizeChange(w: number, h: number) {
        if (h === 0) {
            handleBottomBarAnim(false);
        } else if (h > expandedHeight) {
            if (listViewRef.current) {
                listViewRef.current.flashScrollIndicators();
            }

            handleBottomBarAnim(true);
        }
    }

    function handleSelectOptionIndex(index: number) {
        setPreSelectedIndex(index);
    }

    function handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
        const isNearBottom = event.nativeEvent.layoutMeasurement.height + event.nativeEvent.contentOffset.y >= event.nativeEvent.contentSize.height;
        handleBottomBarAnim(!isNearBottom);
    }

    function toggleOpen() {
        setPreSelectedIndex(-1);
        setIsOpen(!isOpen);
    }

    function handleOptionTouchDown(index: number) {
        setTouchedIndex(index);
    }

    function handleOptionTouchUp() {
        setTouchedIndex(-1);
    }

    function handleOptionPressed(index: number) {
        handleSelectOptionIndex(index);
    }

    function handlePreselectionFinished() {
        if (props.onChange) {
            props.onChange(props.options?.[preSelectedIndex], preSelectedIndex);
        }

        setPreSelectedIndex(-1);
        setIsOpen(false);
    }

    function renderOption(item: ListRenderItemInfo<Option>) {
        const hasPreselection = preSelectedIndex !== -1;
        const isPreSelected = item.index === preSelectedIndex;
        const isSelected = item.index === touchedIndex || isPreSelected;

        let optionBox = <Box style={{ height: optionHeight, backgroundColor: isSelected ? theme.color : undefined }}>
            <Text style={{ color: isSelected ? theme.backgroundColor : undefined }}>{item.item.name}</Text>
        </Box>;

        if (isPreSelected) {
            return <BlinkAnimation animationDelay={0} key={Date.now()} onAnimationFinished={handlePreselectionFinished}>
                {optionBox}
            </BlinkAnimation>;
        }

        optionBox = <TouchableOpacity key={item.item.name + item.index} onPressIn={() => handleOptionTouchDown(item.index)} onPressOut={handleOptionTouchUp} onPress={() => handleOptionPressed(item.index)}>
            {optionBox}
        </TouchableOpacity>;

        if (item.index < MAX_DROPDOWN_DISPLAY) {
            return <BlinkAnimation animationDelay={hasPreselection ? 0 : item.index * 125} key={item.item.name + item.index}>
                {optionBox}
            </BlinkAnimation>;
        }

        return optionBox;
    }

    return <View style={{
        zIndex: 1000
    }}>
        <Button title={props.value ? props.value.name : props.placeholderText} colorVariant={props.colorVariant} onPress={toggleOpen} />
        <View style={{
            marginBottom: theme.settings.scale * 5
        }}>
            <View style={{
                position: "absolute",
                backgroundColor: theme.backgroundColor,
                zIndex: 1000,
                left: 0,
                right: theme.settings.scale * 9
            }}>
                {isOpen && <FlatList
                    ref={listViewRef}
                    data={optionsToRender}
                    renderItem={renderOption}
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                    onContentSizeChange={handleScrollContentSizeChange}
                    onScroll={handleScroll}
                    scrollEventThrottle={250}
                    style={{
                        height: isOpen ? expandedHeight : 0,
                        paddingTop: isOpen ? theme.settings.scale * 2 : 0
                    }}
                    contentContainerStyle={{
                        gap: theme.settings.scale * 2
                    }} />}
                <Animated.View style={{
                    borderTopColor: theme.color,
                    borderTopWidth: theme.settings.scale,
                    borderRightColor: "transparent",
                    borderRightWidth: theme.settings.scale,
                    marginTop: theme.settings.scale * 2,
                    opacity: bottomBarAnimValue.interpolate({
                        inputRange: [0, 100],
                        outputRange: [1, 0]
                    }),
                    transform: bottomBarAnimValue.interpolate({
                        inputRange: [0, 100],
                        outputRange: ["translateY(0px)", "translateY(10px)"]
                    })
                }} />
            </View>
        </View>
    </View>;
};