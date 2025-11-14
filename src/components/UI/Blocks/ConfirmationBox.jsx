import React from "react";
import { Box, Button, Text, useTheme, useColorMode } from "@chakra-ui/react";

export default function ConfirmationBox({ variant = "neutral" }) {
  const theme = useTheme();
  const { colorMode } = useColorMode();

  // Access variant token dynamically
  const v =
    theme.colors?.variants?.[variant] ??
    theme.colors.variants.neutral;

  const bg = v[colorMode];
  const text =
    colorMode === "dark" ? theme.colors.brand[50] : theme.colors.brand[900];

  return (
    <Box p={4} borderRadius="md" bg={bg} color={text}>
      <Text mb={3}>Are you sure you want to delete this item?</Text>
      <Button variant="danger" mr={2}>
        Delete
      </Button>
      <Button variant="outline">Cancel</Button>
    </Box>
  );
}