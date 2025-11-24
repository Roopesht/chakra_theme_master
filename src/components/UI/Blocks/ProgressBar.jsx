// src/components/UI/Loading/ProgressBar.jsx
import React from "react";
import { Progress, useTheme, useColorMode } from "@chakra-ui/react";

export function ProgressBar({ 
  value = 0, 
  variant = "accent",
  size = "md",
  hasStripe = false,
  isAnimated = false,
  ...props 
}) {
  const theme = useTheme();
  const { colorMode } = useColorMode();
  
  const v = theme.colors?.variants?.[variant];
  const color = v?.[colorMode] || theme.colors.brand[500];
  const trackColor = colorMode === 'dark' ? 'whiteAlpha.300' : 'gray.100';

  return (
    <Progress
      value={value}
      size={size}
      colorScheme={undefined}
      hasStripe={hasStripe}
      isAnimated={isAnimated}
      sx={{
        '& > div': { 
          bg: color,
          transition: 'all 0.3s ease'
        }
      }}
      bg={trackColor}
      borderRadius="full"
      {...props}
    />
  );
}