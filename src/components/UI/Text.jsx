// src/components/Text.jsx
import React from "react";
import { Text as ChakraText, useTheme, useColorMode } from "@chakra-ui/react";

export function Text({ variant = "neutral", children, ...props }) {
    const theme = useTheme();
    const { colorMode } = useColorMode();

    const v = theme.colors?.variants?.[variant];
    let textColor = v?.[`${colorMode}`] || theme.colors.brand[500];
    if (variant === "neutral") {
        const altColorMode = (colorMode == 'dark') ? 'light' : 'dark';
        textColor = v?.[`${altColorMode}`] 
        console.log("Text color: ", textColor, colorMode);
    }

    return (
        <ChakraText color={textColor}  paddingLeft={1} paddingRight={1} transition="color 0.15s ease" {...props}>
            {children}
        </ChakraText>
    );
}
