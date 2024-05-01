// @ts-ignore
import AnimateNumber from "react-native-animate-number";
import has from "lodash/has";
import isString from "lodash/isString";

export interface NumericDisplayValue {
    prefix?: string;
    number: number;
    suffix?: string;
}

export const AnimatedString = (props: {
    value: string | number | NumericDisplayValue;
    formatter?: (value: number) => string;
    animate?: boolean;
}) => {

    function formatValueString(value: number) {
        const formattedString = value.toFixed(decimalPlaces);
        if (props.formatter) {
            return props.formatter(Number(formattedString));
        }

        if (isNumericDisplayValue) {
            const numValue = (props.value as NumericDisplayValue);
            return `${numValue.prefix ? numValue.prefix : ""}${formattedString}${numValue.suffix ? numValue.suffix : ""}`;
        }

        return formattedString;
    }

    if (isString(props.value)) {
        return props.value as string;
    }

    const isNumericDisplayValue = has(props.value, "number");
    const currentValue = (props.value as NumericDisplayValue).number ?? props.value;

    const decimalPlaces = currentValue.toString().split(".")[1]?.length ?? 0;
    return props.animate === false ? formatValueString(currentValue) : <AnimateNumber value={currentValue} timing="easeOut" steps={25} formatter={formatValueString} />;
};