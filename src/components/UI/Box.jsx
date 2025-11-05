import React from "react";
import { Box as ChakraBox, useTheme, useColorMode } from "@chakra-ui/react";

export function Box({ variant = "neutral", children, ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  // Pull colors from your variant system
  const v = theme.colors?.variants?.[variant];

  const bgColor = v?.[colorMode] || "transparent";
  const textColor =
    v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`] ||
    theme.colors.brand[500];

  return (
    <ChakraBox
      bg={bgColor}
      color={textColor}
      p={4}
      borderRadius="md"
      borderWidth="1px"
      borderColor={bgColor}
      transition="all 0.15s ease"
      {...props}
    >
      {children}
    </ChakraBox>
  );
}
