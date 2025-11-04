import React from "react";
import { Button, useClipboard, Box, Text } from "@chakra-ui/react";

export default function CodeCopyBox({ code }) {
  const { onCopy, hasCopied } = useClipboard(code || "");
  return (
    <Box mt={2}>
      <Button size="sm" onClick={onCopy}>
        {hasCopied ? "Copied!" : "Copy Code"}
      </Button>
      <Text fontSize="xs" mt={1} color="gray.500">{(code || "").slice(0, 80)}...</Text>
    </Box>
  );
}
