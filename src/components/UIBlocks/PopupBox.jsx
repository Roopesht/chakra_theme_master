import React from "react";
import { Box, Button, Text } from "@chakra-ui/react";

export default function PopupBox() {
  return (
    <Box p={4} borderRadius="md" bg="bg.surface">
      <Text mb={2}>This is a small popup notification.</Text>
      <Button size="sm">Action</Button>
    </Box>
  );
}
