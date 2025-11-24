// src/components/UI/Blocks/ResponsiveGrid.jsx
import React from "react";
import { SimpleGrid } from "@chakra-ui/react";

export function ResponsiveGrid({ 
  children, 
  minChildWidth = "250px",
  spacing = 4,
  ...props 
}) {
  return (
    <SimpleGrid
      minChildWidth={minChildWidth}
      spacing={spacing}
      {...props}
    >
      {children}
    </SimpleGrid>
  );
}