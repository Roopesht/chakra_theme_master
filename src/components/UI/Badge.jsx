import React from "react";
import { Badge as ChakraBadge, useTheme, useColorMode } from "@chakra-ui/react";

export function Badge({ variant = "neutral", children, ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  const v = theme.colors?.variants?.[variant];
  const bgColor = v?.[colorMode] || "transparent";
  const textColor =
    v?.[`text${colorMode === "dark" ? "Dark" : "Light"}`] ||
    theme.colors.brand[500];

  return (
    <ChakraBadge
      px={2}
      py={0.5}
      bg={bgColor}
      color={textColor}
      borderRadius="full"
      fontWeight="medium"
      fontSize="sm"
      textTransform="capitalize"
      transition="all 0.15s ease"
      {...props}
    >
      {children}
    </ChakraBadge>
  );
}
