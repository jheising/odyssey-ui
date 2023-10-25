import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { ViewProps } from "react-native/Libraries/Components/View/ViewPropTypes";
import random from "lodash/random";

export const BlinkAnimation = (props: ViewProps & {
    disabled?: boolean;
    animationDelay?: number;
    onAnimationFinished?: () => void;
}) => {

    const animValue = useRef(new Animated.Value(0)).current;
    const anim = Animated.sequence([
        Animated.timing(animValue, {
            toValue: 1,
            duration: 10,
            delay: props.animationDelay ?? random(0, 1500),
            useNativeDriver: true
        }),
        Animated.loop(Animated.sequence([
            Animated.timing(animValue, {
                toValue: 0,
                duration: 50,
                useNativeDriver: true
            }),
            Animated.timing(animValue, {
                toValue: 1,
                duration: 50,
                useNativeDriver: true
            })
        ]), {
            iterations: 3
        })
    ]);

    useEffect(() => {
        startAnimation();
    }, [props.disabled]);

    function startAnimation() {
        anim.stop();
        animValue.setValue(0);

        if (props.disabled) {
            return;
        }

        anim.start(() => {
            if (props.onAnimationFinished) {
                props.onAnimationFinished();
            }
        });
    }

    return <Animated.View {...props} style={[props.style, {
        opacity: animValue
    }]} />;
};