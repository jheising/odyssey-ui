import React, { useContext } from "react";
import { ColorVariant, ThemeContext } from "../Theme";
import { Tag } from "./Tag";

export const Tabs = (props: {
    label: string;
    colorVariant?: ColorVariant;
}) => {
    const theme = useContext(ThemeContext);
    return <Tag label="Tab 1"/>
};