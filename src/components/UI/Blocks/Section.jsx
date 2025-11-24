// src/components/UI/Blocks/Section.jsx
import React from "react";
import { Box, useTheme, useColorMode } from "@chakra-ui/react";

export function Section({ 
  variant = "neutral", 
  children, 
  spacing = 6,
  ...props 
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  return (
    <Box
      variant={variant}
      p={spacing}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={colorMode === 'dark' ? 'whiteAlpha.200' : 'blackAlpha.100'}
      {...props}
    >
      {children}
    </Box>
  );
}