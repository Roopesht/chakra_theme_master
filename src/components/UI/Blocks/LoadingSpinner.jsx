// src/components/UI/Blocks/LoadingSpinner.jsx
import React from "react";
import { Spinner, useTheme, useColorMode } from "@chakra-ui/react";

export function LoadingSpinner({ 
  size = "md", 
  variant = "accent",
  thickness = "2px",
  speed = "0.65s",
  ...props 
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  
  const v = theme.colors?.variants?.[variant];
  const color = v?.[colorMode] || theme.colors.brand[500];
  const emptyColor = colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.200';

  return (
    <Spinner
      size={size}
      thickness={thickness}
      speed={speed}
      color={color}
      emptyColor={emptyColor}
      {...props}
    />
  );
}

// Skeleton Loading
export function Skeleton({ variant = "neutral", ...props }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  
  const v = theme.colors?.variants?.[variant];
  const startColor = v?.[colorMode] || (colorMode === 'dark' ? 'whiteAlpha.400' : 'gray.200');
  const endColor = colorMode === 'dark' ? 'whiteAlpha.200' : 'gray.100';

  return (
    <Skeleton
      startColor={startColor}
      endColor={endColor}
      borderRadius="md"
      {...props}
    />
  );
}