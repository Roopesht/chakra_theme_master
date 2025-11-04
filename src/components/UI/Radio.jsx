// src/components/Radio.jsx
import React from "react";
import { Radio as ChakraRadio, useTheme, useColorMode } from "@chakra-ui/react";

export function Radio({ variant = "accent", children, ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors?.variants?.[variant];
  const borderColor = v?.[colorMode] || theme.colors.brand[400];
  const checkedColor = v?.[colorMode] || theme.colors.brand[500];

  return (
    <ChakraRadio
      colorScheme={undefined} // ensures theme colors take over
      iconColor={checkedColor}
      _checked={{
        borderColor: checkedColor,
        bg: checkedColor,
      }}
      _focus={{
        boxShadow: `0 0 0 1px ${checkedColor}`,
      }}
      borderColor={borderColor}
      transition="all 0.15s ease"
      {...props}
    >
      {children}
    </ChakraRadio>
  );
}
