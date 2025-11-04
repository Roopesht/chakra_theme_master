// src/components/Checkbox.jsx
import React from "react";
import { Checkbox as ChakraCheckbox, useTheme, useColorMode } from "@chakra-ui/react";

export function Checkbox({ variant = "accent", children, ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors?.variants?.[variant];
  const borderColor = v?.[colorMode] || theme.colors.brand[400];
  const checkedColor = v?.[colorMode] || theme.colors.brand[500];

  return (
    <ChakraCheckbox
      colorScheme={undefined}
      borderColor={borderColor}
      _hover={{ borderColor: checkedColor }}
      _checked={{
        bg: checkedColor,
        borderColor: checkedColor,
        color: v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`] || "white",
      }}
      _focus={{
        boxShadow: `0 0 0 1px ${checkedColor}`,
      }}
      transition="all 0.15s ease"
      {...props}
    >
      {children}
    </ChakraCheckbox>
  );
}
