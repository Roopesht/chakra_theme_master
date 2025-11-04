// src/components/Switch.jsx
import React from "react";
import { Switch as ChakraSwitch, useTheme, useColorMode } from "@chakra-ui/react";

export function Switch({ variant = "accent", ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors?.variants?.[variant];
  const trackBg = v?.[colorMode] || theme.colors.brand[300];
  const trackCheckedBg = v?.[colorMode] || theme.colors.brand[500];

  return (
    <ChakraSwitch
      size="md"
      sx={{
        "--switch-track-bg": trackBg,
        "--switch-track-checked-bg": trackCheckedBg,
      }}
      _checked={{
        bg: "var(--switch-track-checked-bg)",
      }}
      _focus={{
        boxShadow: `0 0 0 1px ${trackCheckedBg}`,
      }}
      transition="all 0.15s ease"
      {...props}
    />
  );
}
