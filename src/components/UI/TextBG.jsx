// src/components/Text.jsx
import React from "react";
import { Text as ChakraText, useTheme, useColorMode } from "@chakra-ui/react";

export function TextBG({ variant = "neutral", children, ...props }) {
    const theme = useTheme();
    const { colorMode } = useColorMode();

    const v = theme.colors?.variants?.[variant];
    const bgColor = v?.[colorMode] || "transparent";
    const textColor = v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`] || theme.colors.brand[500];
    //const textColor = v?.[`${colorMode}`] || theme.colors.brand[500];
    //console.log("Variant: ", variant, "colorMode: ", colorMode, "color: ", textColor, "Variant: ", theme.colors?.variants);

    return (
        <ChakraText color={textColor} bg={bgColor}  paddingLeft={1} paddingRight={1} transition="color 0.15s ease" {...props}>
            {children}
        </ChakraText>
    );
}
