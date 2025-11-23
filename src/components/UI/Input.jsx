import React from "react";
import { Input as ChakraInput, useTheme, useColorMode } from "@chakra-ui/react";

export function Input({ variant = "accent", ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  // look up the variant definition from theme
  const v = theme.colors?.variants?.[variant];

  // fallback logic if the variant doesn’t exist
  const borderColor = v?.[colorMode] || theme.colors.brand[400];

  const focusColor = v?.[colorMode] || theme.colors.brand[500];
  const textColor =
    v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`] ||
    theme.colors.gray[800];

  return (
    <ChakraInput
      size="md"
      borderColor={borderColor}
      color={borderColor}
      focusBorderColor={focusColor}
      _hover={{ borderColor: focusColor }}
      _placeholder={{ color: textColor, opacity: 0.6 }}
      transition="all 0.2s ease"
      {...props}
    />
  );
}
